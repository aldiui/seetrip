<?php

namespace App\Models;

use App\Models\Category;
use App\Models\DestinationFacility;
use App\Models\DestinationImage;
use App\Models\DestinationPrice;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Voucher;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Ramsey\Uuid\Uuid;

class Destination extends Model
{
    use HasFactory, Searchable;

    protected $guarded = [];

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function destinationImages()
    {
        return $this->hasMany(DestinationImage::class);
    }

    public function destinationFacilities()
    {
        return $this->hasMany(DestinationFacility::class);
    }

    public function destinationPrices()
    {
        return $this->hasMany(DestinationPrice::class);
    }

    public function destinationVouchers()
    {
        return $this->hasMany(Voucher::class);
    }

    public function toSearchableArray(): array
    {
        return [
            'nama' => $this->nama,
            'deskripsi' => $this->deskripsi,
            'link_youtube' => $this->link_youtube,
            'lokasi' => $this->lokasi,
            'rating' => $this->rating,
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
        "user_id",
        "category_id",
    ];

    public function toArray()
    {
        $array = parent::toArray();

        $user = $this->user;
        $category = $this->category;
        $array['user_uuid'] = $user->uuid;
        $array['category_uuid'] = $category->uuid;

        return $array;
    }

}