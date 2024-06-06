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
            ['nama' => 'Desa Wisata'],
            ['nama' => 'Akomodasi'],
            ['nama' => 'Trekking & Hiking'],
            ['nama' => 'Bodyrafting'],
            ['nama' => 'Camping Ground'],
            ['nama' => 'Outbond'],
        ];

        foreach ($dataKategori as $kategori) {
            Category::create($kategori);
        }
    }
}
