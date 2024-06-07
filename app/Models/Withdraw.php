<?php

namespace App\Models;

use App\Models\User;
use App\Models\Wallet;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Ramsey\Uuid\Uuid;

class Withdraw extends Model
{
    use HasFactory, Searchable;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function wallet()
    {
        return $this->belongsTo(Wallet::class);
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
        "user_id",
        "wallet_id",
    ];

    public function toSearchableArray(): array
    {
        return [
            'nomor_pembayaran' => $this->nomor_pembayaran,
        ];
    }

    public function toArray()
    {
        $array = parent::toArray();

        $destination = $this->destination;
        $array['nominal_custom'] = formatRupiah($array['nominal']);
        $array['admin_custom'] = formatRupiah($array['biaya_admin']);
        $array['tanggal'] = formatTanggal($array['created_at'], 'j F Y');

        return $array;
    }
}