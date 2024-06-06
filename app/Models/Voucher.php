<?php

namespace App\Models;

use App\Models\Destination;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Ramsey\Uuid\Uuid;

class Voucher extends Model
{
    use HasFactory, Searchable;

    protected $guarded = [];

    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->uuid = Uuid::uuid4()->toString();
        });
    }

    public function toArray()
    {
        $array = parent::toArray();

        $destination = $this->destination;
        $array['destination_uuid'] = $destination->uuid;
        $array['diskon_custom'] = formatRupiah($array['diskon']);
        $array['tanggal_kadaluarsa_custom'] = formatTanggal($array['tanggal_kadaluarsa'], 'd F Y');

        return $array;
    }

}