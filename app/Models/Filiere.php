<?php

namespace App\Models;

use App\Models\Group;
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
    public function groups()
    {
        return $this->hasMany(Group::class);
    }
    protected $fillable = ['name', 'code', 'nf', 'description'];
}
