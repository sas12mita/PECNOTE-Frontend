import React from 'react'
import {Link} from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




export default function Footer() {
    return (
        <div>
            <div className='Upperfooter'>
            
                <div className='container-fluid'>
                    <div className='row' style={{ backgroundColor: "#E6F2F8", height:"auto",paddingBottom:20,paddingLeft:20 }}>
                    <br/>
                        <div className='col-md-4' >
                        <br/>Get connected With us on social media<br/></div>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>
<br/>
                            <Link style={{ marginLeft: 20, fontSize: 20 }}> <FaFacebook /></Link>
                            <Link style={{ marginLeft: 20, fontSize: 20 }}> <FaGithub /></Link>
                            <Link style={{ marginLeft: 20, fontSize: 20 }}> <FaGoogle /></Link>
                            <Link style={{ marginLeft: 20, fontSize: 20 }}> <FaInstagram /></Link>
                            <Link style={{ marginLeft: 20, fontSize: 20 }}> <FaTwitter /></Link>
                            <Link style={{ marginLeft: 20, fontSize: 20 }}> <FaLinkedin /></Link>
                            <Link style={{ marginLeft: 20, fontSize: 20 }}> <FaYoutube /></Link>
<br/>
                        </div>

                    </div>

                </div>

                </div>
                
                <div className=' container middlefooter'>
                 <div className='row'>
                 <div className='col-md-4' style={{paddingTop:20,paddingBottom:20}}>
                
                 <h4>Product</h4>
                 <Link>Civil</Link><br/>
                 <Link>Computer</Link><br/>
                 <Link>Architecture</Link><br/>
                 <Link>IT</Link>
                 
                
                 </div>
                 <div className='col-md-4' style={{paddingTop:20,paddingBottom:20}}>
                 <h4>Useful Link</h4>
                 <Link>MyOrder</Link><br/>
                 <Link>ViewNote</Link><br/>
                 <Link>BuyBook</Link><br/>
                 <Link>Order</Link>
                 
                 </div>
                 <div className='col-md-4' style={{paddingTop:20,paddingBottom:20}}>
                 <h4>Get Help</h4>
                
                  <p><FaMapMarkerAlt />  Pokhara Engineering Collage,Firke</p>
                  <p><FaPhone />  982313545 , 983456321</p>
                  <p><FaMailBulk />  PECNOTE@gmail.com</p>
                 </div>
                 </div>
                </div>
                <div className='buttonfooter' style={{height:60, backgroundColor:"#0077b3",paddingTop:20,paddingBottom:20}}>
                <center className='text-white'>© 2020 Copyright: PECNOTE.COM</center></div>
        </div>
    )
}
