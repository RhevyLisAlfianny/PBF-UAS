import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BukuDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
          buku: {}
        }
    }
    componentDidMount () {
 
        const kodeBuku = this.props.match.params.kode
 
        axios.get(`/api/buku/${kodeBuku}`).then(response => {
          this.setState({
            buku: response.data
          })
        })
      }
 
      render () {
        const { buku } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>Detail Buku-buku</div>
                  <div className='card-body'>
                    <p>Judul Buku : {buku.judul}</p>
                    <p>Jumlah Halaman : {buku.jumlah_hal}</p>
                    <p>Penulis : {buku.pengarang}</p>
                    <p>Penerbit : {buku.penerbit}</p>
                    <p>Tahun Terbit : {buku.tahun_terbit}</p>
                    <Link
                        className='btn btn-primary'
                        to={`/buku`}
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
 
export default BukuDetail