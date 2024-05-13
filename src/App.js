import './App.css';
import React from 'react';
import Home from "./Component/Home";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import BuyNotes from "./Component/BuyNotes";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellNote from './Component/SellNote';
//import Order from './Component/Order';
import UserPrivateRoute from './Component/Route/UserPrivateRoute';
//import ViewNotes from './Component/ViewNotes';
//import Dashboard from './Component/Dashboard';
import Dashboard from './Admin/Dashboard';
import AdminPrivateRoute from './Component/Route/AdminPrivateRoute';
import Softcopy from './Admin/SoftcopyNotes/UploadSoftNote';
import ComNotes from './Admin/SoftcopyNotes/ComNotes';
import CivilNotes from './Admin/SoftcopyNotes/CivilNotes';
import ArchNotes from './Admin/SoftcopyNotes/ArchNotes'
import IT_Notes from './Admin/SoftcopyNotes/IT_Notes'
import Architecture from './Component/ViewSoftcopy/Architecture'
import IT from './Component/ViewSoftcopy/IT';
import Computer from './Component/ViewSoftcopy/Computer';
import Civil from './Component/ViewSoftcopy/Civil';
import DetailPage from './Component/DetailPage';
//import Search from './Component/Search';




//import Navbar from 'Component/Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/computer" element={<Computer />} /> 
          <Route path="/civil" element={<Civil />} />
          <Route path="/architecture" element={<Architecture />} /> 
          <Route path="/it" element={<IT />} />



          <Route path="/dashboard" element={<AdminPrivateRoute />}>
            <Route path="" element={<Dashboard />} />
            <Route path='softcopy' element={<Softcopy />} />
            <Route path='softcopy/computer' element={<ComNotes />} />
            <Route path='softcopy/civil' element={<CivilNotes />} />
            <Route path='softcopy/architecture' element={<ArchNotes />} />
            <Route path='softcopy/it' element={<IT_Notes />} />

          </Route>



          <Route path="/sellnote" element={<UserPrivateRoute />}>
            <Route path="" element={<SellNote />} />
          </Route>
          <Route path='/buynotes' element={<UserPrivateRoute />}>
            <Route path="" element={<BuyNotes />} />
            <Route path=":slug" element={<DetailPage />} />

      
          </Route>

        </Routes>
      </BrowserRouter>

    </div>

  )
}
export default App;

