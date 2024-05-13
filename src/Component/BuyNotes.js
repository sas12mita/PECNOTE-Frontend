import React ,{useState,useEffect}from 'react'
import { toast } from 'react-toastify'
import Navbar from './Navbar';
import axios from 'axios'
import Footer from './Footer'
import SearchInput from './SearchInput';
import { useNavigate } from 'react-router-dom';


export default function BuyNotes() {
  const[notes,setNotes] =useState("")
  const navigate=useNavigate()
const getNotes = async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/api/auth/getNotes");
    setNotes(data.notes);
  } catch (error) {
    console.log(error);
    toast.error("Someething Went Wrong");
  }
};

//lifecycle method
useEffect(() => {
  getNotes();
}, []);
  return (
    <div>
      <Navbar/>
      <br/>
      <center><SearchInput/></center>
    <div className='container'>
    <div className='row'>
    <div className='col-md-1'></div>
    <div className='col-md-11'>
    <h1 className="text-center">All Products</h1>
    <div className="d-flex flex-wrap">
    {notes && notes.map((note, index) => {
          
      return (      
          <div className="card m-2" style={{ width: "18rem",paddingTop:20 }}>
        <div style={{backgroundColor:'#F9FBFC'}}> <center><img src={`http://localhost:8000/api/auth/getPhoto/${note._id}`} height={200} width={200} alt={note.name} /></center>  </div>
          <div className="card-body">
            <h5 className="card-title">{note.name}</h5>
            <p className="card-text">
              {note.description.substring(0, 30)}...
            </p>
            <p className="card-text"> Rs. {note.price}</p>
            
            <button class="btn btn-success ms-1" onClick={() => navigate(`/buynotes/${note.slug}`)} style={{fontSize:14}}>More Detail</button>
            <button class="btn btn-secondary ms-1">ADD TO CART</button>

          </div>
        </div>
      )})}

    
    </div>
    </div>
    
    
    </div>


</div>
      <Footer/>
    </div>
  )
}