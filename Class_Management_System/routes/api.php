<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DataController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [UserController::class, 'register']);
    Route::post('login',  [UserController::class, 'authenticate']);
    Route::get('open', [DataController::class, 'open']);

    Route::group(['middleware' => ['jwt.verify']], function() {
        Route::get('user', 'UserController@getAuthenticatedUser');
        Route::get('closed', 'DataController@closed');
    });

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('add-student', [TeacherController::class, 'addStudent']);
Route::delete('delete-student/{id}',[TeacherController::class, 'deleteStudent']);
Route::put('edit-student/{id}', [TeacherController::class, 'editStudent']);
Route::get('all-student', [TeacherController::class, 'allStudent']);
Route::get('student-detail/{id}',[TeacherController::class, 'studentDetails']);


