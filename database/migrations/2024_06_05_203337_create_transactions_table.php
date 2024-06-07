<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreignId('destination_price_id')->references('id')->on('destination_prices')->onDelete('cascade');
            $table->foreignId('voucher_id')->nullable()->references('id')->on('vouchers')->onDelete('set null');
            $table->foreignId('wallet_id')->nullable()->references('id')->on('wallets')->onDelete('set null');
            $table->string('nomor_pemesanan');
            $table->unsignedBigInteger('quantitas');
            $table->unsignedBigInteger('diskon');
            $table->unsignedBigInteger('total_harga');
            $table->string('bukti_bayar');
            $table->enum('status', ['0', '1', '2'])->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
