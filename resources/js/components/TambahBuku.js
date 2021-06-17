import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class TambahBuku extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            kode : '',
            judul: '',
            jumlah_hal: '',
            pengarang: '',
            penerbit: '',
            tahun_terbit: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewBuku = this.handleCreateNewBuku.bind(this)
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
                Created article successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/buku');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewBuku (event) {
        event.preventDefault()
        const buku = {
          kode: this.state.kode,
          judul: this.state.judul,
          jumlah_hal: this.state.jumlah_hal,
          pengarang: this.state.pengarang,
          penerbit: this.state.penerbit,
          tahun_terbit: this.state.tahun_terbit
        }
        axios.post('/api/buku/store', buku).then(response => { 
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
                  <div className='card-header'>Create new project</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewBuku}>
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
                        <label htmlFor='judul'>Judul</label>
                        <input
                          id='judul'
                          type='text'
                          className={`form-control ${this.hasErrorFor('judul') ? 'is-invalid' : ''}`}
                          name='judul'
                          value={this.state.judul}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('judul')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='jumlah_hal'>Jumlah Halaman</label>
                        <input
                          id='jumlah_hal'
                          type='number'
                          className={`form-control ${this.hasErrorFor('jumlah_hal') ? 'is-invalid' : ''}`}
                          name='jumlah_hal'
                          value={this.state.jumlah_hal}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('jumlah_hal')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='pengarang'>Pengarang</label>
                        <input
                          id='pengarang'
                          type='text'
                          className={`form-control ${this.hasErrorFor('pengarang') ? 'is-invalid' : ''}`}
                          name='pengarang'
                          value={this.state.pengarang}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('pengarang')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='penerbit'>Penerbit</label>
                        <input
                          id='penerbit'
                          type='text'
                          className={`form-control ${this.hasErrorFor('penerbit') ? 'is-invalid' : ''}`}
                          name='penerbit'
                          value={this.state.penerbit}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('penerbit')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='tahun_terbit'>Tahun Terbit</label>
                        <input
                          id='tahun_terbit'
                          type='number'
                          className={`form-control ${this.hasErrorFor('tahun_terbit') ? 'is-invalid' : ''}`}
                          name='tahun_terbit'
                          value={this.state.tahun_terbit}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('tahun_terbit')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/`}
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
export default TambahBuku