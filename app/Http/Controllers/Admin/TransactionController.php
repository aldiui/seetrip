<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PDF;

class TransactionController extends Controller
{
    public function index(Request $request)
    {
        $transactions = Transaction::search($request->search)
            ->query(function ($query) {
                return $query->with('destinationPrice', 'destinationPrice.destination', 'user', 'wallet');
            })
            ->paginate($request->perpage ?? 25)
            ->appends('query', null)
            ->withQueryString();
        return Inertia::render('Admin/Transaction/Index', compact('transactions'));
    }

    public function show($nomorPemesanan)
    {
        $transaction = Transaction::with(['user', 'destinationPrice', 'destinationPrice.destination', 'destinationPrice.destination.user', 'voucher', 'wallet'])->where('nomor_pemesanan', $nomorPemesanan)->firstOrFail();
        return Inertia::render('Admin/Transaction/Show', compact('transaction'));
    }

    public function update(Request $request, $nomorPemesanan)
    {
        $transaction = Transaction::where('nomor_pemesanan', $nomorPemesanan)->firstOrFail();

        $request->validate([
            'status' => 'required|in:1,2',
        ]);

        $transaction->update([
            'status' => $request->input('status'),
        ]);

        $cekDestinationPrice = $transaction->destinationPrice->destination;
        $cekUser = User::find($cekDestinationPrice->user_id);

        if ($request->input('status') == 1) {
            $cekUser->update([
                'saldo' => $cekUser->saldo + $transaction->total_harga,
            ]);
        }

        return redirect('/admin/transaction')->with('success', 'Transaksi Berhasil diubah');
    }

    public function exportPdf()
    {
        $transactions = Transaction::with('destinationPrice', 'destinationPrice.destination', 'user', 'wallet')->where('status', '1')->latest()->get();

        $pdf = PDF::loadView('pages.admin.transaction', compact('transactions'));

        $options = [
            'margin_top' => 20,
            'margin_right' => 20,
            'margin_bottom' => 20,
            'margin_left' => 20,
        ];

        $pdf->setOptions($options);
        $pdf->setPaper('a4');
        return $pdf->stream("Laporan-Transaksi.pdf");

    }
}
