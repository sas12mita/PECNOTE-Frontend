import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import '../App.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
//import { Link } from 'react-router-dom'
//import {select} from 'andt'
import { useNavigate,useLocation } from 'react-router-dom'
export default function SellNote() {
  const navigate = useNavigate()
  //const location=useLocation()
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('')
  const [quantity,setQuantity]=useState('')
  const [price,setPrice]=useState('');
  const[photo,setPhoto]=useState('');
  const [description,setDescription]=useState("");
   const[notes,setNotes] =useState("")

    async function submit(e){
      e.preventDefault();
      try {
        const productData = new FormData();
        productData.append("name", name);
        productData.append("photo", photo);
        productData.append("price", price);
        productData.append("quantity", quantity);
        productData.append("description", description);
         axios.post(
          "http://localhost:8000/api/auth/uploadNotes",
          productData
        ).then(res=>{
          if(res.data.success){
              toast("successfully uploaded")
              console.log(res.data)
          }
        
          else{
              toast("internal Server error")
          }
      
      })
      .catch(e =>{
          console.log(e);
      })

  }
  catch(e){
      console.log(e);

  }

}
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
    <div className='container'>
    <div className='row'>
    <div className='col-md-1'></div>
    <div className='col-md-4'>
    <br/>
    <div className=' secondehandnote'>
    <br/>
    <h4>Form For Second Hand Notes</h4>

    <form >
    <label>Name:</label>
        <input type='text' name='name' onChange={(e) => setName(e.target.value)}  className='form-control' required /><br />
        <label>Slug</label>
        <input type='text' name='slug'  onChange={(e) => setSlug(e.target.value)}  className='form-control' required /><br />

        <label>Photo</label>
        <input type='file' name='photo' onChange={(e) => setPhoto(e.target.files[0])}  accept='image/*' className='form-control' required /><br />
        <label>Quantity</label>
        <input type='number' name='quantity'  onChange={(e) => setQuantity(e.target.value)}   className='form-control' required /><br />
        <label>Price</label>
        <input type='number' name='price'  onChange={(e) => setPrice(e.target.value)}  className='form-control' required /><br />
        <label>Description</label>
        <textarea id="w3review" name="w3review" rows="4" cols="40"  onChange={(e) => setDescription(e.target.value)} ></textarea><br/><br/>
        <center><button type='btn' onClick={submit} style={{ backgroundColor: "#0077b3", color: 'white', width: 200 }}>Upload Note</button></center><br />
       <ToastContainer/>
        </form>
 </div>
    </div>
    <div className='col-md-1'></div>
    <div className='col-md-5' style={{marginTop:30}}>
    <h4>Your Notes</h4>
    
    <table className="table table-striped table-bordered">
    <thead className='table bg-dark text-white'>
      <tr>
        <th scope="col">Subject Name</th>
        <th scope="col">Image</th>
        <th scope="col">Action</th>
        </tr></thead>
        <tbody>
        {notes && notes.map((note, index) => {
          
            return (
              <tr key={index}>
                <td>{note.name}</td>
                <td><img src={`http://localhost:8000/api/auth/getPhoto/${note._id}`} height={60} width={70} /></td>
                <td style={{ fontSize: 22 }}><FaEdit />   <MdDelete /></td>
              </tr>
            );
        })}
        </tbody>
        </table>
    </div>
    
    <div className='col-md-1'></div>
    </div>
    </div> 
    <br/>
      <Footer/>
    </div>
  )
}
