<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;
    protected $fillable = [
        
        'message',
        'user_id',
    ];
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
