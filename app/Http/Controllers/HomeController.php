<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Destination;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $destinations = Destination::with(['destinationImages', 'destinationFacilities', 'category'])
            ->inRandomOrder()
            ->limit(3)
            ->get();
        return Inertia::render('Home', compact('categories', 'destinations'));
    }
}