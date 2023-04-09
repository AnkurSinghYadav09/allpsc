import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogicAction } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const disptach=useDispatch()
    const navigate = useNavigate();

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    disptach(LogicAction(loginData))
    // console.log(loginData);
  };

  useEffect(()=>{
       if(isAuth){
        navigate("/")
       }
  },[isAuth,navigate])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) =>
            setloginData({ ...loginData, [e.target.name]: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) =>
            setloginData({ ...loginData, [e.target.name]: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
