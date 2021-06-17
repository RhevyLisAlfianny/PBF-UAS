<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class BukuController extends Controller
{
    public function index()
    {
        $buku = \App\Buku::all();
 
        return $buku->toJson();
    }
    public function store(Request $request){
        $validatedData = $request->validate([
            'kode' => 'required|numeric',
            'judul' => 'required',
            'jumlah_hal' => 'required',
            'pengarang' => 'required',
            'penerbit' => 'required',
            'tahun_terbit' => 'required',
        ]);
        $project = \App\Buku::create([
            'kode' => $validatedData['kode'],
            'judul' => $validatedData['judul'],
            'jumlah_hal' => $validatedData['jumlah_hal'],
            'pengarang' => $validatedData['pengarang'],
            'penerbit' => $validatedData['penerbit'],
            'tahun_terbit' => $validatedData['tahun_terbit'],
        ]);
        $msg = [
            'success' => true,
            'message' => 'Buku Berhasil Ditambah!'
        ];
 
        return response()->json($msg);
    }
    public function getBuku($kode) // for edit and show
    {
        $buku  = \App\Buku::find($kode);
 
        return $buku->toJson();
    }
 
    public function update(Request $request, $kode)
    {
        $validatedData = $request->validate([
            'kode' => 'required|numeric',
            'judul' => 'required',
            'jumlah_hal' => 'required',
            'pengarang' => 'required',
            'penerbit' => 'required',
            'tahun_terbit' => 'required',
        ]);
   
        $buku = \App\Buku::find($kode);
        $buku->kode = $validatedData['kode'];
        $buku->judul = $validatedData['judul'];
        $buku->jumlah_hal = $validatedData['jumlah_hal'];
        $buku->pengarang = $validatedData['pengarang'];
        $buku->penerbit = $validatedData['penerbit'];
        $buku->tahun_terbit = $validatedData['tahun_terbit'];
        $buku->save();
   
        $msg = [
            'success' => true,
            'message' => 'Buku Berhasil Diupdate'
        ];
   
        return response()->json($msg);
    }
    public function delete($kode)
    {
        $buku = \App\Buku::find($kode);
        if(!empty($buku)){
            $buku->delete();
            $msg = [
                'success' => true,
                'message' => 'Buku Berhasil Dihapus!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Gagal Menghapus Buku!'
            ];
            return response()->json($msg);
        }
    }
}
