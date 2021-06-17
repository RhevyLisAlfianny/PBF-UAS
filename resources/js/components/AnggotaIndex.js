import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import * as Icon from 'react-bootstrap-icons';
 
class AnggotaIndex extends Component {
    constructor () {
        super()
        this.state = {
            anggota: [],
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
        axios.get('/api/anggota').then(response => {
            this.setState({
                anggota: response.data
            })
        })  
    }
    confirmDelete(nomor){
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Hapus Deh"
                cancelBtnText="Nggak Jadi"
                confirmBtnBsStyle="default"
                cancelBtnBsStyle="danger"
                title="Tunggu ..."
                onConfirm={() => this.deleteItem(nomor)}
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
    deleteItem(nomor) {
        axios.delete(`/api/anggota/hapus/${nomor}`).then(response => {
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
        const { anggota } = this.state
        return (
            <div className = 'container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Daftar Anggota Perpustakaan</div>
                            <div className='card-body'>
                                <Link className='btn btn-primary btn-sm mb-3' to='/tambahAnggota' >
                                    Tambah Anggota
                                </Link>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Nomor</th>
                                                <th>Nama</th>
                                                <th>Alamat</th>
                                                <th>Nomor Telepon</th>
                                                <th width="200" className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {anggota.map((anggota, i) => (
                                                <tr key={i}>
                                                    <td className="text-center">{anggota.nomor}</td>
                                                    <td>{anggota.nama}</td>
                                                    <td>{anggota.alamat}</td>
                                                    <td>{anggota.nomor_telp}</td>
                                                    <td width="200" className="text-center">
                                                        <div className="btn-group">
                                                        <Link
                                                            className='btn btn-primary'
                                                            to={`/anggota/${anggota.nomor}`}
                                                        ><Icon.Info/>
                                                        </Link>
                                                        <Link
                                                            className='btn btn-success'
                                                            to={`/anggota/edit/${anggota.nomor}`}
                                                            ><Icon.Pencil/>
                                                        </Link>
                                                        <button
                                                            className='btn btn-danger'
                                                            onClick={() => this.confirmDelete(anggota.nomor)}
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
export default AnggotaIndex;