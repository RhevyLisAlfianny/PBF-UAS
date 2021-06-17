<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnggotaController extends Controller
{
    public function anggota()
    {
        $anggota = \App\Anggota::all();
 
        return $anggota->toJson();
    }
    public function storeAnggota(Request $request){
        $validatedData = $request->validate([
            'nomor' => 'required|numeric',
            'nama' => 'required',
            'alamat' => 'required',
            'tgl_lahir' => 'required|date',
            'tempat_lahir' => 'required',
            'nomor_telp' => 'required|numeric'
        ]);
        $project = \App\Anggota::create([
            'nomor' => $validatedData['nomor'],
            'nama' => $validatedData['nama'],
            'alamat' => $validatedData['alamat'],
            'tgl_lahir' => $validatedData['tgl_lahir'],
            'tempat_lahir' => $validatedData['tempat_lahir'],
            'nomor_telp' => $validatedData['nomor_telp'],
        ]);
        $msg = [
            'success' => true,
            'message' => 'Anggota Berhasil Ditambah!'
        ];
 
        return response()->json($msg);
    }
    public function getAnggota($nomor) // for edit and show
    {
        $anggota  = \App\Anggota::find($nomor);
 
        return $anggota->toJson();
    }
 
    public function updateAnggota(Request $request, $nomor)
    {
        $validatedData = $request->validate([
            'nomor' => 'required|numeric',
            'nama' => 'required',
            'alamat' => 'required',
            'tgl_lahir' => 'required|date',
            'tempat_lahir' => 'required',
            'nomor_telp' => 'required|numeric'
        ]);
   
        $anggota = \App\Anggota::find($nomor);
        $anggota->nomor = $validatedData['nomor'];
        $anggota->nama = $validatedData['nama'];
        $anggota->alamat = $validatedData['alamat'];
        $anggota->tgl_lahir = $validatedData['tgl_lahir'];
        $anggota->tempat_lahir = $validatedData['tempat_lahir'];
        $anggota->nomor_telp = $validatedData['nomor_telp'];
        $anggota->save();
   
        $msg = [
            'success' => true,
            'message' => 'Anggota Berhasil Diupdate'
        ];
   
        return response()->json($msg);
    }
    public function delete($nomor)
    {
        $anggota = \App\Anggota::find($nomor);
        if(!empty($anggota)){
            $anggota->delete();
            $msg = [
                'succesgotas' => true,
                'message' => 'Ang Berhasil Dihapus!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Gagal Menghapus Anggota!'
            ];
            return response()->json($msg);
        }
    }
}
