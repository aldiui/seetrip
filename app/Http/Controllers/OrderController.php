<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\DestinationPrice;
use App\Models\Transaction;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class orderController extends Controller
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
        return Inertia::render('Customer/Order/Index', compact('transactions'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'destination' => 'required|exists:destinations,uuid',
            'destination_price' => 'required|exists:destination_prices,uuid',
            'quantitas' => 'required',
        ]);

        $cekHarga = DestinationPrice::whereUuid($request->input('destination_price'))->firstOrFail();

        do {
            $nomorPemesanan = 'ST-' . random_int(100000, 999999);
            $cekNomorPemesanan = Transaction::where('nomor_pemesanan', $nomorPemesanan)->first();
        } while ($cekNomorPemesanan);

        $order = Transaction::create([
            'user_id' => auth()->user()->id,
            'destination_price_id' => $cekHarga->id,
            'quantitas' => $request->input('quantitas'),
            'nomor_pemesanan' => $nomorPemesanan,
            'total_harga' => $cekHarga->harga * $request->input('quantitas'),
        ]);

        return redirect('/order/' . $order->nomor_pemesanan)->with('success', 'Order berhasil di buat');
    }

    public function show($nomorPemesanan)
    {
        $order = Transaction::with('destinationPrice', 'destinationPrice.destination', 'destinationPrice.destination.user', 'user', 'wallet')->where('nomor_pemesanan', $nomorPemesanan)->where('user_id', auth()->user()->id)->firstOrFail();
        $pembayaran = Wallet::whereUserId($order->destinationPrice->destination->user->id)->get();
        return Inertia::render('Customer/Order/Show', compact('order', 'pembayaran'));
    }

    public function update(Request $request, $nomorPemesanan)
    {
        $request->validate([
            'pembayaran' => 'required|exists:wallets,uuid',
            'bukti_bayar' => 'required|image|max:10240|mimes:png,jpg,jpeg',
            'nama_pengirim' => 'required',
        ]);

        $order = Transaction::where('nomor_pemesanan', $nomorPemesanan)->where('user_id', auth()->user()->id)->firstOrFail();
        $cekWallet = Wallet::whereUuid($request->input('pembayaran'))->firstOrFail();
        $order->update([
            'wallet_id' => $cekWallet->id,
            'bukti_bayar' => $request->file('bukti_bayar')->hashName(),
            'nama_pengirim' => $request->input('nama_pengirim'),
        ]);

        $request->file('bukti_bayar')->store('images/bukti-bayar', 'public');

        return redirect('/order')->with('success', 'Order berhasil di update');
    }
}
