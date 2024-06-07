<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    public function index(Request $request)
    {
        $transactions = Transaction::search($request->search)
            ->query(function ($query) {
                $query->with(['destinationPrice', 'destinationPrice.destination', 'user', 'wallet'])
                    ->whereHas('destinationPrice.destination', function ($query) {
                        $query->where('user_id', Auth::id());
                    });
            })
            ->paginate($request->perpage ?? 25)
            ->appends('query', null)
            ->withQueryString();
        return Inertia::render('User/Transaction/Index', compact('transactions'));
    }

    public function show($nomorPemesanan)
    {
        $transaction = Transaction::with(['user', 'destinationPrice', 'destinationPrice.destination', 'destinationPrice.destination.user', 'voucher', 'wallet'])->where('nomor_pemesanan', $nomorPemesanan)->firstOrFail();
        return Inertia::render('User/Transaction/Show', compact('transaction'));
    }
}