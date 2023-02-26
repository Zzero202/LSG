<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    public function doctors()
    {
        return $this->belongsToMany(Doctor::class, 'patients_doctors')->withPivot('appointment');
    }
}
