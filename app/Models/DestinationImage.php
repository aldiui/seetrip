<?php

namespace App\Models;

use Ramsey\Uuid\Uuid;
use App\Models\Destination;
use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DestinationImage extends Model
{
    use HasFactory, Searchable;

    protected $guarded = [];

    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn($image) => url('/storage/images/destinations/' . $image),
        );
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

        return $array;
    }

}