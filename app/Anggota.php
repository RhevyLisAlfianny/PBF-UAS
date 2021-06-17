<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Anggota extends Model
{
    protected $table = 'anggota';

    protected $primaryKey = 'nomor';

    protected $fillable = [
        'nomor',
        'nama',
        'alamat',
        'tgl_lahir',
        'tempat_lahir',
        'nomor_telp',
    	'created_at',
    	'updated_at'
    ];

    /**
     * Get all of the peminjaman for the Anggota
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function peminjaman()
    {
        return $this->hasMany(Peminjaman::class);
    }
}
