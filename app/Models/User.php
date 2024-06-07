<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Destination;
use App\Models\Transaction;
use App\Models\Wallet;
use App\Models\Withdraw;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Scout\Searchable;
use Ramsey\Uuid\Uuid;

class User extends Authenticatable
{
    use HasFactory, Notifiable, Searchable;

    protected $guarded = [];
    protected $hidden = [
        'password',
        'remember_token',
        'id',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function wallets()
    {
        return $this->hasMany(Wallet::class);
    }

    public function destinations()
    {
        return $this->hasMany(Destination::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function withdraws()
    {
        return $this->hasMany(Withdraw::class);
    }

    protected function avatar(): Attribute
    {
        return Attribute::make(
            get: fn($avatar) => url('/storage/images/avatars/' . $avatar),
        );
    }

    public function toSearchableArray(): array
    {
        return [
            'nama' => $this->nama,
            'email' => $this->email,
            'role' => $this->role,
            'phone' => $this->phone,
            'saldo' => $this->saldo,
        ];
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
        $array['saldo_custom'] = formatRupiah($array['saldo']);

        return $array;
    }

}
