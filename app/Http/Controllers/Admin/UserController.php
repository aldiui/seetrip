<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::search($request->search)
            ->paginate($request->perpage ?? 25)
            ->appends('query', null)
            ->withQueryString();
        return Inertia::render('Admin/User/Index', compact('users'));
    }

    public function create()
    {
        return Inertia::render('Admin/User/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:8',
            'konfirmasi_password' => 'required|min:8|same:password',
            'role' => 'required|in:user,admin,customer',
            'phone' => 'required|numeric|digits_between:10,13',
            'avatar' => 'nullable|image|max:2048|mimes:png,jpg,jpeg',
            'saldo' => 'required|numeric',
        ], [
            'avatar.image' => 'File harus berupa gambar',
            'avatar.max' => 'File maksimal 2 MB',
            'avatar.mimes' => 'File harus berupa PNG, JPG, JPEG',
            'phone.digits_between' => 'Nomor HP harus 10-13 digit',
            'phone.numeric' => 'Nomor HP harus berupa angka',
            'phone.required' => 'Nomor HP harus diisi',
        ]);

        if ($request->hasFile('avatar')) {
            $request->file('avatar')->store('images/avatars', 'public');
        }

        User::create([
            'nama' => $request->input('nama'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'role' => $request->input('role'),
            'phone' => $request->input('phone'),
            'avatar' => $request->hasFile('avatar') ? $request->file('avatar')->hashName() : null,
            'saldo' => $request->input('saldo'),
        ]);

        return redirect('/admin/user')->with('success', 'User Berhasil ditambahkan');
    }

    public function edit($uuid)
    {
        $user = User::whereUuid($uuid)->firstOrFail();
        return Inertia::render('Admin/User/Edit', compact('user'));
    }

    public function update(Request $request, $uuid)
    {
        $user = User::whereUuid($uuid)->firstOrFail();

        $request->validate([
            'nama' => 'required',
            'email' => 'required|unique:users,email,' . $user->id,
            'password' => 'nullable|min:8',
            'konfirmasi_password' => 'nullable|min:8|same:password',
            'role' => 'required|in:user,admin,customer',
            'phone' => 'required|numeric|digits_between:10,13',
            'avatar' => 'nullable|image|max:2048|mimes:png,jpg,jpeg',
            'saldo' => 'required|numeric',
        ], [
            'avatar.image' => 'File harus berupa gambar',
            'avatar.max' => 'File maksimal 2 MB',
            'avatar.mimes' => 'File harus berupa PNG, JPG, JPEG',
            'phone.digits_between' => 'Nomor HP harus 10-13 digit',
            'phone.numeric' => 'Nomor HP harus berupa angka',
            'phone.required' => 'Nomor HP harus diisi',
        ]);

        if ($request->hasFile('avatar')) {
            Storage::disk('public')->delete('images/avatars/' . basename($user->avatar));
            $request->file('avatar')->store('images/avatars', 'public');
            $user->update(['avatar' => $request->file('avatar')->hashName()]);
        }

        if ($request->input('password')) {
            $user->update($request->only('password'));
        }

        $user->update($request->only('nama', 'email', 'role', 'phone', 'saldo'));
        return redirect('/admin/user')->with('success', 'User Berhasil diubah');
    }

    public function destroy($uuid)
    {
        $user = User::whereUuid($uuid)->firstOrFail();
        Storage::disk('public')->delete('images/avatars/' . basename($user->avatar));
        $user->delete();
        return back()->with('success', 'User Berhasil dihapus');
    }
}