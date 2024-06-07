<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Wallet;
use App\Models\Withdraw;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WithdrawController extends Controller
{
    public function index(Request $request)
    {
        $withdraws = Withdraw::search($request->search)
            ->query(function ($query) {
                return $query->with('user', 'wallet')->where('user_id', auth()->user()->id);
            })
            ->paginate($request->perpage ?? 25)
            ->appends('query', null)
            ->withQueryString();
        return Inertia::render('User/Withdraw/Index', compact('withdraws'));
    }

    public function create()
    {
        $wallets = Wallet::where('user_id', Auth::id())->get();
        return Inertia::render('User/Withdraw/Create', compact('wallets'));
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $request->validate([
            'nominal' => 'required|numeric|lte:' . $user->saldo,
            'wallet_id' => 'required|exists:wallets,uuid',
        ]);

        do {
            $nomorPembayaran = 'WST-' . random_int(100000, 999999);
            $cekNomorPembayaran = Withdraw::where('nomor_pembayaran', $nomorPembayaran)->first();
        } while ($cekNomorPembayaran);

        $cekWallet = Wallet::whereUuid($request->input('wallet_id'))->first();

        Withdraw::create([
            'nomor_pembayaran' => $nomorPembayaran,
            'nominal' => $request->input('nominal'),
            'wallet_id' => $cekWallet->id,
            'user_id' => Auth::id(),
            'biaya_admin' => 0,
        ]);

        return redirect('/withdraw')->with('success', 'Withdraw berhasil di buat');
    }
}