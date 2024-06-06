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
        Schema::create('vouchers', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->foreignId('destination_id')->nullable()->references('id')->on('destinations')->onDelete('set null');
            $table->string('kode');
            $table->string('deskripsi');
            $table->unsignedBigInteger('diskon');
            $table->unsignedBigInteger('kuota');
            $table->date('tanggal_kadaluarsa');
            $table->enum('status', ['0', '1'])->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vouchers');
    }
};
