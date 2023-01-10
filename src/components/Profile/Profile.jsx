import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./Profile.scss";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <>
      <div className="profile-container">
        <div className="space-nav"></div>
        <h1>Profile page</h1>
        <p>First Name: {user?.first_name}</p>
        <p>Last Name: {user?.last_name}</p>
        <p>Age: {user?.age}</p>
        <p>Phone: {user?.phone}</p>
        <p>Email: {user?.email}</p>
        <p>Gender: {user?.gender}</p>
        <p>Country: {user?.country}</p>
        <p>City: {user?.city}</p>
      </div>
    </>
  );
};

export default Profile;
