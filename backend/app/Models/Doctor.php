<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'password',
    ];
    public function patients()
    {
        return $this->belongsToMany(Patient::class,'patients_doctors')->withPivot('appointment');
    }
}
