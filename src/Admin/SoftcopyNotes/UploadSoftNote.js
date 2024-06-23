import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from '../../Component/Navbar.js'
import Footer from '../../Component/Footer.js'
import '../../App.js'
import SideBar from '../SideBar.js'
import axios from "axios"


export default function UploadSNotes() {
    const [subjectName, setSubjectName] = useState('');
    const [subjectCode, setSubjectCode] = useState('');
    const [subjectDriveLink, setSubjectDriveLink] = useState('');
    const [faculty, setFaculty] = useState('')
    const [semester, setSemester] = useState();
    async function submit(e) {
        e.preventDefault();
        try {

            await axios.post("http://localhost:8000/api/auth/softcopy", {
                subjectName, subjectCode, subjectDriveLink, faculty, semester
            })

                .then(res => {
                    if (res.data.status) {
                        toast("Notes Upload Successfully");

                    }
                    else {
                        toast("internal server error");
                    }
                })
                .catch(e => {
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <div>

            <Navbar />

            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-md-3'>
                        <SideBar />

                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            <div className='col-md-1'>

                            </div>
                            <div className='col-md-9 softcopy' >
                                <br />
                                <center><h3>Softcopy Notes</h3></center>
                                <form><br />
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label>SubjectName:</label>
                                            <input type='text' name='subjectName' onChange={(e) => { setSubjectName(e.target.value) }} className='form-control' required /><br />
                                            <label>SubjectCode:</label>
                                            <input type='text' name='subjectCode' onChange={(e) => { setSubjectCode(e.target.value) }} className='form-control' required /><br />
                                            <label>SubjectDriveLink:</label>
                                            <input type='text' name='subjectDriveLink' onChange={(e) => { setSubjectDriveLink(e.target.value) }} className='form-control' required /><br />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Faculty:</label><br/>
                                                <select onChange={(e) => { setFaculty(e.target.value) }}>
                                                    <option >-- Please select --</option>
                                                    <option value="computer">computer</option>
                                                    <option value="civil">civil</option>
                                                    <option value="architecture">architecture</option>
                                                    <option value="it">IT</option>

                                                </select>
                                                <br/><br/>
                                                <label>Semester:</label><br/>
                                                <select onChange={(e) => { setSemester(e.target.value) }}>
                                                    <option >-- Please select --</option>
                                                    <option value="I">I</option>
                                                    <option value="II">II</option>
                                                    <option value="III">III</option> 
                                                    <option value="IV">IV</option>
                                                    <option value="V">V</option>
                                                    <option value="VI">VI</option> 
                                                    <option value="VII">VII</option>
                                                    <option value="VIII">VIII</option>
                                                </select>
                                                <br/><br/><center><button type='btn' onClick={submit} style={{ backgroundColor: "#0077b3", color: 'white', width: 200, height: 40 }}>UploadNotes</button></center><br />
                                            <ToastContainer />
                                        </div></div>
                                </form>
                            </div>


                            <div className='col-md-2'></div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
