import React from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer';
import CashPayment from './CashPayment';
import OnlinePayment from './OnlinePayement';

export default function UsersOrder() {
  return (
    <div className='bg-light'>
      <Navbar/>
      <CashPayment/>
      <OnlinePayment/>
      <Footer/>
    </div>
  )
}
