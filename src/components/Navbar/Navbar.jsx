import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import {
  FileOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Navbar.scss";
import { notification, Modal } from "antd";

const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

function Navbar() {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const onLogout = () => {
    toggleModal();
  };

  const { message, isErrorLogout, isSuccessLogout } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccessLogout) {
      notification.success({
        message: "Logout successful!",
        description: message,
      });
    }
    if (isErrorLogout) {
      notification.error({
        message: "Error",
        description: message,
      });
    }

    dispatch(reset());
  }, [isSuccessLogout, isErrorLogout, message]);

  return (
    <nav>
      <div className="navigation">
        <ul>
          <li
            className={`list ${activeIndex === 0 ? "activeLink" : ""}`}
            onClick={() => setActiveIndex(0)}>
            <Link className="link" to="/">
              <span className="icon">
                <HomeOutlined />
              </span>
              <p className="text">Home</p>
            </Link>
          </li>
          <li
            className={`list ${activeIndex === 1 ? "activeLink" : ""}`}
            onClick={() => setActiveIndex(1)}>
            <Link className="link" to="/profile">
              <span className="icon">
                <UserOutlined />
              </span>
              <p className="text">Profile</p>
            </Link>
          </li>
          <li
            className={`list ${activeIndex === 2 ? "activeLink" : ""}`}
            onClick={() => setActiveIndex(2)}>
            <Link className="link" to="/chat">
              <span className="icon">
                <MessageOutlined />
              </span>
              <p className="text">Chat</p>
            </Link>
          </li>
          <li
            className={`list ${activeIndex === 3 ? "activeLink" : ""}`}
            onClick={() => setActiveIndex(3)}>
            <Link className="link" to="/posts">
              <span className="icon">
                <FileOutlined />
              </span>
              <p className="text">Posts</p>
            </Link>
          </li>
          {user && token ? (
            <li
              className={`list ${activeIndex === 4 ? "activeLink" : ""}`}
              onClick={onLogout}>
              <Link className="link" to="/login">
                <span className="icon">
                  <LoginOutlined />
                </span>
                <p className="text">Login</p>
              </Link>
            </li>
          ) : (
            <li
              className={`list ${activeIndex === 4 ? "activeLink" : ""}`}
              onClick={() => setActiveIndex(4)}>
              <Link className="link" to="/login">
                <span className="icon">
                  <LoginOutlined />
                </span>
                <p className="text">Login</p>
              </Link>
            </li>
          )}

          <div className="indicator">{activeIndex}</div>
        </ul>
      </div>
      <Modal
        title="Are you sure you want to log out?"
        visible={showModal}
        onOk={() => {
          dispatch(logout());
          hideModal();
          navigate("/login");
        }}
        onCancel={hideModal}>
        <p>This will log you out of the app</p>
      </Modal>
    </nav>
  );
}

export default Navbar;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { logout, reset } from "../../features/auth/authSlice";
// import {
//   FileOutlined,
//   HomeOutlined,
//   LoginOutlined,
//   LogoutOutlined,
//   MessageOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import "./Navbar.scss";
// import { notification, Modal } from "antd";

// const user = JSON.parse(localStorage.getItem("user"));
// const token = JSON.parse(localStorage.getItem("token"));

// function Navbar() {
//   const dispatch = useDispatch();
//   const [activeIndex, setActiveIndex] = useState(0);

//   const onLogout = () => {
//     dispatch(logout());
//   };
//   const { message, isErrorLogout, isSuccessLogout } = useSelector(
//     (state) => state.auth
//   );

//   useEffect(() => {
//     if (isSuccessLogout) {
//       notification.success({
//         message: "Logout successful!",
//         description: message,
//       });
//     }
//     if (isErrorLogout) {
//       notification.error({
//         message: "Error",
//         description: message,
//       });
//     }

//     dispatch(reset());
//   }, [isSuccessLogout, isErrorLogout, message]);

//   return (
//     <nav>
//       <div className="navigation">
//         <ul>
//           <li
//             className={`list ${activeIndex === 0 ? "activeLink" : ""}`}
//             onClick={() => setActiveIndex(0)}>
//             <Link className="link" to="/">
//               <span className="icon">
//                 <HomeOutlined />
//               </span>
//               <p className="text">Home</p>
//             </Link>
//           </li>
//           <li
//             className={`list ${activeIndex === 1 ? "activeLink" : ""}`}
//             onClick={() => setActiveIndex(1)}>
//             <Link className="link" to="/profile">
//               <span className="icon">
//                 <UserOutlined />
//               </span>
//               <p className="text">Profile</p>
//             </Link>
//           </li>
//           <li
//             className={`list ${activeIndex === 2 ? "activeLink" : ""}`}
//             onClick={() => setActiveIndex(2)}>
//             <Link className="link" to="/chat">
//               <span className="icon">
//                 <MessageOutlined />
//               </span>
//               <p className="text">Chat</p>
//             </Link>
//           </li>
//           <li
//             className={`list ${activeIndex === 3 ? "activeLink" : ""}`}
//             onClick={() => setActiveIndex(3)}>
//             <Link className="link" to="/posts">
//               <span className="icon">
//                 <FileOutlined />
//               </span>
//               <p className="text">Posts</p>
//             </Link>
//           </li>
//           {user && token ? (
//             <li
//               className={`list ${activeIndex === 4 ? "activeLink" : ""}`}
//               onClick={onLogout}>
//               <Link className="link" to="/logout">
//                 <span className="icon">
//                   <LogoutOutlined />
//                 </span>
//                 <p className="text">Logout</p>
//               </Link>
//             </li>
//           ) : (
//             <li
//               className={`list ${activeIndex === 4 ? "activeLink" : ""}`}
//               onClick={() => setActiveIndex(4)}>
//               <Link className="link" to="/login">
//                 <span className="icon">
//                   <LoginOutlined />
//                 </span>
//                 <p className="text">Login</p>
//               </Link>
//             </li>
//           )}

//           <div className="indicator">{activeIndex}</div>
//         </ul>
//       </div>
//       <></>
//     </nav>
//   );
// }

// export default Navbar;
