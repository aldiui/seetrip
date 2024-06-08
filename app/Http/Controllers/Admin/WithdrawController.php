<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Withdraw;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PDF;

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

    public function exportPdf()
    {
        $withdraws = Withdraw::with('user', 'wallet')->where('status', '1')->latest()->get();

        $pdf = PDF::loadView('pages.admin.withdraw', compact('withdraws'));

        $options = [
            'margin_top' => 20,
            'margin_right' => 20,
            'margin_bottom' => 20,
            'margin_left' => 20,
        ];

        $pdf->setOptions($options);
        $pdf->setPaper('a4');
        return $pdf->stream("Laporan-Withdraw.pdf");
    }
}