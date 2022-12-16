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
          <p>User : {user?.first_name}</p>
        </div>
      
    </>
  );
};

export default Profile;
