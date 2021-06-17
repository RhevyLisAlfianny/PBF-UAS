import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class AnggotaTambah extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            nomor : '',
            nama: '',
            alamat: '',
            tgl_lahir: '',
            tempat_lahir: '',
            nomor_telp: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewAnggota = this.handleCreateNewAnggota.bind(this)
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
                Created Anggota successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/anggota');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewAnggota (event) {
        event.preventDefault()
        const anggota = {
          nomor: this.state.nomor,
          nama: this.state.nama,
          alamat: this.state.alamat,
          tgl_lahir: this.state.tgl_lahir,
          tempat_lahir: this.state.tempat_lahir,
          nomor_telp: this.state.nomor_telp
        }
        axios.post('/api/anggota/store', anggota).then(response => { 
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
                  <div className='card-header'>Create new Anggota</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewAnggota}>
                      <div className='form-group'>
                        <label htmlFor='nomor'>Nomor</label>
                        <input
                          id='nomor'
                          type='number'
                          className={`form-control ${this.hasErrorFor('nomor') ? 'is-invalid' : ''}`}
                          name='nomor'
                          value={this.state.nomor}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nomor')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='nama'>Nama</label>
                        <input
                          id='nama'
                          type='text'
                          className={`form-control ${this.hasErrorFor('nama') ? 'is-invalid' : ''}`}
                          name='nama'
                          value={this.state.nama}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nama')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='alamat'>Alamat</label>
                        <input
                          id='alamat'
                          type='text'
                          className={`form-control ${this.hasErrorFor('alamat') ? 'is-invalid' : ''}`}
                          name='alamat'
                          value={this.state.alamat}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('alamat')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='tgl_lahir'>Tanggal Lahir</label>
                        <input
                          id='tgl_lahir'
                          type='date'
                          className={`form-control ${this.hasErrorFor('tgl_lahir') ? 'is-invalid' : ''}`}
                          name='tgl_lahir'
                          value={this.state.tgl_lahir}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('tgl_lahir')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='tempat_lahir'>Tempat Lahir</label>
                        <input
                          id='tempat_lahir'
                          type='text'
                          className={`form-control ${this.hasErrorFor('tempat_lahir') ? 'is-invalid' : ''}`}
                          name='tempat_lahir'
                          value={this.state.tempat_lahir}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('tempat_lahir')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='nomor_telp'>Nomor telepon</label>
                        <input
                          id='nomor_telp'
                          type='number'
                          className={`form-control ${this.hasErrorFor('nomor_telp') ? 'is-invalid' : ''}`}
                          name='nomor_telp'
                          value={this.state.nomor_telp}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nomor_telp')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/anggota`}
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
export default AnggotaTambah