import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import * as Icon from 'react-bootstrap-icons';
class BukuIndex extends Component {
    constructor () {
        super()
        this.state = {
            buku: [],
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
        axios.get('/api/buku').then(response => {
            this.setState({
                buku: response.data
            })
        })  
    }
    confirmDelete(kode){
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Hapus"
                cancelBtnText="Batal"
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
        axios.delete(`/api/buku/hapus/${kode}`).then(response => {
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
                Deleted Buku successfully
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
        const { buku } = this.state
        return (
            <div className = 'container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Daftar Buku</div>
                            <div className='card-body'>
                                <Link className='btn btn-primary btn-sm mb-3'to='/tambah' >
                                    Tambah Buku
                                </Link>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th width="50" className="text-center">Kode</th>
                                                <th>Judul</th>
                                                <th>Jumlah Halaman</th>
                                                <th>Penulis</th>
                                                <th width="200" className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {buku.map((buku) => (
                                                <tr>
                                                    <td width="50" className="text-center">{buku.kode}</td>
                                                    <td>{buku.judul}</td>
                                                    <td>{buku.jumlah_hal}</td>
                                                    <td>{buku.pengarang}</td>
                                                    <td width="200" className="text-center">
                                                        <div className="btn-group">
                                                        <Link
                                                            className='btn btn-primary'
                                                            to={`/buku/${buku.kode}`}
                                                        ><Icon.Info/>
                                                        </Link>
                                                        <Link
                                                            className='btn btn-success'
                                                            to={`/buku/edit/${buku.kode}`}
                                                            ><Icon.Pencil/>
                                                        </Link>
                                                        <button
                                                            className='btn btn-danger'
                                                            onClick={() => this.confirmDelete(buku.kode)}
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
export default BukuIndex;