import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate;

  const onLogout = () => {
    dispatch(logout());
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Logout;
