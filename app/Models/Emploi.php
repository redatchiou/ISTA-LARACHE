<?php

namespace App\Models;

use App\Models\Group;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Emploi extends Model
{
    use HasFactory;
    public function group()
    {
        return $this->belongsTo(Group::class);
    }
    protected $fillable = ['group', 'day_of_week', 'quarter', 'subject', 'trainer', 'salle'];
}
