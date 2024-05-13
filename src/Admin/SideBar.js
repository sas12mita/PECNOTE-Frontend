import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='sidebar' style={{ backgroundColor: "#E0E5E5",fontSize: 18,padding: 30 ,height:"auto"}}>
    <ul type="none">
    <li>
    <Link to="/dashboard" className='nav-link text-dark'>Home</Link>
  </li>
    <li>
      <Link to="/dashboard/users" className='nav-link text-dark'>Manage Users</Link>
    </li>
    <li><Link to="/dashboard/order" className='nav-link text-dark'>Manage Orders</Link>
    </li>
    <li>
      <Link to="/dashboard/sellnote" className='nav-link text-dark'>Sell Notes</Link>
    </li>
    <li>
      <Link to="/dashboard/softcopy" className='nav-link text-dark'>SoftcopyNotes</Link>
    </li>
    <li>
      <Link to="/dashboard/dispatch" className='nav-link text-dark'>Dispatch</Link>
    </li>
    <li>
      <Link to="/dashboard/feedback" className='nav-link text-dark'>User FeedBack</Link>
    </li>
    <li>
    <Link to="/dashboard/feedback" className='nav-link text-dark'>Account</Link>
  </li>
  </ul>
    </div>
  )
}
