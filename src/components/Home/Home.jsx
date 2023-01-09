import React from "react";
import Login from "../Login/Login";
import Posts from "../Posts/Posts";
import Register from "../Register/Register";
import "./Home.scss";

function Home() {
  return (
    <div className="home-container">
      <div className="home-nav"></div>
      <h1>Home page</h1>
          <Posts/>

    </div>
  );
}

export default Home;