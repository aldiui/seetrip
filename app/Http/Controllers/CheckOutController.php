<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\DestinationPrice;
use App\Models\Transaction;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckOutController extends Controller
{
    public function index(Request $request)
    {
        $transactions = Transaction::search($request->search)
            ->query(function ($query) {
                return $query->with('destinationPrice', 'destinationPrice.destination', 'user', 'wallet')->where('user_id', auth()->user()->id);
            })
            ->paginate($request->perpage ?? 25)
            ->appends('query', null)
            ->withQueryString();
        return Inertia::render('CheckOut/Index', compact('transactions'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'destination' => 'required|exists:destinations,uuid',
            'destination_price' => 'required|exists:destination_prices,uuid',
            'quantitas' => 'required',
        ]);

        $cekHarga = DestinationPrice::whereUuid($request->input('destination_price'))->firstOrFail();

        $nomorPemesanan = 'ST-' . random_int(100000, 999999);
        $cekNomorPemesanan = Transaction::where('nomor_pemesanan', $nomorPemesanan)->first();

        if ($cekNomorPemesanan) {
            $nomorPemesanan = 'ST-' . random_int(100000, 999999);
        }

        $checkOut = Transaction::create([
            'user_id' => auth()->user()->id,
            'destination_price_id' => $cekHarga->id,
            'quantitas' => $request->input('quantitas'),
            'nomor_pemesanan' => $nomorPemesanan,
            'total_harga' => $cekHarga->harga * $request->input('quantitas'),
        ]);

        return redirect('/check-out/' . $checkOut->nomor_pemesanan)->with('success', 'Checkout berhasil di buat');
    }

    public function show($nomorPemesanan)
    {
        $checkOut = Transaction::with('destinationPrice', 'destinationPrice.destination', 'user', 'wallet')->where('nomor_pemesanan', $nomorPemesanan)->where('user_id', auth()->user()->id)->firstOrFail();
        $pembayaran = Wallet::whereTipe('admin')->get();
        return Inertia::render('CheckOut/Show', compact('checkOut', 'pembayaran'));
    }

    public function update(Request $request, $nomorPemesanan)
    {
        $request->validate([
            'pembayaran' => 'required|exists:wallets,uuid',
            'bukti_bayar' => 'required|image|max:10240|mimes:png,jpg,jpeg',
            'nama_pengirim' => 'required',
        ]);

        $checkOut = Transaction::where('nomor_pemesanan', $nomorPemesanan)->where('user_id', auth()->user()->id)->firstOrFail();
        $cekWallet = Wallet::whereUuid($request->input('pembayaran'))->firstOrFail();
        $checkOut->update([
            'wallet_id' => $cekWallet->id,
            'bukti_bayar' => $request->file('bukti_bayar')->hashName(),
            'nama_pengirim' => $request->input('nama_pengirim'),
        ]);

        $request->file('bukti_bayar')->store('images/bukti-bayar', 'public');

        return back()->with('success', 'Checkout berhasil di update');
    }
}
