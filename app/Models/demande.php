<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class demande extends Model
{
    use HasFactory;
    protected $table = 'demandes';
    protected $fillable = [
        'name',
        'groupe',
        'message',
    ];
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
    ];
}
