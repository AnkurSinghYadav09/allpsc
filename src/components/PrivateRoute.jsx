import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  console.log(isAuth);
  if (!isAuth) {
    navigate("/login");
  }
  return <div>{isAuth ? children : navigate("/login")}</div>;
};

export default PrivateRoute;
