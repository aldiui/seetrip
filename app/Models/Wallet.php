<?php

namespace App\Models;

use App\Models\User;
use App\Models\Withdraw;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Ramsey\Uuid\Uuid;

class Wallet extends Model
{
    use HasFactory, Searchable;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function toSearchableArray(): array
    {
        return [
            'nama_akun' => $this->nama_akun,
            'nama_bank' => $this->nama_bank,
            'nomor_rekening' => $this->nomor_rekening,
        ];
    }

    public function withdraws()
    {
        return $this->hasMany(Withdraw::class);
    }

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = Uuid::uuid4()->toString();
        });
    }

    protected $hidden = [
        "id",
    ];

}
