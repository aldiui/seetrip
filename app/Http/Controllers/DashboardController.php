<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use App\Models\Wallet;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $count = [
            'destination' => Destination::whereUserId(auth()->user()->id)->count(),
            'wallet' => Wallet::whereUserId(auth()->user()->id)->count(),
        ];
        return Inertia::render('User/Dashboard/Index', compact('count'));
    }
}
