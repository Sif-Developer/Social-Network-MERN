import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./Home.scss";

function Home() {
  return (
    <div className="home-container">
      <div className="home-nav"></div>
      <h1>Home page</h1>
      <Register/>
      <br></br>
      <Login/>

    </div>
  );
}

export default Home;
