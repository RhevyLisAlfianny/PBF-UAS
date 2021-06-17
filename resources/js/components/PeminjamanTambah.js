import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class PeminjamanTambah extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            kode : '',
            no_anggota: '',
            tgl_pinjam: '',
            tgl_kembali: '',
            kode_buku: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewPinjam = this.handleCreateNewPinjam.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }
 
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
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
                Created Peminjaman successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/peminjaman');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewPinjam (event) {
        event.preventDefault()
        const pinjam = {
          kode: this.state.kode,
          no_anggota: this.no_anggota,
          tgl_pinjam: this.state.tgl_pinjam,
          tgl_kembali: this.state.tgl_kembali,
          kode_buku: this.state.kode_buku
        }
        axios.post('/api/peminjaman/storePinjam', pinjam).then(response => { 
            var msg = response.data.success;
            if(msg == true){
                return this.goToHome();
            }
        })
    }
 
    hasErrorFor (field) {
        return !!this.state.errors[field]
    }
 
    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
 
    render () {
        return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Create new Data Peminjaman</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewAnggota}>
                      <div className='form-group'>
                        <label htmlFor='kode'>Kode</label>
                        <input
                          id='kode'
                          type='number'
                          className={`form-control ${this.hasErrorFor('kode') ? 'is-invalid' : ''}`}
                          name='kode'
                          value={this.state.kode}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('kode')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='no_anggota'>Nomor Anggota</label>
                        <input
                          id='no_anggota'
                          type='number'
                          className={`form-control ${this.hasErrorFor('no_anggota') ? 'is-invalid' : ''}`}
                          name='Kode'
                          value={this.state.no_anggota}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('no_anggota')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='tgl_pinjam'>Tanggal pinjam</label>
                        <input
                          id='tgl_pinjam'
                          type='date'
                          className={`form-control ${this.hasErrorFor('tgl_pinjam') ? 'is-invalid' : ''}`}
                          name='tgl_pinjam'
                          value={this.state.tgl_pinjam}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('tgl_pinjam')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='tgl_kembali'>Tanggal Kembali</label>
                        <input
                          id='tgl_kembali'
                          type='date'
                          className={`form-control ${this.hasErrorFor('tgl_kembali') ? 'is-invalid' : ''}`}
                          name='tgl_kembali'
                          value={this.state.tgl_kembali}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('tgl_kembali')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='kode_buku'>kode buku</label>
                        <input
                          id='kode_buku'
                          type='number'
                          className={`form-control ${this.hasErrorFor('kode_buku') ? 'is-invalid' : ''}`}
                          name='kode_buku'
                          value={this.state.kode_buku}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('kode_buku')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/peminjaman`}
                        >Back
                      </Link>
                      <button className='btn btn-primary'>Create</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default PeminjamanTambah