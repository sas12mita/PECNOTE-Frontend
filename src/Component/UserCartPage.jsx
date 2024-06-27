import '../App.css';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../Context/ContextApi';
import { useCart } from '../Context/Cart';
import Navbar from './Navbar';
import Footer from './Footer';
import DropIn from 'braintree-web-drop-in-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function UserCartPage() {
  const [auth] = useAuth();
  const [clientToken, setClientToken] = useState('');
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useCart();
  const [address, setAddress] = useState(''); // Add state for address
  const navigate = useNavigate();

  const TotalPrice = () => {
    try {
      let totalItemPrice = 0, totalPrice, sPrice = 0;
      cart?.forEach((c) => {
        totalItemPrice += c.price;
      });
      if (totalItemPrice !== 0) {
        sPrice = 20;
      }
      totalPrice = totalItemPrice + sPrice;
      return { totalItemPrice, totalPrice, sPrice };
    } catch (e) {
      console.log(e);
    }
  };

  const { totalItemPrice, sPrice, totalPrice } = TotalPrice();

  const getToken = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/auth/braintress/token');
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, [auth?.token]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post('http://localhost:8000/api/auth/braintress/payment', {
        nonce,
        cart,
        address, // Include address in the payment request
      });
      setLoading(false);
      localStorage.removeItem('cart');
      setCart([]);
      navigate('/order');
      toast.success('Payment Completed Successfully');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem('cart', JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('Client Token:', clientToken);
    console.log('Instance:', instance);
  }, [clientToken, instance]);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <center>
        <h5>{`Hello ${auth?.token && auth?.user?.fullName}`}</h5>
        {cart?.length ? `You Have ${cart.length} items in your cart` : 'Your Cart Is Empty'}
      </center>
      <br />
      <div className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <h5 style={{ paddingLeft: 30 }}>Item In Cart</h5>
            {cart?.map((c) => (
              <table className='table card' key={c._id}>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={`http://localhost:8000/api/auth/getPhoto/${c._id}`}
                        height={150}
                        width={140}
                        alt={c.name}
                      />
                    </td>
                    <td style={{ paddingLeft: 70 }}>
                      <p>Name: {c.name}</p>
                      <p style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>Rs. {c.price}</p>
                      <p style={{ fontSize: 12 }}>{c.description.substring(0, 30)}</p>
                      <button className='btn btn-danger' onClick={() => removeCartItem(c._id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
          <div className='col-md-5'>
            <table className='table'>
              
              <br />
              <tbody className='orderSummary'>
                <br/>
                <tr style={{ paddingLeft: 20, textAlign: 'center' }}>
                  <h5>Order Summary</h5>
                </tr>
                <tr>
                  <td style={{ paddingLeft: 20 }}>
                    <p>Subtotal ({cart.length} items) </p>
                    <p>Shipping Fee </p>
                    <p>Total</p>
                  </td>
                  <td style={{ paddingLeft: 100 }}>
                    <p>Rs.{totalItemPrice}</p>
                    <p>Rs. {sPrice} </p>
                    <p style={{color:"orange",fontWeight:"bold"}}>Rs. {totalPrice}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Shipping Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your shipping address"
                required
              />
            </div>
            {clientToken ? (
              <DropIn
                options={{
                  authorization: clientToken,
                }}
                onInstance={(instance) => setInstance(instance)}
              />
            ) : (
              <div>Loading payment options...</div>
            )}
            <center>
              <button className='btn btn-success' onClick={handlePayment} disabled={loading || !instance}>
                {loading ? 'Processing ....' : 'Make Payment'}
              </button>
            </center>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
