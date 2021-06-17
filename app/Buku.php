<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Buku extends Model
{
    protected $table = 'buku';

    protected $primaryKey = 'kode';

    protected $fillable = [
        'kode',
        'judul',
        'jumlah_hal',
        'pengarang',
        'penerbit',
        'tahun_terbit',
    	'created_at',
    	'updated_at'
    ];

    public function peminjaman()
    {
        return $this->hasMany(Peminjaman::class);
    }
}
