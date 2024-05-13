import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import axios from 'axios';
import Navbar from '../../Component/Navbar';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import Footer from '../../Component/Footer';

export default function IT_Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/auth/softcopy")
      .then(result => {
        setNotes(result.data);
      
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <center>Go To Dashboard <Link to="/dashboard">Click Here</Link></center><br />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <br />
            <div>
              <h3>IT Engineering Notes</h3>
              <br />


              <h5>First semester</h5>


              <table className="table table-striped table-bordered">
                <thead className='table bg-dark text-white'>
                  <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Subject Name</th>
                    <th scope="col">Link</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {notes && notes.map((note, index) => {
                    if (note.faculty === 'IT'&& note.semester==='I') {
                      return (
                        <tr key={index}>
                          <td>{note.subjectCode}</td>
                          <td>{note.subjectName}</td>
                          <td><Link to={note.subjectDriveLink} className='nav-link'>Access Here</Link></td>
                          <td style={{ fontSize: 22 }}><FaEdit />   <MdDelete /></td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table><br/>



              <h5>Second semester</h5>


              <table className="table table-striped table-bordered">
                <thead className='table bg-dark text-white'>
                  <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Subject Name</th>
                    <th scope="col">Link</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {notes && notes.map((note, index) => {
                    if (note.faculty === 'IT'&& note.semester==='II') {
                      return (
                        <tr key={index}>
                          <td>{note.subjectCode}</td>
                          <td>{note.subjectName}</td>
                          <td><Link to={note.subjectDriveLink} className='nav-link'>Access Here</Link></td>
                          <td style={{ fontSize: 22 }}><FaEdit />   <MdDelete /></td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table><br/>



              <h5>Third semester</h5>


              <table className="table table-striped table-bordered">
                <thead className='table bg-dark text-white'>
                  <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Subject Name</th>
                    <th scope="col">Link</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {notes && notes.map((note, index) => {
                    if (note.faculty === 'IT'&& note.semester==='III') {
                      return (
                        <tr key={index}>
                          <td>{note.subjectCode}</td>
                          <td>{note.subjectName}</td>
                          <td><Link to={note.subjectDriveLink} className='nav-link'>Access Here</Link></td>
                          <td style={{ fontSize: 22 }}><FaEdit />   <MdDelete /></td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table><br/>



              <h5>Four semester</h5>


              <table className="table table-striped table-bordered">
                <thead className='table bg-dark text-white'>
                  <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Subject Name</th>
                    <th scope="col">Link</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {notes && notes.map((note, index) => {
                    if (note.faculty === 'IT'&& note.semester==='IV') {
                      return (
                        <tr key={index}>
                          <td>{note.subjectCode}</td>
                          <td>{note.subjectName}</td>
                          <td><Link to={note.subjectDriveLink} className='nav-link'>Access Here</Link></td>
                          <td style={{ fontSize: 22 }}><FaEdit />   <MdDelete /></td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table><br/>



              <h5>Fifth semester</h5>


              <table className="table table-striped table-bordered">
                <thead className='table bg-dark text-white'>
                  <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Subject Name</th>
                    <th scope="col">Link</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {notes && notes.map((note, index) => {
                    if (note.faculty === 'IT'&& note.semester==='V') {
                      return (
                        <tr key={index}>
                          <td>{note.subjectCode}</td>
                          <td>{note.subjectName}</td>
                          <td><Link to={note.subjectDriveLink} className='nav-link'>Access Here</Link></td>
                          <td style={{ fontSize: 22 }}><FaEdit />   <MdDelete /></td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table><br/>



              <h5>Sixth semester</h5>


              <table className="table table-striped table-bordered">
                <thead className='table bg-dark text-white'>
                  <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Subject Name</th>
                    <th scope="col">Link</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {notes && notes.map((note, index) => {
                    if (note.faculty === 'IT'&& note.semester==='VI') {
                      return (
                        <tr key={index}>
                          <td>{note.subjectCode}</td>
                          <td>{note.subjectName}</td>
                          <td><Link to={note.subjectDriveLink} className='nav-link'>Access Here</Link></td>
                          <td style={{ fontSize: 22 }}><FaEdit />   <MdDelete /></td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table><br/>



              <h5>Seventh semester</h5>


              <table className="table table-striped table-bordered">
                <thead className='table bg-dark text-white'>
                  <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Subject Name</th>
                    <th scope="col">Link</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {notes && notes.map((note, index) => {
                    if (note.faculty === 'IT'&& note.semester==='VII') {
                      return (
                        <tr key={index}>
                          <td>{note.subjectCode}</td>
                          <td>{note.subjectName}</td>
                          <td><Link to={note.subjectDriveLink} className='nav-link'>Access Here</Link></td>
                          <td style={{ fontSize: 22 }}><FaEdit />   <MdDelete /></td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table><br/>



              <h5>Eight semester</h5>


              <table className="table table-striped table-bordered">
                <thead className='table bg-dark text-white'>
                  <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Subject Name</th>
                    <th scope="col">Link</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {notes && notes.map((note, index) => {
                    if (note.faculty === 'IT'&& note.semester==='VIII') {
                      return (
                        <tr key={index}>
                          <td>{note.subjectCode}</td>
                          <td>{note.subjectName}</td>
                          <td><Link to={note.subjectDriveLink} className='nav-link'>Access Here</Link></td>
                          <td style={{ fontSize: 22 }}><FaEdit />   <MdDelete /></td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table><br/>
           </div>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}