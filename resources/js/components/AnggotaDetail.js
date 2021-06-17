import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AnggotaDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
          anggota: {}
        }
    }
    componentDidMount () {
 
        const noAnggota = this.props.match.params.nomor
 
        axios.get(`/api/anggota/${noAnggota}`).then(response => {
          this.setState({
            anggota: response.data
          })
        })
      }
 
      render () {
        const { anggota } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>Detail Anggota</div>
                  <div className='card-body'>
                    <p>Nama : {anggota.nama}</p>
                    <p>Alamat : {anggota.alamat}</p>
                    <p>Tanggal Lahir : {anggota.tgl_lahir}</p>
                    <p>Tempat Lahir : {anggota.tempat_lahir}</p>
                    <p>Nomor Telepon : {anggota.no_telp}</p>
                    <Link
                        className='btn btn-primary'
                        to={`/anggota`}
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
 
export default AnggotaDetail