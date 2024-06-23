import React from 'react';
import '../App.css'
import { useAuth } from '../Context/ContextApi';
import { useCart } from '../Context/Cart';
import Navbar from './Navbar';
import Footer from './Footer';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import OrderSummary from './OrderSummary';

export default function UserCartPage() {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));

    } catch (error) {
      console.log(error);
    }
  };
  // Conditional rendering to handle the case when auth.user is undefined
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <center><h5>{`Hello ${auth?.token && auth?.user?.fullName}`}</h5>
        {cart?.length
          ? `You Have ${cart.length} items in your cart`
          : "Your Cart Is Empty"}</center>
      <br />
      <div className="container">
        <div className='row'>
          <div className='col-md-7'>
            <h5 style={{ paddingLeft: 30 }}>Item In Cart</h5>
            {cart?.map((c) => (
              <table className="table card">

                <tbody>
                  <tr>
                    <td>

                      <img src={`http://localhost:8000/api/auth/getPhoto/${c._id}`} height={150} width={140} alt={c.name} />
                    </td>
                    <td style={{ paddingLeft: 70 }}>
                      <p>Name: {c.name}</p>
                      <p style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>Rs. {c.price}</p>
                      <p style={{ fontSize: 12 }}>{c.description.substring(0, 30)}</p>
                      <button className="btn btn-danger" onClick={() => removeCartItem(c._id)} >Remove </button>
                    </td>
                  </tr></tbody>
              </table>

            ))}
          </div>
          <div className='col-md-5' >
          <OrderSummary name="CHECKOUT"/>
            </div>
            </div></div>
      <Footer />
    </div>
  );
}