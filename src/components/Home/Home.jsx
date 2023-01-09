import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import Posts from "../Posts/Posts";
import Register from "../Register/Register";
import "./Home.scss";

function Home() {

const [text, setText] = useState("")
const navigate = useNavigate()
const handleChange = (e) => {
  setText(e.target.value)
  if (e.key === "Enter") {
    console.log(text)
    navigate("/search/" + text )
  }
}

  return (
    <div className="home-container">
      
      <div className="home-nav"></div>
      <h1>Home page</h1>
      <div>
        <input onKeyUp={handleChange} placeholder="search post" name="text" />
      </div>
          <Posts/>

    </div>
  );
}

export default Home;