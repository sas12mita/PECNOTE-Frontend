import React, {  useState } from "react"
import Navbar from './Navbar'
import Footer from './Footer'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import { useAuth } from "../Context/ContextApi"

export default function Signup() {
    const navigate=useNavigate();
    const [fullName,setfullName]=useState('');
    const [email,setEmail]=useState('');
    const[phoneNumber,setphoneNumber]=useState('');
    const [password,setPassword]=useState('')
    const {storeTokenInLS}=useAuth();

    async function submit(e){
        e.preventDefault();
         try{

           await axios.post("http://localhost:8000/api/auth/register",{
                fullName,email,phoneNumber,password
            })
         
            .then(res=>{
                if(res.data==="exist"){
                    toast("User Already Exist")
                }
                else if(res.data.status){
                    
                    toast("Successfully Register")
                    console.log("responsse from server",res.data.token)
                    storeTokenInLS(res.data.token);
                    navigate("/login")

                }
                else{
                    toast("internal Server error")
                }
            
            })
            .catch(e =>{
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }
    

    return (
        
        <div>
            <Navbar name="Login" />

            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>


                    <div className='col-md-4 signform' >
                        <br /><br/>
                        <center><h3>Signup</h3></center>
                        <form style={{paddingLeft:20,paddingRight:20}}>
                        <label>fullName</label>
                            <input type='text' name='fullName' onChange={(e) => { setfullName(e.target.value) }} className='form-control' required /><br />
                            <label>Email</label>
                            <input type='email' name='email' onChange={(e) => { setEmail(e.target.value) }} className='form-control' required /><br />
                            <label>password</label>
                            <input type='password' name='password' onChange={(e) => { setPassword(e.target.value) }} className='form-control' required /><br />
                            <center><button type='btn' onClick={submit} style={{ backgroundColor: "#0077b3", color: 'white', width: 200 }}>SignUp</button></center><br />

                            <center>Do you alreadyhave Account?<Link className="nav-link " to="/login">Login</Link></center>
                        </form>
                        <ToastContainer/>

                    </div>


                    <div className='col-md-4'></div>


                </div>
            </div>
            <br />
            <Footer />
        </div>
    )
}
