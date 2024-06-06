<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        if ($request->isMethod('post')) {
            $request->validate([
                'nama' => 'required',
                'email' => 'required|unique:users',
                'password' => 'required|min:8',
                'konfirmasi_password' => 'required|min:8|same:password',
            ]);

            User::create($request->only('nama', 'email', 'password'));

            return redirect('/login')->with('success', 'Registrasi Berhasil');
        }

        return Inertia::render('Auth/Register');
    }

    public function login(Request $request)
    {
        if ($request->isMethod('post')) {
            $request->validate([
                'email' => 'required',
                'password' => 'required|min:8',
            ]);

            $credentials = $request->only('email', 'password');

            if (Auth::attempt($credentials)) {
                $request->session()->regenerate();
                return redirect('/')->with('success', 'Login Berhasil');
            }

            return back()->with('error', 'Login Gagal');
        }

        return Inertia::render('Auth/Login');
    }

    public function logout()
    {
        auth()->logout();

        return redirect('/login')->with('success', 'Logout Berhasil');
    }
}
