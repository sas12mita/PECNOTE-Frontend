// src/components/Card.js
import React, { useState } from 'react';


const Card = () => {
  const [data, setData] = useState([
    { title: 'Basic Electrical Engineering', photo: 'image/bee.jpg' },
    { title: 'C programming', photo: 'image/c.jfif' },
    { title: 'Applied Mechanics', photo: 'image/applied.JPG' },
    { title: 'Chemistry', photo: 'image/chemistry.jfif' },
    { title: 'Hydraulic', photo: 'image/hydralic.png' },
    { title: 'Java', photo: 'image/java.jpg' },
    { title: 'Physics', photo: 'image/physics.jpg' },
    { title: 'maths', photo: 'image/maths.jfif' },
    { title: 'C++ Programming', photo: 'image/c++.JPG' },
    { title: 'Chemistry', photo: 'image/chemistry.jfif' },
    { title: 'Hydraulic', photo: 'image/hydralic.png' },
    { title: 'Rich Dad Poor Dad', photo: 'image/rich.jpg' },
  ]);

  return (
    <div className="container-fluid">
    <div className='row'>
      {data.map((item, index) => (
        <div className='col-md-2' style={{marginBottom:20}}>
        <div key={index} className="card" style={{height:"auto",paddingBottom:30}}>
         <center style={{marginTop:10}}><img src={item.photo} alt={item.title} height={150} width={120} className="card-image" /></center>
         <br/> <center className="card-title">{item.title}</center>
          <p class="card-text"></p>

        </div></div>
      ))}
    </div></div>
  );
};

export default Card;
