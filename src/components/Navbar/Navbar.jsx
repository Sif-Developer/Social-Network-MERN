import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import {
  FileOutlined,
  HomeOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Navbar.scss";

function Navbar() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  
  function activeLink() {
    // Obtenemos todos los elementos con la clase "list"
    const list = document.querySelectorAll(".list");
    // Recorremos todos los elementos de la lista
    list.forEach((item) => {
      // Quitamos la clase "active" de todos los elementos
      item.classList.remove("active");
    });
    // Agregamos la clase "active" al elemento que se hizo clic
    this.classList.add("active");
  }
  // Agregamos un controlador de eventos "click" a cada elemento de la lista
  // cuando el componente se monte en el DOM
  useEffect(() => {
    const list = document.querySelectorAll(".list");
    list.forEach((item) => {
      item.addEventListener("click", activeLink);
    });
    // Esta función se ejecutará cuando el componente se desmonte del DOM,
    // y nos permite limpiar los controladores de eventos que agregamos
    return () => {
      list.forEach((item) => {
        item.removeEventListener("click", activeLink);
      });
    };
  }, []);

  return (
    <nav>
      <div className="navigation">
        <ul>
          <li className="list active">
            <Link className="link" to="/">
              <span className="icon">
                <HomeOutlined />
              </span>
              <p className="text">Home</p>
            </Link>
          </li>
          <li className="list">
            <Link className="link" to="/profile">
              <span className="icon">
                <UserOutlined />
              </span>
              <p className="text">Profile</p>
            </Link>
          </li>
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
          <div className="indicator"></div>
        </ul>
      </div>
      {activeLink()}
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
