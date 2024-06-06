<?php

namespace App\Http\Controllers;

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
                return $query->where('user_id', auth()->user()->id);
            })
            ->paginate($request->perpage ?? 25)
            ->appends('query', null)
            ->withQueryString();
        return Inertia::render('User/Wallet/Index', compact('wallets'));
    }

    public function create()
    {
        return Inertia::render('User/Wallet/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_bank' => 'required|in:BCA,BNI,BRI,Mandiri,CIMB,Niaga,Danamon,Permata,BSI,Dana,OVO,Go-Pay',
            'nama_akun' => 'required',
            'nomor_rekening' => 'required',
        ]);

        Wallet::create([
            'user_id' => auth()->user()->id,
            'nama_bank' => $request->input('nama_bank'),
            'nama_akun' => $request->input('nama_akun'),
            'nomor_rekening' => $request->input('nomor_rekening'),
        ]);

        return redirect('/wallet')->with('success', 'Wallet Berhasil ditambahkan');
    }

    public function edit($uuid)
    {
        $wallet = Wallet::whereUuid($uuid)->whereUserId(auth()->user()->id)->firstOrFail();
        return Inertia::render('User/Wallet/Edit', compact('wallet'));
    }

    public function update(Request $request, $uuid)
    {
        $wallet = Wallet::whereUuid($uuid)->whereUserId(auth()->user()->id)->firstOrFail();

        $request->validate([
            'nama_bank' => 'required|in:BCA,BNI,BRI,Mandiri,CIMB,Niaga,Danamon,Permata,BSI,Dana,OVO,Go-Pay',
            'nama_akun' => 'required',
            'nomor_rekening' => 'required',
        ]);

        $wallet->update($request->only('nama_bank', 'nama_akun', 'nomor_rekening'));
        return redirect('/wallet')->with('success', 'Wallet Berhasil diubah');
    }

    public function destroy($uuid)
    {
        $wallet = Wallet::whereUuid($uuid)->whereUserId(auth()->user()->id)->firstOrFail();
        $wallet->delete();
        return back()->with('success', 'Wallet Berhasil dihapus');
    }
}
