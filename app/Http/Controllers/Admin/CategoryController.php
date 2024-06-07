<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::search($request->search)
            ->paginate($request->perpage ?? 25)
            ->appends('query', null)
            ->withQueryString();
        return Inertia::render('Admin/Category/Index', compact('categories'));
    }

    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'avatar' => 'required|image|max:10240|mimes:png,jpg,jpeg',
        ]);

        if ($request->hasFile('avatar')) {
            $avatarName = $request->file('avatar')->hashName();
            $request->file('avatar')->storeAs('public/images/categories', $avatarName);
        }

        $slug = Str::slug($request->input('nama'), '-');

        $originalSlug = $slug;
        $counter = 1;
        while (Category::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }

        Category::create([
            'nama' => $request->input('nama'),
            'slug' => $slug,
            'avatar' => $avatarName,
        ]);

        return redirect('/admin/category')->with('success', 'Kategori Berhasil ditambahkan');
    }

    public function edit($uuid)
    {
        $category = Category::whereUuid($uuid)->firstOrFail();
        return Inertia::render('Admin/Category/Edit', compact('category'));
    }

    public function update(Request $request, $uuid)
    {
        $category = Category::whereUuid($uuid)->firstOrFail();

        $request->validate([
            'nama' => 'required',
            'avatar' => 'nullable|image|max:10240|mimes:png,jpg,jpeg',
        ]);

        if ($request->hasFile('avatar')) {
            Storage::disk('public')->delete('images/categories/' . basename($category->avatar));
            $request->file('avatar')->store('images/categories', 'public');
            $category->update(['avatar' => $request->file('avatar')->hashName()]);
        }

        $slug = Str::slug($request->input('nama'), '-');

        if ($slug !== $category->slug) {
            $originalSlug = $slug;
            $counter = 1;
            while (Category::where('slug', $slug)->exists()) {
                $slug = $originalSlug . '-' . $counter;
                $counter++;
            }
        }

        $category->update([
            'nama' => $request->input('nama'),
            'slug' => $slug,
        ]);
        return redirect('/admin/category')->with('success', 'Kategori Berhasil diubah');
    }

    public function destroy($uuid)
    {
        $category = Category::whereUuid($uuid)->firstOrFail();
        Storage::disk('public')->delete('images/categories/' . basename($category->avatar));
        $category->delete();
        return back()->with('success', 'Kategori Berhasil dihapus');
    }
}
