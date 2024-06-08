<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use App\Models\Transaction;
use App\Models\Wallet;
use Carbon\Carbon;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $count = [
            'destination' => Destination::whereUserId(auth()->user()->id)->count(),
            'wallet' => Wallet::whereUserId(auth()->user()->id)->count(),
        ];

        Carbon::setLocale('id');

        $months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
        ];

        $userId = auth()->user()->id;
        $revenueData = Transaction::where('status', '1')
            ->with(['destinationPrice', 'destinationPrice.destination', 'user', 'wallet'])
            ->whereHas('destinationPrice.destination', function ($query) use ($userId) {
                $query->where('user_id', $userId);
            })
            ->selectRaw('SUM(total_harga - COALESCE(diskon, 0)) as revenue, MONTH(created_at) as month')
            ->groupBy('month')
            ->orderBy('month')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->month => $item->revenue];
            });

        $monthlyRevenue = collect(range(1, 12))
            ->map(fn($month) => [
                'month' => Carbon::createFromDate(null, $month, 1)->format('F'),
                'revenue' => $revenueData[$month] ?? 0,
            ]);

        $transactions = Transaction::with(['user', 'destinationPrice', 'destinationPrice.destination', 'destinationPrice.destination.user', 'destinationPrice.destination.category'])
            ->where('status', '1')
            ->get();

        return Inertia::render('User/Dashboard/Index', compact('count', 'monthlyRevenue', 'transactions'));
    }
}
