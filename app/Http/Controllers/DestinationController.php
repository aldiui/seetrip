<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Destination;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
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
            'link_video_youtube' => 'nullable',
            'link_youtube' => 'nullable',
            'link_facebook' => 'nullable',
            'link_instagram' => 'nullable',
            'link_tiktok' => 'nullable',
            'lokasi' => 'required',
            'rating' => 'required|numeric',
        ]);

        $category = Category::whereUuid($request->input('category_id'))->firstOrFail();

        $slug = Str::slug($request->input('nama'), '-');

        $originalSlug = $slug;
        $counter = 1;

        while (Destination::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }

        Destination::create([
            'user_id' => auth()->user()->id,
            'slug' => $slug,
            'category_id' => $category->id,
            'nama' => $request->input('nama'),
            'deskripsi' => $request->input('deskripsi'),
            'link_video_youtube' => $request->input('link_video_youtube'),
            'link_youtube' => $request->input('link_youtube'),
            'link_facebook' => $request->input('link_facebook'),
            'link_instagram' => $request->input('link_instagram'),
            'link_tiktok' => $request->input('link_tiktok'),
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
            'link_video_youtube' => 'nullable',
            'link_youtube' => 'nullable',
            'link_facebook' => 'nullable',
            'link_instagram' => 'nullable',
            'link_tiktok' => 'nullable',
            'lokasi' => 'required',
            'rating' => 'required|numeric',
        ]);

        $category = Category::whereUuid($request->input('category_id'))->firstOrFail();

        $slug = Str::slug($request->input('nama'), '-');

        if ($slug !== $destination->slug) {
            $originalSlug = $slug;
            $counter = 1;
            while (Destination::where('slug', $slug)->exists()) {
                $slug = $originalSlug . '-' . $counter;
                $counter++;
            }
        }

        $destination->update([
            'category_id' => $category->id,
            'slug' => $slug,
            'nama' => $request->input('nama'),
            'deskripsi' => $request->input('deskripsi'),
            'link_video_youtube' => $request->input('link_video_youtube'),
            'link_youtube' => $request->input('link_youtube'),
            'link_facebook' => $request->input('link_facebook'),
            'link_instagram' => $request->input('link_instagram'),
            'link_tiktok' => $request->input('link_tiktok'),
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
