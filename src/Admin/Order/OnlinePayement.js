import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../Context/ContextApi";

const OnlinePayment = () => {
  
  const [onlineorder,setonlineOrder]=useState([])
  const [auth] = useAuth();

  const getonlineOrder = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/auth/getonlineOrder", {
        headers: {
          Authorization: `Bearer ${auth?.token}`
        }
      });
      setonlineOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) {
      getonlineOrder();
    }
  }, [auth?.token]);
  
  return (
    <>
      <div className="container p-3 m-3 dashboard">
        <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-9" style={{ marginTop: 40 }}>
            <h1 style={{ marginLeft: 20 }}>Online Payment</h1>
            {onlineorder?.map((o, i) => (
              <div className="border shadow" key={i}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">PhoneNumber</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{o?.status}</td>
                      <td>{auth?.user?.fullName}</td>
                      <td>{o?.phoneNumber}</td>
                      <td>{o?.noteBook?.length}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="container">
                  {o?.noteBook?.map((p) => (
                    <div className="row mb-2 p-3 card flex-row" key={p._id}>
                      <div className="col-md-4">
                        <img
                          src={`http://localhost:8000/api/auth/getPhoto/${p._id}`}
                          height={120}
                          width={100}
                          alt={p.name}
                        />
                      </div>
                      <div className="col-md-8">
                        <p>{p.name}</p>
                        <p>Price: {p.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   
    </>
  );
};

export default OnlinePayment;
