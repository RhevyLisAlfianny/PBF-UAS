import React from 'react'
import { Link } from 'react-router-dom'
 
const NavBar = () => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
         <Link className="navbar-brand" to='/'>Perpustakan</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to='/buku'>Buku</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/anggota'>Anggota</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/peminjaman'>Peminjaman</Link>
                </li>
            </ul>
        </div>
    </nav>
        
)
 
export default NavBar