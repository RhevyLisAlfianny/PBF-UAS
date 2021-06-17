import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import SideBar from './SideBar'
import TopBar from './TopBar'
import BukuIndex from './BukuIndex'
import TambahBuku from './TambahBuku'
import NavBar from './NavBar'
import AnggotaIndex from './AnggotaIndex'
import BukuDetail from './BukuDetail'
import BukuEdit from './BukuEdit'
import AnggotaTambah from './AnggotaTambah'
import PeminjamanIndex from './PeminjamanIndex'
import PeminjamanDetail from './PeminjamanDetail'
import AnggotaDetail from './AnggotaDetail'
import PeminjamanTambah from './PeminjamanTambah'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <NavBar/>
                    <Route exact path='/' component={Main}/>
                    <Switch>
                        <Route exact path='/buku' component={BukuIndex}/>
                        <Route exact path='/tambah' component={TambahBuku} />
                        <Route path='/buku/edit/:kode' component={BukuEdit} />
                        <Route path='/buku/:kode' component={BukuDetail} />
                        <Route exact path='/anggota' component={AnggotaIndex} />
                        <Route exact path='/anggota/:nomor' component={AnggotaDetail} />
                        <Route exact path='/tambahAnggota' component={AnggotaTambah} />
                        <Route exact path='/peminjaman' component={PeminjamanIndex} />
                        <Route exact path='/tambahPeminjaman' component={PeminjamanTambah} />
                        <Route exact path='/peminjaman/:kode' component={PeminjamanDetail} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'))