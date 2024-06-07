<?php

namespace App\Models;

use App\Models\Destination;
use App\Models\DestinationPrice;
use App\Models\User;
use App\Models\Voucher;
use App\Models\Wallet;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Ramsey\Uuid\Uuid;

class Transaction extends Model
{
    use HasFactory, Searchable;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function destinationPrice()
    {
        return $this->belongsTo(DestinationPrice::class);
    }

    public function voucher()
    {
        return $this->belongsTo(Voucher::class);
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
        "destination_price_id",
        "voucher_id",
        "user_id",
    ];

    public function toSearchableArray(): array
    {
        return [
            'nomor_pemesanan' => $this->nomor_pemesanan,
        ];
    }

    public function toArray()
    {
        $array = parent::toArray();

        $destination = $this->destination;
        $array['total_custom'] = formatRupiah($array['total_harga']);
        $array['tanggal'] = formatTanggal($array['created_at'], 'j F Y');

        return $array;
    }

    protected function buktiBayar(): Attribute
    {
        return Attribute::make(
            get: fn($buktiBayar) => url('/storage/images/bukti-bayar/' . $buktiBayar),
        );
    }

}
