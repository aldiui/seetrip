<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'nama' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('11221122'),
            'role' => 'admin',
        ]);

        $dataKategori = [
            ['nama' => 'Desa Wisata', 'slug' => 'desa-wisata', 'avatar' => 'gambar1.png'],
            ['nama' => 'Akomodasi', 'slug' => 'akomodasi', 'avatar' => 'gambar2.png'],
            ['nama' => 'Trekking & Hiking', 'slug' => 'trekking-hiking', 'avatar' => 'gambar3.png'],
            ['nama' => 'Bodyrafting', 'slug' => 'bodyrafting', 'avatar' => 'gambar4.png'],
            ['nama' => 'Camping Ground', 'slug' => 'camping-ground', 'avatar' => 'gambar5.png'],
            ['nama' => 'Outbond', 'slug' => 'outbond', 'avatar' => 'gambar6.png'],
        ];

        foreach ($dataKategori as $kategori) {
            Category::create($kategori);
        }
    }
}
