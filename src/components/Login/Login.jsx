import { notification } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import "./Login.scss"
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const { message, isError, isSuccess } = useSelector(state => state.auth);
  const dispatch = useDispatch();

useEffect(()=>{
  if(isError){
    notification.error({
      message: "Error",
      description:  message
    })
  }
  if(isSuccess){
    notification.success({
      message: "Login successful!",
      description: message
    })
  }
  dispatch(reset())
}, [isSuccess, isError, message])




  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <form onSubmit={onSubmit} className="form-container">
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        className="input"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        className="input"
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
