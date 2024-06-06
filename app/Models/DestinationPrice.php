<?php

namespace App\Models;

use App\Models\Destination;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Ramsey\Uuid\Uuid;

class DestinationPrice extends Model
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

    protected $hidden = [
        "id",
        "destination_id",
    ];

    public function toArray()
    {
        $array = parent::toArray();

        $destination = $this->destination;
        $array['destination_uuid'] = $destination->uuid;
        $array['harga_custom'] = formatRupiah($array['harga']);

        return $array;
    }
}