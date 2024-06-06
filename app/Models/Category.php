<?php

namespace App\Models;

use App\Models\Destination;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Ramsey\Uuid\Uuid;

class Category extends Model
{
    use HasFactory, Searchable;

    protected $guarded = [];

    public function destinations()
    {
        return $this->hasMany(Destination::class);
    }

    protected function avatar(): Attribute
    {
        return Attribute::make(
            get: fn($avatar) => url('/storage/images/categories/' . $avatar),
        );
    }

    public function toSearchableArray(): array
    {
        return [
            'nama' => $this->nama,
        ];
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
