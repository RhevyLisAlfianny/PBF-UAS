<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/buku', 'BukuController@index');
Route::post('/buku/store', 'BukuController@store');
Route::get('/buku/edit/{kode}', 'BukuController@getBuku'); //getByid
Route::get('/buku/{kode}', 'BukuController@getBuku');
Route::put('/buku/{kode}', 'BukuController@update');
Route::delete('/buku/hapus/{kode}', 'BukuController@delete');

Route::get('/anggota', 'AnggotaController@anggota');
Route::post('/anggota/store', 'AnggotaController@storeAnggota');
Route::get('/anggota/edit/{nomor}', 'AnggotaController@getAnggota'); //getByid
Route::get('/anggota/{nomor}', 'AnggotaController@getAnggota');
Route::put('/anggota/{nomor}', 'AnggotaController@updateAnggota');
Route::delete('/anggota/hapus/{nomor}', 'AnggotaController@delete');

Route::get('/peminjaman', 'PeminjamanController@peminjaman');
Route::post('/peminjaman/store', 'PeminjamanController@storePinjam');
Route::get('/peminjaman/edit/{kode}', 'PeminjamanController@getPinjam'); //getByid
Route::get('/peminjaman/{kode}', 'PeminjamanController@getPinjam');
Route::put('/peminjaman/{kode}', 'PeminjamanController@updatePinjam');
Route::delete('/peminjaman/hapus/{kode}', 'PeminjamanController@delete');