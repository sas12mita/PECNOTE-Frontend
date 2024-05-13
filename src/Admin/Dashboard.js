import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import "../App.js"

export default function Dashboard() {

  return (
    <div>
      <Navbar />

      <div className='container-fluid'>
        <div className='row'>
          <br />
          <div className='col-md-3'>
            <SideBar />
          </div>
          <div className='col-md-9'>
            <div className='row' style={{ margin: 20 }}>

              <h5>Welcome To Admin Dashboard</h5>
              <br /><br />
              <div className='col-md-3'>

                <div class="card">
                  <div class="card-body bg-success text-white">
                    <center>
                      <h5 class="card-title">Total User</h5>
                      <p class="card-text">50</p>
                      <Link to="#" class="btn" style={{ backgroundColor: '#E0E5E5', width: 100 }}>Manage</Link></center>
                  </div>
                </div></div>
              <div className='col-md-3'><div class="card">
                <div class="card-body bg-success text-white">
                  <center>
                    <h5 class="card-title">Total Order</h5>
                    <p class="card-text">50</p>
                    <Link to="#" class="btn" style={{ backgroundColor: '#E0E5E5', width: 100 }}>Manage</Link></center>
                </div>
              </div>
              </div>
              <div className='col-md-3'><div class="card">
                <div class="card-body bg-success text-white">
                  <center>
                    <h5 class="card-title">Total Notes</h5>
                    <p class="card-text">50</p>
                    <Link to="#" class="btn" style={{ backgroundColor: '#E0E5E5', width: 100 }}>Manage</Link></center>
                </div>
              </div>
              </div>
              <div className='col-md-3'>
                <div class="card">
                  <div class="card-body bg-success text-white">
                    <center>
                      <h5 class="card-title">Total Delivered</h5>
                      <p class="card-text">50</p>
                      <Link to="#" class="btn" style={{ backgroundColor: '#E0E5E5', width: 100 }}>Manage</Link></center>
                  </div>
                </div>
              </div>
            </div>

            <div className='row' style={{ margin: 20 }}>
              <div className='col-md-3'>
                <div class="card">
                  <div class="card-body bg-success text-white">
                    <center>
                      <h5 class="card-title">Computer</h5>
                      <p class="card-text">50</p>
                      <Link to="/dashboard/softcopy/computer" class="btn" style={{ backgroundColor: '#E0E5E5', width: 100 }}>View Notes</Link></center>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div class="card">
                  <div class="card-body bg-success text-white">
                    <center>
                      <h5 class="card-title">Civil</h5>
                      <p class="card-text">50</p>
                      <Link to="/dashboard/softcopy/civil"  class="btn" style={{ backgroundColor: '#E0E5E5', width: 100 }}>view Notes</Link></center>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div class="card">
                  <div class="card-body bg-success text-white">
                    <center>
                      <h5 class="card-title">Architecture</h5>
                      <p class="card-text">50</p>
                      <Link to="/dashboard/softcopy/architecture"  class="btn" style={{ backgroundColor: '#E0E5E5', width: 100 }}>View Notes</Link></center>
                  </div>
                </div>

              </div>
              <div className='col-md-3'>
                <div class="card">
                  <div class="card-body bg-success text-white">
                    <center>
                      <h5 class="card-title">IT Engineering</h5>
                      <p class="card-text">50</p>
                      <Link to="/dashboard/softcopy/it" class="btn" style={{ backgroundColor: '#E0E5E5', width: 100 }}>View Notes</Link></center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
