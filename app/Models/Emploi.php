<?php

namespace App\Models;

use App\Models\Filiere;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Emploi extends Model
{
    use HasFactory;
    public function filiere()
    {
        return $this->belongsTo(Filiere::class);
    }
    protected $fillable = ['group', 'day_of_week', 'quarter', 'subject', 'trainer', 'salle'];
}
