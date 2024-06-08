<?php

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/wisata', [App\Http\Controllers\WisataController::class, 'index']);
Route::get('/wisata/{uuid}', [App\Http\Controllers\WisataController::class, 'show']);

Route::middleware(['auth'])->group(function () {
    Route::get('/logout', [App\Http\Controllers\AuthController::class, 'logout']);
    Route::middleware(['checkRole:customer'])->group(function () {
        Route::resource('/order', App\Http\Controllers\OrderController::class);
        Route::match(['get', 'post'], '/profile', [App\Http\Controllers\ProfileController::class, 'index']);
        Route::put('/profile/password', [App\Http\Controllers\ProfileController::class, 'updatePassword']);
    });

    Route::prefix('user')->middleware(['checkRole:user'])->group(function () {
        Route::get('/', [App\Http\Controllers\User\DashboardController::class, 'index']);
        Route::match(['get', 'post'], '/profile', [App\Http\Controllers\User\ProfileController::class, 'index']);
        Route::put('/profile/password', [App\Http\Controllers\User\ProfileController::class, 'updatePassword']);
        Route::resource('/wallet', App\Http\Controllers\User\WalletController::class);
        Route::resource('/destination', App\Http\Controllers\User\DestinationController::class);
        Route::resource('/destination-image', App\Http\Controllers\User\DestinationImageController::class);
        Route::resource('/destination-facility', App\Http\Controllers\User\DestinationFacilityController::class);
        Route::resource('/destination-price', App\Http\Controllers\User\DestinationPriceController::class);
        Route::resource('/destination-voucher', App\Http\Controllers\User\DestinationVoucherController::class);
        Route::resource('/transaction', App\Http\Controllers\User\TransactionController::class);
        Route::resource('/withdraw', App\Http\Controllers\User\WithdrawController::class);

    });

    Route::prefix('admin')->middleware(['checkRole:admin'])->group(function () {
        Route::get('/', [App\Http\Controllers\Admin\DashboardController::class, 'index']);

        Route::match(['get', 'post'], '/profile', [App\Http\Controllers\Admin\ProfileController::class, 'index']);
        Route::put('/profile/password', [App\Http\Controllers\Admin\ProfileController::class, 'updatePassword']);

        Route::get('/transaction/export-pdf', [App\Http\Controllers\Admin\TransactionController::class, 'exportPdf']);
        Route::get('/withdraw/export-pdf', [App\Http\Controllers\Admin\WithdrawController::class, 'exportPdf']);
        Route::resource('/category', App\Http\Controllers\Admin\CategoryController::class);
        Route::resource('/user', App\Http\Controllers\Admin\UserController::class);
        Route::resource('/transaction', App\Http\Controllers\Admin\TransactionController::class);
        Route::resource('/withdraw', App\Http\Controllers\Admin\WithdrawController::class);
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

Route::get('/storage-link', function () {
    Artisan::call('storage:link');
});
