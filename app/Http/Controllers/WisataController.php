<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Destination;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WisataController extends Controller
{
    public function index(Request $request)
    {
        $categoryUUID = $request->category;
        $cekCategory = null;

        if ($categoryUUID) {
            $cekCategory = Category::where('slug', $categoryUUID)->first();
        }

        $destinationsQuery = Destination::search($request->search)
            ->query(function ($query) use ($cekCategory) {
                $query->with('user', 'category', 'destinationImages', 'destinationFacilities', 'destinationPrices', 'destinationVouchers');
                if ($cekCategory) {
                    $query->where('category_id', $cekCategory->id);
                }
            });

        $destinations = $destinationsQuery->paginate(12)
            ->appends(request()->query())
            ->withQueryString();

        $categories = Category::all();

        return Inertia::render('Wisata/Index', compact('destinations', 'categories'));
    }

    public function show($slug)
    {
        $destination = Destination::with(['user', 'category', 'destinationImages', 'destinationPrices', 'destinationVouchers', 'destinationFacilities'])->whereSlug($slug)->firstOrFail();
        return Inertia::render('Wisata/Show', compact('destination'));
    }
}
