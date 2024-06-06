<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use App\Models\DestinationPrice;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DestinationPriceController extends Controller
{
    public function create()
    {
        return Inertia::render('User/Destination/Price/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'destination_id' => 'required|exists:destinations,uuid',
            'nama' => 'required',
            'deskripsi' => 'required',
            'harga' => 'required|numeric',
        ]);

        $destination = Destination::whereUuid($request->input('destination_id'))->firstOrFail();

        DestinationPrice::create([
            'destination_id' => $destination->id,
            'nama' => $request->input('nama'),
            'deskripsi' => $request->input('deskripsi'),
            'harga' => $request->input('harga'),
        ]);

        return redirect('/destination/' . $destination->uuid)->with('success', 'Destinasi Harga Berhasil ditambahkan');
    }

    public function edit($uuid)
    {
        $destinationPrice = DestinationPrice::whereUuid($uuid)->firstOrFail();
        return Inertia::render('User/Destination/Price/Edit', compact('destinationPrice'));
    }

    public function update(Request $request, $uuid)
    {
        $destinationPrice = DestinationPrice::with('destination')->whereUuid($uuid)->firstOrFail();

        $request->validate([
            'nama' => 'required',
            'deskripsi' => 'required',
            'harga' => 'required|numeric',
        ]);

        $destinationPrice->update($request->only('nama', 'deskripsi', 'harga'));
        return redirect('/destination/' . $destinationPrice->destination->uuid)->with('success', 'Destinasi Harga Berhasil diubah');
    }

    public function destroy($uuid)
    {
        $destinationPrice = DestinationPrice::whereUuid($uuid)->firstOrFail();
        $destinationPrice->delete();
        return back()->with('success', 'Destinasi Harga Berhasil dihapus');
    }
}