<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Example');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('/logout', [App\Http\Controllers\AuthController::class, 'logout']);

    Route::middleware(['checkRole:user'])->group(function () {
        Route::match(['get', 'post'], '/profile', [App\Http\Controllers\ProfileController::class, 'index']);
        Route::put('/profile/password', [App\Http\Controllers\ProfileController::class, 'updatePassword']);
        Route::resource('/wallet', App\Http\Controllers\WalletController::class);
        Route::resource('/destination', App\Http\Controllers\DestinationController::class);
        Route::resource('/destination-image', App\Http\Controllers\DestinationImageController::class);
        Route::resource('/destination-facility', App\Http\Controllers\DestinationFacilityController::class);
        Route::resource('/destination-price', App\Http\Controllers\DestinationPriceController::class);
        Route::resource('/destination-voucher', App\Http\Controllers\DestinationVoucherController::class);
    });

    Route::prefix('admin')->middleware(['checkRole:admin'])->group(function () {
        Route::match(['get', 'post'], '/profile', [App\Http\Controllers\Admin\ProfileController::class, 'index']);
        Route::put('/profile/password', [App\Http\Controllers\Admin\ProfileController::class, 'updatePassword']);

        Route::resource('/category', App\Http\Controllers\Admin\CategoryController::class);
        Route::resource('/user', App\Http\Controllers\Admin\UserController::class);
        Route::resource('/wallet', App\Http\Controllers\Admin\WalletController::class);
        Route::resource('/destination', App\Http\Controllers\Admin\DestinationController::class);
        Route::resource('/destination-image', App\Http\Controllers\Admin\DestinationImageController::class);
        Route::resource('/destination-facility', App\Http\Controllers\Admin\DestinationFacilityController::class);
        Route::resource('/destination-price', App\Http\Controllers\Admin\DestinationPriceController::class);
        Route::resource('/destination-voucher', App\Http\Controllers\Admin\DestinationVoucherController::class);
    });
});

Route::middleware(['guest'])->group(function () {
    Route::match(['get', 'post'], '/login', [App\Http\Controllers\AuthController::class, 'login'])->name('login');
    Route::match(['get', 'post'], '/register', [App\Http\Controllers\AuthController::class, 'register']);
});
