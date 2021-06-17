<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Peminjaman extends Model
{
    protected $table = 'peminjaman';

    protected $primaryKey = 'kode';

    protected $fillable = [
        'kode',
    	'tgl_pinjam',
    	'tgl_kembali',
        'no_anggota',
        'kode_buku',
    	'created_at',
    	'updated_at'
    ];
    public function get_anggota() 
    {
        return $this->belongsTo(Anggota::class, 'no_anggota', 'nomor');
    }

    public function get_buku()
    {
        return $this->belongsTo(Buku::class, 'kode_buku', 'kode');
    }
}

