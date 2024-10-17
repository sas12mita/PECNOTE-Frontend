import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from '../Context/ContextApi';
import { toast } from 'react-toastify';
import { useCart } from '../Context/Cart';
import { Badge } from "antd";
export default function Navbar() {
  const [cart] = useCart();
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#0077b3', paddingLeft: 30 }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">PECNOTE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ paddingLeft: 20, fontSize: 17 }}>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/sellnote">SellNotes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/buynotes">BuyNotes</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-white" to="/faq">FAQ</Link>
            </li>
              
              <li className="nav-item">
                <Badge count={cart?.length} showZero>
                  <Link className="nav-link text-white" to="/buynotes/cart" style={{ paddingTop: 10 }} ><span style={{ fontSize: 17 }}>Cart </span><span style={{ fontSize: 20 }}><FaCartPlus /></span></Link>
                </Badge>
              </li>
            </ul>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li><Link className="nav-link text-white" to="/app"><button className="btn" style={{
                backgroundColor: '#ffffff',
                color: '#0077b3',
                border: 'none',
                padding: '2px 15px',
                borderRadius: '45px',

              }}>Live Chat</button></Link></li>

              {
                !auth.token ? (<>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/signup">SignUp</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/login">Login</Link>
                  </li>
                </>) : (
                  <>
                    <li className="nav-item">
                      <Link onClick={handleLogout} className="nav-link text-white" to="/login">Logout</Link>
                    </li>
                  </>)
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
