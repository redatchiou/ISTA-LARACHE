<?php

namespace App\Models;

use App\Models\Module;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Filiere extends Model
{
    use HasFactory;
    public function modules()
    {
        return $this->hasMany(Module::class);
    }
    protected $fillable = ['name', 'nf', 'description'];
}
