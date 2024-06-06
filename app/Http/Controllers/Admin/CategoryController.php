<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
            'avatar' => 'required|image|max:2048|mimes:png,jpg,jpeg',
        ]);

        if ($request->hasFile('avatar')) {
            $request->file('avatar')->store('images/categories', 'public');
        }

        Category::create([
            'nama' => $request->input('nama'),
            'avatar' => $request->file('avatar')->hashName(),
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
            'avatar' => 'nullable|image|max:2048|mimes:png,jpg,jpeg',
        ]);

        if ($request->hasFile('avatar')) {
            Storage::disk('public')->delete('images/categories/' . basename($category->avatar));
            $request->file('avatar')->store('images/categories', 'public');
            $category->update(['avatar' => $request->file('avatar')->hashName()]);
        }

        $category->update($request->only('nama'));
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
