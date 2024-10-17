import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
export default function ManageUser() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/auth/getUser")
            .then(result => {
                setUser(result.data);

            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6' style={{marginTop:80}}>
                        {user ? (
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((user, index) => (
                                        <tr key="index">
                                            <td>{index}</td>
                                            <td>{user.fullName}</td>
                                            <td>{user.email}</td>
                                           
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>There is no user</p>
                        )}

                    </div>
                    <div className='col-md-3'></div>
                </div></div>
            <Footer />
        </div>
    );
}
