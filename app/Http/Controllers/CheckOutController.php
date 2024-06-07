<?php

namespace App\Http\Controllers;

class CheckOutController extends Controller
{
    public function index()
    {
        return Inertia::render('CheckOut');
    }

    public function store(Request $request)
    {
        
    }
}