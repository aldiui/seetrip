<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Destination;
use App\Models\User;
use App\Models\Wallet;
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
        return Inertia::render('Admin/Dashboard/Index', compact('count'));
    }
}