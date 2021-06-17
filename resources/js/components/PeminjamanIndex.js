import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import * as Icon from 'react-bootstrap-icons';
class PeminjamanIndex extends Component {
    constructor () {
        super()
        this.state = {
            pinjam: [],
            msg: null,
            type: null,
            flash:false,
            alert: null,
        }
    }
    hideAlert() {
        this.setState({
            alert: null
        });
    }
    componentDidMount () {
        axios.get('/api/peminjaman').then(response => {
            this.setState({
                pinjam: response.data
            })
        })  
    }
    confirmDelete(kode){
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Hapus"
                cancelBtnText="Nggak"
                confirmBtnBsStyle="default"
                cancelBtnBsStyle="danger"
                title="Tunggu ..."
                onConfirm={() => this.deleteItem(kode)}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
                >
                Kalau udah dihapus, nggak bakal balik lagi.
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
    deleteItem(kode) {
        axios.delete(`/api/peminjaman/hapus/${kode}`).then(response => {
            var msg = response.data.success;
            if(msg == true){
                this.hideAlert();
                this.goToHome();
            }
        })
    }
    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                Deleted Anggota successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
    onSuccess(){
        this.componentDidMount();
        this.hideAlert();
    }
    render (){
        const { pinjam } = this.state
        return (
            <div className = 'container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Daftar Data Peminjaman</div>
                            <div className='card-body'>
                                <Link className='btn btn-primary btn-sm mb-3' to='/tambahPeminjaman' >
                                    Tambah Data Peminjaman
                                </Link>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Kode</th>
                                                <th>Nama Anggota</th>
                                                <th>Tanggal Peminjaman</th>
                                                <th>Tanggal Kembali</th>
                                                <th>Judul Buku</th>
                                                <th width="200" className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pinjam.map((pinjam, i) => (
                                                <tr key={i}>
                                                    <td className="text-center">{pinjam.kode}</td>
                                                    <td>{pinjam.get_anggota.nama}</td>
                                                    <td>{pinjam.tgl_pinjam}</td>
                                                    <td>{pinjam.tgl_kembali}</td>
                                                    <td>{pinjam.get_buku.judul}</td>
                                                    <td width="200" className="text-center">
                                                        <div className="btn-group">
                                                        <Link
                                                            className='btn btn-success'
                                                            to={`/peminjaman/edit/${pinjam.kode}`}
                                                        ><Icon.Pencil/>
                                                        </Link>
                                                        <button
                                                            className='btn btn-danger'
                                                            onClick={() => this.confirmDelete(pinjam.kode)}
                                                            ><Icon.Trash/>
                                                        </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {this.state.alert} 
                                </div>
                                <Link
                                    className='btn btn-secondary'
                                    to={`/`}
                                    >Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PeminjamanIndex;