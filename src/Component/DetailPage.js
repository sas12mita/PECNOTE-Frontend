
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../Context/Cart';
import {useParams} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { toast } from 'react-toastify';
const NoteList = () => {
  const params = useParams();
  const [cart,setCart]=useCart()
  const [note, setNote] = useState({});

  useEffect(() => {
    if (params?.slug) {
      getNote();
    }
  }, [params?.slug]);

  const getNote = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/auth/getNotes/${params.slug}`);
      setNote(response.data.note); // Assuming the response has a 'note' property
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <Navbar/>
    <br/>
    <div className='container'>
    <div className='row'>
    <div className='col-md-1'></div>
    <div className='col-md-4'>
    <img src={`http://localhost:8000/api/auth/getPhoto/${note._id}`} height={310} width="70%" alt={note.name} />
    </div>
    <div className='col-md-5'>
    <br/>
    <center><h4>Note's Details</h4></center><br/>
    <p>Name : {note.name}</p>
      <p>Description : {note.description} </p>
    <p>price : {note.price}</p>
    <img  src='/image/rating.png' alt="Sharing is caring" width={100} height={20}/><br/><br/>
    <button
    className="btn btn-secondary "
    onClick={(e) => {
      e.stopPropagation();
      setCart([...cart, note]);
      localStorage.setItem("cart", JSON.stringify([...cart, note]));
      toast("Item added successfully");
    }}
    style={{ fontSize: 14 }}>ADD TO CART</button>    
    <button class="btn btn-secondary" style={{marginLeft:10}}>BUY NOW</button>


    </div>

    </div>
    </div>
    <br/>
    <Footer/></div>
  );
};

export default NoteList;
