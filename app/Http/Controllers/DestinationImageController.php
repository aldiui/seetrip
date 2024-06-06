<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use App\Models\DestinationImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DestinationImageController extends Controller
{
    public function create()
    {
        return Inertia::render('User/Destination/Image/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'destination_id' => 'required|exists:destinations,uuid',
            'image' => 'required|image|max:2048|mimes:png,jpg,jpeg',
        ]);

        if ($request->hasFile('image')) {
            $request->file('image')->store('images/destinations', 'public');
        }
        $destination = Destination::whereUuid($request->input('destination_id'))->firstOrFail();

        DestinationImage::create([
            'destination_id' => $destination->id,
            'image' => $request->file('image')->hashName(),
        ]);

        return redirect('/destination/' . $destination->uuid)->with('success', 'Destinasi Gambar Berhasil ditambahkan');
    }

    public function edit($uuid)
    {
        $destinationImage = DestinationImage::whereUuid($uuid)->firstOrFail();
        return Inertia::render('User/Destination/Image/Edit', compact('destination'));
    }

    public function update(Request $request, $uuid)
    {
        $destinationImage = DestinationImage::with('destination')->whereUuid($uuid)->firstOrFail();

        $request->validate([
            'image' => 'required|image|max:2048|mimes:png,jpg,jpeg',
        ]);

        if ($request->hasFile('image')) {
            Storage::disk('public')->delete('images/destinations/' . basename($destinationImage->image));
            $request->file('image')->store('images/destinations', 'public');
        }

        $destinationImage->update([
            'image' => $request->file('image')->hashName(),
        ]);
        return redirect('/destination/' . $destinationImage->destination->uuid)->with('success', 'Destinasi Gambar Berhasil diubah');
    }

    public function destroy($uuid)
    {
        $destinationImage = DestinationImage::whereUuid($uuid)->firstOrFail();
        Storage::disk('public')->delete('images/destinations/' . basename($destinationImage->image));

        $destinationImage->delete();
        return back()->with('success', 'Destinasi Gambar Berhasil dihapus');
    }
}
