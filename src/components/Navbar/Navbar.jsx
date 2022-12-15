import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { FileOutlined, HomeOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";
import "./Navbar.scss";

function Navbar() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <nav>
    <div className="navigation">
      <ul>
        <li className="list">
          <Link className="link" to="/">
          <span className="icon">
            <HomeOutlined />
          </span>
            <p className="text">Home</p>
          </Link>
        </li >
        <li className="list">
          <Link className="link" to="/profile">
          <span className="icon">
            <UserOutlined />
          </span>
            <p className="text">Profile</p>
          </Link>
        </li >
        <li className="list">
          <Link className="link" to="/chat">
          <span className="icon">
            <MessageOutlined />
          </span>
          <p className="text">Chat</p>
          </Link>
        </li>
        <li className="list">
          <Link className="link" to="/posts">
          <span className="icon">
            <FileOutlined />
          </span>
            <p className="text">Posts</p>
          </Link>
        </li>
      </ul>
    </div>
    </nav>
  );
}

export default Navbar;
{
  /* <Link  to="/">Home </Link>
<Link to="/register"> Register </Link>
<Link to="/login"> Login </Link>
<Link to="/logout">Logout</Link> */
}
{
  /* <button onClick={onLogout}>Logout</button> */
}
