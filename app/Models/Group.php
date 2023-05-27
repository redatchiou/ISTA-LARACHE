<?php

namespace App\Models;

use App\Models\Filiere;
use App\Models\Emploi;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Group extends Model
{
    use HasFactory;
    public function filiere()
    {
        return $this->belongsTo(Filiere::class);
    }
    public function emplois()
    {
        return $this->hasMany(Emploi::class);
    }

    protected $fillable = ['code', 'filiere_id'];
}
