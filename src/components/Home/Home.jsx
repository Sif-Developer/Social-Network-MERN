import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import AddPost from "../Posts/AddPost/AddPost";
import Posts from "../Posts/Posts";
import AddCommentButton from "./CreateComment/CreateComment";
import CreateComment from "./CreateComment/CreateComment";
import "./Home.scss";

function Home() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate('/search/'+ text)
    }
  };

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };


  return (
    <div className="home-container">
      
      <div className="home-nav"></div>
      <h1>Home page</h1>
      
      <div  className="container-search">
        <input onKeyUp={handleChange} placeholder="search post" name="text" />
      </div>
      <div>
          <Posts/>
          <AddPost/>
          {/* <AddCommentButton/> */}
    </div>
    </div>
  );
}

export default Home;