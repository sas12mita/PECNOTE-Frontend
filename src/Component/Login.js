import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../App.css';
import axios from "axios"
import { useNavigate, Link, useLocation } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import { useAuth } from '../Context/ContextApi';

export default function Login() {
  const navigate = useNavigate()
  const location=useLocation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const result = await axios.post("http://localhost:8000/api/auth/login", { email, password });
      console.log(result);
  
      if (result.data.status === "userexist") {
        toast.success("successful login");
        setAuth({
          ...auth,
          user: result.data.user,
          token: result.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(result.data));
        navigate(location.state || "/");
      } else if (result.data.status === "adminexist") {
        toast.success("successful login");
        setAuth({
          ...auth,
          user: result.data.user,
          token: result.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(result.data));
        navigate("/dashboard");
      } else if (result.data === "notexist" || result.data.status === "pw_wrong") {
        toast.error("Incorrect details");
      } else {
        toast.error("internal server error");
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Please try again.");
    }
  };
  
  return (
    <div>
      <Navbar/>
    

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>


          <div className='col-md-4 loginform' >
            <br />
            <center><h3>Login Form</h3></center>
            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input type='email' name='email' className='form-control' onChange={(e) => setEmail(e.target.value)} required /><br />
              <label>password</label>
              <input type='password' name='password' className='form-control' onChange={(e) => setPassword(e.target.value)} required /><br />
              <center><button type='btn' style={{ backgroundColor: "#0077b3", color: 'white', width: 200 }}>Login</button></center><br />

              <center>New to PECNOTE? <Link className="nav-link " to="/signup">Create New Account</Link></center>
              <ToastContainer />
            </form>


          </div>


          <div className='col-md-4'></div>


        </div>
      </div>
      <br />
      <Footer />
    </div>
  )
}
