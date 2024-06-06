<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index(Request $request)
    {
        if ($request->isMethod('post')) {
            $request->validate([
                'nama' => 'required',
                'email' => 'required|unique:users,email,' . auth()->user()->id,
                'avatar' => 'nullable|image|max:2048|mimes:png,jpg,jpeg',
                'phone' => 'required|numeric|digits_between:10,13',
            ], [
                'avatar.image' => 'File harus berupa gambar',
                'avatar.max' => 'File maksimal 2 MB',
                'avatar.mimes' => 'File harus berupa PNG, JPG, JPEG',
                'phone.digits_between' => 'Nomor HP harus 10-13 digit',
                'phone.numeric' => 'Nomor HP harus berupa angka',
                'phone.required' => 'Nomor HP harus diisi',
            ]);

            if ($request->hasFile('avatar')) {
                if (auth()->user()->avatar) {
                    Storage::disk('public')->delete('images/avatars/' . basename(auth()->user()->avatar));
                }

                $request->file('avatar')->store('images/avatars', 'public');
                auth()->user()->update(['avatar' => $request->file('avatar')->hashName()]);
            }

            auth()->user()->update($request->only('nama', 'email', 'phone'));

            return back()->with('success', 'Profile Berhasil diubah');
        }

        $user = User::find(auth()->user()->id);
        return Inertia::render('User/Profile/Index', compact('user'));

    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'password_lama' => 'required|min:8',
            'password' => 'required|min:8',
            'konfirmasi_password' => 'required|min:8|same:password',
        ]);

        if (!auth()->attempt(['email' => auth()->user()->email, 'password' => $request->password_lama])) {
            return back()->with('error', 'Password lama yang anda masukkan salah');
        }

        auth()->user()->update(['password' => bcrypt($request->password)]);

        return back()->with('success', 'Password Berhasil diubah');
    }
}
