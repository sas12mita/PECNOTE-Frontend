import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import axios from 'axios';
import Footer from './Footer';
import SearchInput from './SearchInput';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/Cart';

export default function BuyNotes() {
  const [cart, setCart] = useCart();
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const getNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/auth/getNotes");
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <center><SearchInput /></center>
      <div className='container'>
        <div className='row'>
        
          <div className='col-md-12'>
          <br/>
            <h1 className="text-center">All Products</h1>
            <br/>
            <div className="row">
              {notes && notes.map((note, index) => (
                <div className="col-md-3 mb-4" key={index}>
                  <div 
                    className="card h-100"
                    onClick={() => navigate(`/buynotes/${note.slug}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <div style={{ backgroundColor: '#F9FBFC',paddingTop:10 }}>
                      <center>
                        <img src={`http://localhost:8000/api/auth/getPhoto/${note._id}`} height={180} width={150} alt={note.name} />
                      </center>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title" style={{fontSize:17}}><center>{note.name}</center></h5>
                      <img  src='/image/rating.png' alt="Sharing is caring" width={90} height={17}/><br/><br/>

                      <p className="card-text" style={{display:"flex", justifyContent:"space-between",paddingLeft:20,paddingRight:20}}> <span>Rs. {note.price}</span><span style={{fontSize:14, color:"red",textDecoration:"line-through"}}>Rs.{note.discountPrice}</span> </p>
                    </div>
                    <div className="card-footer">
                      <button
                        className="btn btn-secondary w-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCart([...cart, note]);
                          localStorage.setItem("cart", JSON.stringify([...cart, note]));
                          toast("Item added successfully");
                        }}
                        style={{ fontSize: 14 }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </div>
      <Footer />
    </div>
  );
}
