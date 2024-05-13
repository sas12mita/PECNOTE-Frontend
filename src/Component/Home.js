import React from 'react'
import Navbar from './Navbar'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import Footer from './Footer';

import { useAuth } from '../Context/ContextApi';
import { Link } from 'react-router-dom';

export default function Body() {
  const [auth,setAuth]=useAuth();
  return (
    <div>

      <Navbar/>
      <br /><br />
      <div className='container'>
        <div className='row'>
          <div className='col-md-2 bodymain'></div>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-6'>
                <br /><br />
                <p style={{ fontSize: 12 }}>Welcome to <h3>PECNOTE</h3></p>

                <p>Books are the mirrors of the soul.
                  You are not done with a book until you pass it to another reader.
                  There is more treasure in books than in all the pirate's loot on Treasure Island.   </p>
                <button className='btn text-white' style={{ backgroundColor: '#0077b3' }}>Buy Notes</button>
              </div>
              <div className='col-md-6'><img src='/image/home.png' alt="Sharing is caring" width={310} height={290} /></div>
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
      <br/>
      <div className='' style={{ backgroundColor: '#E6F2F8', height: "auto",paddingBottom:30 }}>
        <div className='container-fluid'>
          <div className='row'>
            <center><h3><button className='btn text-white'
             style={{ backgroundColor: '#0077b3', marginTop: 30, marginBottom: 20 }}>
             View Engineering Notes</button></h3></center><br /><br /><br />
            <div className='col-md-3'>
            <center><button className='btn'
            style={{ backgroundColor: '#0077b3', marginBottom: 20 }}>
            <Link className='nav-link text-white' to="/civil">Civil Engineering</Link>
            </button></center>
            </div>
            <div className='col-md-3'>
            <center><button className='btn'
            style={{ backgroundColor: '#0077b3', marginBottom: 20,paddingBotton:20 }}>
            <Link className='nav-link text-white'  to="/computer" >Computer Engineering</Link>
            </button></center>
            </div>  <div className='col-md-3'>
            <center><button className='btn'
            style={{ backgroundColor: '#0077b3', marginBottom: 20,paddingBotton:20  }}>
            <Link className='nav-link text-white'  to="/architecture">Architecture Engineering</Link>
            </button></center>
            </div>  <div className='col-md-3'>
            <center><button className='btn'
            style={{ backgroundColor: '#0077b3', marginBottom: 20,paddingBotton:20  }}>
            <Link className='nav-link text-white' to="/it">IT Engineering</Link>
            </button></center>
            </div>
          </div>
        </div></div>

<br/>
      <div className='contact'>
        <div className='container-fluid'>
          <br />
          <div className=' row'>
            <div className='col-md-2'></div>
            <div className='col-md-8' style={{ height:"auto",paddingBottom:10 }}>
              <div className='row'>
                <div className='col-md-6' style={{ backgroundColor: '#0077b3', color: 'white' }}>
                  <center><h3>Contact Us</h3></center>
                  <center><p styl={{ fontSize: 14 }}>Feel free to contact us</p></center><br />
                  <p><FaMapMarkerAlt /> <b>Address</b></p>
                  <p style={{ fontSize: 15, marginLeft: 25 }}>Pokhara Engineering Collage,Firke</p>
                  <p><FaPhone /> <b>Let's Talk</b></p>
                  <p style={{ fontSize: 15, marginLeft: 25 }}>982313545,983456321</p>
                  <p><FaMailBulk /> <b>General Support</b></p>
                  <p style={{ fontSize: 15, marginLeft: 25 }}>PECNOTE@gmail.com</p>


                </div>
                <div className='col-md-6'>
                  <center><h3>Get In Touch</h3></center><br />
                  <form
                    action=""
                    method="POST"
                    className="contact-inputs">
                    <input type="text" name="username" placeholder="username" className='form-control' autoComplete="off" required />
                    <br />
                    <input type="email" className='form-control' name="Email" placeholder="Email" autoComplete="off" required />
                    <br />
                    <textarea name="message" className='form-control' cols="30" rows="6" autoComplete="off" required></textarea>
                    <br />
                    <center><button className='btn text-white' style={{ backgroundColor: '#0077b3',width:100}}>Send</button></center>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-md-2'></div>

          </div>
        </div>

      </div>

      <br /><br />
      <br /><br />
      <br /><br />
      <Footer />
    </div>

  )
}
