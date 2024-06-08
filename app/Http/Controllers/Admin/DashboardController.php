<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Destination;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Wallet;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $count = [
            'user' => User::whereRole('user')->count(),
            'category' => Category::count(),
            'destination' => Destination::count(),
            'wallet' => Wallet::whereTipe('admin')->count(),
        ];

        Carbon::setLocale('id');

        $months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
        ];

        $revenueData = Transaction::where('status', '1')
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

        $topOwners = DB::table('transactions')
            ->join('destination_prices', 'transactions.destination_price_id', '=', 'destination_prices.id')
            ->join('destinations', 'destination_prices.destination_id', '=', 'destinations.id')
            ->join('users', 'destinations.user_id', '=', 'users.id')
            ->select(
                'users.nama as owner_name',
                DB::raw('SUM(transactions.quantitas) as total_tickets'),
                DB::raw('SUM(transactions.total_harga - COALESCE(transactions.diskon, 0)) as total_revenue')
            )
            ->where('transactions.status', '1')
            ->groupBy('users.id', 'users.nama')
            ->orderBy('total_tickets', 'desc')
            ->get();

        $transactions = Transaction::with(['user', 'destinationPrice', 'destinationPrice.destination', 'destinationPrice.destination.user', 'destinationPrice.destination.category'])
            ->where('status', '1')
            ->whereDate('created_at', Carbon::today())
            ->get();

        $tanggalToday = formatTanggal();

        $transactionsHigh = Transaction::with([
            'user',
            'destinationPrice',
            'destinationPrice.destination',
            'destinationPrice.destination.user',
            'destinationPrice.destination.category',
        ])
            ->where('status', '1')
            ->get();

        $ownersData = [];

        foreach ($transactions as $transaction) {
            $ownerName = $transaction->destinationPrice->destination->user->nama;
            $categoryName = $transaction->destinationPrice->destination->category->nama;
            $destinationName = $transaction->destinationPrice->destination->nama;
            $ticketsSold = $transaction->quantitas;

            $key = "{$ownerName}_{$categoryName}_{$destinationName}";

            if (!isset($ownersData[$key])) {
                $ownersData[$key] = [
                    'owner_name' => $ownerName,
                    'category_name' => $categoryName,
                    'destination_name' => $destinationName,
                    'total_tickets' => 0,
                ];
            }

            $ownersData[$key]['total_tickets'] += $ticketsSold;
        }

        $topData = collect($ownersData)->values()->sortByDesc('total_tickets')->all();


        return Inertia::render('Admin/Dashboard/Index', compact('count', 'monthlyRevenue', 'topOwners', 'transactions', 'tanggalToday', 'topData'));
    }
}