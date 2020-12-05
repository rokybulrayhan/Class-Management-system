<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    protected $fillable = [
        'student_name', 'semester_name', 'section','id_number','birth_date','email'
    ];
}
