import React from 'react'
import { Link } from 'react-router-dom'
 
const SideBar = () => (
  <div id="layoutSidenav_nav">
      <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div className="sb-sidenav-menu">
              <div className="nav">
                  <div className="sb-sidenav-menu-heading">Data</div>
                  <Link className="nav-link" to='/buku'>
                    <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                    Data Pustaka
                  </Link>
                      
                  <a className="nav-link" href="tables.html">
                      <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                      Data Anggota
                  </a>
                  <a className="nav-link" href="tables.html">
                      <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                      Data Peminjaman
                  </a>
              </div>
          </div>
      </nav>
  </div>
)
 
export default SideBar