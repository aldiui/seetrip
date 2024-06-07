<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Withdraw;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WithdrawController extends Controller
{
    public function index(Request $request)
    {
        $withdraws = Withdraw::search($request->search)
            ->query(function ($query) {
                return $query->with('user', 'wallet');
            })
            ->paginate($request->perpage ?? 25)
            ->appends('query', null)
            ->withQueryString();
        return Inertia::render('Admin/Withdraw/Index', compact('withdraws'));
    }

    public function show($nomorPembayaran)
    {
        $withdraw = Withdraw::with('user', 'wallet')->where('nomor_pembayaran', $nomorPembayaran)->firstOrFail();
        return Inertia::render('Admin/Withdraw/Show', compact('withdraw'));
    }

    public function update(Request $request, $nomorPembayaran)
    {
        $withdraw = Withdraw::where('nomor_pembayaran', $nomorPembayaran)->firstOrFail();
        $request->validate([
            'status' => 'required|numeric',
            'biaya_admin' => 'required|numeric',
        ]);

        $cekSaldoUser = $withdraw->user->saldo;

        if ($withdraw->nominal > $cekSaldoUser) {
            return redirect('/admin/withdraw')->with('error', 'Saldo user tidak mencukupi');
        }

        $withdraw->update($request->only('status', 'biaya_admin'));

        if ($withdraw->status == 1) {
            $withdraw->user->update([
                'saldo' => $withdraw->user->saldo - $withdraw->nominal,
            ]);
        }

        return redirect('/admin/withdraw')->with('success', 'Withdraw berhasil di ubah');
    }
}
