import { useState, useEffect } from "react";
import { useAuth } from "../../Context/ContextApi"
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function UserPrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("http://localhost:8000/api/auth/user_auth",{
        headers:{
          "Authorization":auth?.token,
        },
      });
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner/>;
}