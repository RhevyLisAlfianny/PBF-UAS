<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PeminjamanController extends Controller
{
    public function peminjaman()
    {
        $pinjam = \App\Peminjaman::with('get_anggota', 'get_buku')->get();
 
        return $pinjam->toJson();
    }
    public function storePinjam(Request $request){
        $validatedData = $request->validate([
            'kode' => 'required|numeric',
            'no_anggota' => 'required|numeric',
            'tgl_pinjam' => 'required|date',
            'tgl_kembali' => 'required|date'
            
        ]);
        $project = \App\Peminjaman::create([
            'kode' => $validatedData['kode'],
            'no_anggota' => $validatedData['no_anggota'],
            'alamat' => $validatedData['alamat'],
            'tgl_pinjam' => $validatedData['tgl_pinjam'],
            'tgl_kembali' => $validatedData['tgl_kembali'],
        ]);
        $msg = [
            'success' => true,
            'message' => 'Peminjaman Berhasil Ditambah!'
        ];
 
        return response()->json($msg);
    }
    public function getPinjam($kode) // for edit and show
    {
        $pinjam  = \App\Peminjaman::find($kode);
 
        return $pinjam->toJson();
    }
 
    public function updatePinjam(Request $request, $nomor)
    {
        $validatedData = $request->validate([
            'kode' => 'required|numeric',
            'no_anggota' => 'required|numeric',
            'tgl_pinjam' => 'required|date',
            'tgl_kembali' => 'required|date',
            'kode_buku' => 'required|numeric'
        ]);
   
        $pinjam = \App\Peminjaman::find($nomor);
        $pinjam->kode = $validatedData['kode'];
        $pinjam->no_anggota = $validatedData['no_anggota'];
        $pinjam->tgl_pinjam = $validatedData['tgl_pinjam'];
        $pinjam->tgl_kembali = $validatedData['tgl_kembali'];
        $pinjam->kode_buku = $validatedData['kode_buku'];
        $pinjam->save();
   
        $msg = [
            'success' => true,
            'message' => 'Data Peminjaman Berhasil Diupdate'
        ];
   
        return response()->json($msg);
    }
    public function delete($kode)
    {
        $pinjam = \App\Peminjaman::find($kode);
        if(!empty($pinjam)){
            $pinjam->delete();
            $msg = [
                'succesgotas' => true,
                'message' => 'Data Peminjaman Berhasil Dihapus!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Gagal Menghapus Data Peminjaman!'
            ];
            return response()->json($msg);
        }
    }
}
