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
  const [payment, setPayment] = useState('');
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState('');
  const [cart, setCart] = useCart();
  const [phoneNumber,setphoneNumber]=useState('');
  const navigate = useNavigate();

  // Fetch Braintree client token
  const getToken = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/auth/braintreeToken');
      setClientToken(data?.clientToken);
    } catch (error) {
      console.error('Error fetching client token:', error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  // Handle change in address input field
  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  // Calculate total price of items in cart
  const calculateTotalPrice = () => {
    let totalItemPrice = 0, totalPrice, sPrice = 0;
    cart?.forEach((item) => {
      totalItemPrice += item.price;
    });
    if (totalItemPrice !== 0) {
      sPrice = 20; // Example shipping fee
    }
    totalPrice = totalItemPrice + sPrice;
    return { totalItemPrice, totalPrice, sPrice };
  };

  const { totalItemPrice, sPrice, totalPrice } = calculateTotalPrice();

  // Remove item from cart
  const removeCartItem = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Handle payment process
  const handlePayment = async () => {
   
  };

  // Handle confirmation of order
  const handleConfirmOrder = async () => {
    try {
      if (payment === 'cod') {
     
        const { data } = await axios.post('http://localhost:8000/api/auth/codpayment', {
         phoneNumber,
          cart,
          address,
        });
        if (data.status) {
          localStorage.removeItem('cart');
          setCart([]);
          alert("successful place order")
          navigate('/buynotes');
        } else {
          toast.error('Failed to place order');
        }
      } else if (payment === 'online') {
        try {
          setLoading(true);
          const { nonce } = await instance.requestPaymentMethod();
          const { data } = await axios.post(
            'http://localhost:8000/api/auth/payment',
            {
              nonce,
              cart,
              phoneNumber,
              address,
            }
          );
          setLoading(false);
          console.log('Payment response:', data);
          localStorage.removeItem('cart');
          setCart([]);
          navigate('/buynotes');
          alert('Online Payment Completed Successfully');
        } catch (error) {
          console.error('Payment error:', error.response ? error.response.data : error.message);
          setLoading(false);
          toast.error('Payment failed. Please try again.');
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

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
            {cart?.map((item) => (
              <table className='table card' key={item._id}>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={`http://localhost:8000/api/auth/getPhoto/${item._id}`}
                        height={150}
                        width={140}
                        alt={item.name}
                      />
                    </td>
                    <td style={{ paddingLeft: 70 }}>
                      <p>Name: {item.name}</p>
                      <p style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>Rs. {item.price}</p>
                      <p style={{ fontSize: 12 }}>{item.description.substring(0, 30)}</p>
                      <button className='btn btn-danger' onClick={() => removeCartItem(item._id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
          <div className='col-md-5' style={{ backgroundColor: '#d7e4fc', padding: 20, height: 'auto' }}>
            <table className='table' style={{ backgroundColor: 'white', padding: 20 }}>
              <tbody className='orderSummary'>
                <tr>
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
                    <p style={{ color: 'orange', fontWeight: 'bold' }}>Rs. {totalPrice}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='mb-3'>
              <label>Address:</label>
              <input
                type='text'
                value={address}
                onChange={handleChange}
                className='form-control'
                required
              />
               <label>PhoneNumber</label>
               <input 
               type='number'
                name='phoneNumber'
                 onChange={(e) => { setphoneNumber(e.target.value) }} 
                 className='form-control' required />
            </div>
            <div>
              <label htmlFor='paymentMethod'>Payment Method: </label>
              <select
                id='paymentMethod'
                onChange={(e) => setPayment(e.target.value)}
                className='form-control'
                name='paymentMethod'
              >
                <option value=''>----Select payment----</option>
                <option value='cod'>Cash on Delivery</option>
                <option value='online'>Online Payment</option>
              </select>

              {payment === 'online' && (
                <div>
                  <br />
                  {!clientToken || !cart?.length ? (
                    <p>No token found or there are no items in the cart</p>
                  ) : (
                    <DropIn
                      options={{
                        authorization: clientToken,
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    />
                  )}
                </div>
              )}

              <center>
                <button
                  className='btn btn-success'
                  onClick={handleConfirmOrder}
                  style={{ marginTop: 20 }}
                >
                  Confirm Order
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
