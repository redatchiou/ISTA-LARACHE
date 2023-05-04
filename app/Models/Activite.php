<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Activite extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'body'];
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
    ];

    
    // protected function body(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn (string $value) => html_entity_decode($value),
    //     );
    // }

    // protected $dateFormat = '';
    protected $escapeWhenCastingToString = true;
}
