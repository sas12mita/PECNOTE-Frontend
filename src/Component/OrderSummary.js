import React from 'react';
import '../App.css'
import { useCart } from '../Context/Cart';
import { Link } from 'react-router-dom';
export default function OrderSummary(props) {
    const [cart,setCart]=useCart();
    
const TotalPrice = () => {
    try {

        let totalItemPrice = 0, totalPrice, sPrice = 0;

        cart?.map((c) => (
            totalItemPrice = c.price + totalItemPrice
        ))
        if (totalItemPrice !== 0) {
            sPrice = 20
        }
        totalPrice = totalItemPrice + sPrice;
        return { totalItemPrice, totalPrice, sPrice }
    } catch (e) {
        console.log(e)
    }
}
const { totalItemPrice, sPrice, totalPrice } = TotalPrice()

    return (
        <div>
            <table className="table">
                <br /><br />
                <tbody className="orderSummary">
                    <br />
                    <tr style={{ paddingLeft: 20, textAlign:"center" }}><h5>Order Summary</h5></tr>
                    <tr>
                        <td style={{ paddingLeft: 20 }}>
                            <p>Subtotal ({cart.length} items) </p>
                            <p>Shipping Fee </p>
                            <p>Total</p>
                        </td>
                        <td style={{ paddingLeft: 100 }}>
                            <p>Rs.{totalItemPrice}</p>
                            <p>Rs. {sPrice} </p>
                            <p>Rs. {totalPrice}</p>
                        </td>
                    </tr>


                </tbody>
            </table>

            <button className="btn btn-success form-control">
                <Link to="/buynotes/checkout" className="nav-link text-white">{props.name}</Link></button>
        </div>

    )
}

