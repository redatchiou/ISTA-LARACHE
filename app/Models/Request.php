<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Request extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'message',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
    ];
}
