import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function Spinner() {
    const [count, setCount] = useState(2);
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevValue) => --prevValue);
      }, 1000);
      count === 0 &&
        navigate("/login", {
          state: location.pathname,
        });
      return () => clearInterval(interval);
    }, [count, navigate, location]);
    return (
        <div>
        <br/><br/><br/>
            <center><button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>

                <h5 className="Text-center">redirecting to you in {count} second </h5>           
                 </button>
            </center>
        </div>
    )
}