<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use App\Models\Voucher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DestinationVoucherController extends Controller
{
    public function create()
    {
        return Inertia::render('User/Destination/Voucher/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'destination_id' => 'required|exists:destinations,uuid',
            'kode' => 'required|unique:vouchers,kode',
            'deskripsi' => 'required',
            'diskon' => 'required|numeric',
            'kuota' => 'required|numeric',
            'tanggal_kadaluarsa' => 'required|date',
            'status' => 'required|in:0,1',
        ]);

        $destination = Destination::whereUuid($request->input('destination_id'))->firstOrFail();

        Voucher::create([
            'destination_id' => $destination->id,
            'kode' => $request->input('kode'),
            'deskripsi' => $request->input('deskripsi'),
            'diskon' => $request->input('diskon'),
            'kuota' => $request->input('kuota'),
            'tanggal_kadaluarsa' => $request->input('tanggal_kadaluarsa'),
            'status' => $request->input('status'),
        ]);

        return redirect('/user/destination/' . $destination->uuid)->with('success', 'Destinasi Voucher Berhasil ditambahkan');
    }

    public function edit($uuid)
    {
        $destinationVoucher = Voucher::whereUuid($uuid)->firstOrFail();
        return Inertia::render('User/Destination/Voucher/Edit', compact('destinationVoucher'));
    }

    public function update(Request $request, $uuid)
    {
        $destinationVoucher = Voucher::with('destination')->whereUuid($uuid)->firstOrFail();

        $request->validate([
            'kode' => 'required|unique:vouchers,kode,' . $destinationVoucher->id,
            'deskripsi' => 'required',
            'diskon' => 'required|numeric',
            'kuota' => 'required|numeric',
            'tanggal_kadaluarsa' => 'required|date',
            'status' => 'required|in:0,1',
        ]);

        $destinationVoucher->update($request->only('destination_id', 'kode', 'deskripsi', 'diskon', 'kuota', 'tanggal_kadaluarsa', 'status'));
        return redirect('/user/destination/' . $destinationVoucher->destination->uuid)->with('success', 'Destinasi Voucher Berhasil diubah');
    }

    public function destroy($uuid)
    {
        $destinationVoucher = Voucher::whereUuid($uuid)->firstOrFail();
        $destinationVoucher->delete();
        return back()->with('success', 'Destinasi Voucher Berhasil dihapus');
    }
}
