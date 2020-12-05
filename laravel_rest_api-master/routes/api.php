<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TeacherController;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');

    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
    Route::get('/home', 'HomeController@index')->name('home');
});
Route::post('add-student', [TeacherController::class, 'addStudent']);
Route::delete('delete-student/{id}',[TeacherController::class, 'deleteStudent']);
Route::put('edit-student/{id}', [TeacherController::class, 'editStudent']);
Route::get('all-student', [TeacherController::class, 'allStudent']);
Route::get('student-detail/{id}',[TeacherController::class, 'studentDetails']);
