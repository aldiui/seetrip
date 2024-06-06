<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use App\Models\DestinationFacility;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DestinationFacilityController extends Controller
{
    public function create()
    {
        return Inertia::render('Admin/Destination/Facility/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'destination_id' => 'required|exists:destinations,uuid',
            'nama' => 'required',
            'tipe' => 'required|in:Akomodasi,Transportasi,Fasilitas',
        ]);

        $destination = Destination::whereUuid($request->input('destination_id'))->firstOrFail();

        DestinationFacility::create([
            'destination_id' => $destination->id,
            'nama' => $request->input('nama'),
            'tipe' => $request->input('tipe'),
        ]);

        return redirect('/admin/destination/' . $destination->uuid)->with('success', 'Destinasi Fasilitas Berhasil ditambahkan');
    }

    public function edit($uuid)
    {
        $destinationFacility = DestinationFacility::whereUuid($uuid)->firstOrFail();
        return Inertia::render('Admin/Destination/Facility/Edit', compact('destinationFacility'));
    }

    public function update(Request $request, $uuid)
    {
        $destinationFacility = DestinationFacility::with('destination')->whereUuid($uuid)->firstOrFail();

        $request->validate([
            'nama' => 'required',
            'tipe' => 'required|in:Akomodasi,Transportasi,Fasilitas',
        ]);

        $destinationFacility->update($request->only('nama', 'tipe'));
        return redirect('/admin/destination/' . $destinationFacility->destination->uuid)->with('success', 'Destinasi Fasilitas Berhasil diubah');
    }

    public function destroy($uuid)
    {
        $destinationFacility = DestinationFacility::whereUuid($uuid)->firstOrFail();
        $destinationFacility->delete();
        return back()->with('success', 'Destinasi Fasilitas Berhasil dihapus');
    }
}