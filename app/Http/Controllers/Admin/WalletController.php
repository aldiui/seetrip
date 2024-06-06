<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WalletController extends Controller
{
    public function index(Request $request)
    {
        $wallets = Wallet::search($request->search)
            ->when(function ($query) {
                return $query->where('tipe', 'admin');
            })
            ->paginate($request->perpage ?? 25)
            ->appends('query', null)
            ->withQueryString();
        return Inertia::render('Admin/Wallet/Index', compact('wallets'));
    }

    public function create()
    {
        return Inertia::render('Admin/Wallet/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_bank' => 'required|in:BCA,BNI,BRI,Mandiri,CIMB,Niaga,Danamon,Permata,BSI,Dana,OVO,Go-Pay',
            'nama_akun' => 'required',
            'nomor_rekening' => 'required',
        ]);

        Wallet::create([
            'nama_bank' => $request->input('nama_bank'),
            'nama_akun' => $request->input('nama_akun'),
            'nomor_rekening' => $request->input('nomor_rekening'),
            'tipe' => 'admin',
        ]);

        return redirect('/admin/wallet')->with('success', 'Wallet Berhasil ditambahkan');
    }

    public function edit($uuid)
    {
        $wallet = Wallet::whereUuid($uuid)->whereUserId(null)->firstOrFail();
        return Inertia::render('Admin/Wallet/Edit', compact('wallet'));
    }

    public function update(Request $request, $uuid)
    {
        $wallet = Wallet::whereUuid($uuid)->whereUserId(null)->firstOrFail();

        $request->validate([
            'nama_bank' => 'required|in:BCA,BNI,BRI,Mandiri,CIMB,Niaga,Danamon,Permata,BSI,Dana,OVO,Go-Pay',
            'nama_akun' => 'required',
            'nomor_rekening' => 'required',
        ]);

        $wallet->update($request->only('nama_bank', 'nama_akun', 'nomor_rekening'));
        return redirect('/admin/wallet')->with('success', 'Wallet Berhasil diubah');
    }

    public function destroy($uuid)
    {
        $wallet = Wallet::whereUuid($uuid)->whereUserId(null)->firstOrFail();
        $wallet->delete();
        return back()->with('success', 'Wallet Berhasil dihapus');
    }
}