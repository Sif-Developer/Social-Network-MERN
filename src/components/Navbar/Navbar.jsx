import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

function Navbar() {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <span>
      <Link to="/">Home </Link>
      <Link to="/register"> Register </Link>
      <Link to="/login"> Login </Link>
      <Link to="/logout">Logout</Link>
      <button onClick={onLogout}>Logout</button>
    </span>
  );
}

export default Navbar;
