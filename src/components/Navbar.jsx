import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default Navbar;
