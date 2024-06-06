<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Destination;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DestinationController extends Controller
{
    public function index(Request $request)
    {
        $destinations = Destination::search($request->search)
            ->query(function ($query) {
                $query->with('user', 'category')->where('user_id', auth()->user()->id);
            })
            ->paginate($request->perpage ?? 25)
            ->appends('query', null)
            ->withQueryString();
        return Inertia::render('User/Destination/Index', compact('destinations'));
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('User/Destination/Create', compact('categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,uuid',
            'nama' => 'required',
            'deskripsi' => 'required',
            'link_youtube' => 'required',
            'lokasi' => 'required',
            'rating' => 'required|numeric',
        ]);

        $category = Category::whereUuid($request->input('category_id'))->firstOrFail();

        Destination::create([
            'user_id' => auth()->user()->id,
            'category_id' => $category->id,
            'nama' => $request->input('nama'),
            'deskripsi' => $request->input('deskripsi'),
            'link_youtube' => $request->input('link_youtube'),
            'lokasi' => $request->input('lokasi'),
            'rating' => $request->input('rating'),
        ]);

        return redirect('/destination')->with('success', 'Destinasi Berhasil ditambahkan');
    }

    public function edit($uuid)
    {
        $destination = Destination::whereUuid($uuid)->where('user_id', auth()->user()->id)->firstOrFail();
        $categories = Category::all();
        return Inertia::render('User/Destination/Edit', compact('destination', 'categories'));
    }

    public function show($uuid)
    {
        $destination = Destination::with(['user', 'category', 'destinationImages', 'destinationPrices', 'destinationVouchers', 'destinationFacilities'])->where('user_id', auth()->user()->id)->whereUuid($uuid)->firstOrFail();
        return Inertia::render('User/Destination/Show', compact('destination'));
    }

    public function update(Request $request, $uuid)
    {
        $destination = Destination::whereUuid($uuid)->where('user_id', auth()->user()->id)->firstOrFail();

        $request->validate([
            'category_id' => 'required|exists:categories,uuid',
            'nama' => 'required',
            'deskripsi' => 'required',
            'link_youtube' => 'required',
            'lokasi' => 'required',
            'rating' => 'required|numeric',
        ]);

        $category = Category::whereUuid($request->input('category_id'))->firstOrFail();

        $destination->update([
            'category_id' => $category->id,
            'nama' => $request->input('nama'),
            'deskripsi' => $request->input('deskripsi'),
            'link_youtube' => $request->input('link_youtube'),
            'lokasi' => $request->input('lokasi'),
            'rating' => $request->input('rating'),
        ]);
        return redirect('/destination')->with('success', 'Destinasi Berhasil diubah');
    }

    public function destroy($uuid)
    {
        $destination = Destination::whereUuid($uuid)->where('user_id', auth()->user()->id)->firstOrFail();

        $destination->delete();
        return back()->with('success', 'Destinasi Berhasil dihapus');
    }
}