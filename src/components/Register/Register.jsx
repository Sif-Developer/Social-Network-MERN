import React, { useState } from "react";
import { register, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { useEffect } from "react";
import "./Register.scss"

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    age: "",
    gender: "",
    country: "",
    city: "",
  });

  const {
    first_name,
    last_name,
    email,
    password,
    phone,
    age,
    gender,
    country,
    city,
    confirm_password,
  } = formData;

  const dispatch = useDispatch();
  const { isSuccess, message, isError } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Successful register",
        description: message,
      });
    }
    if (isError){
      notification.error({
        message: "Error in the register",
        description: message,
      })
    }
    dispatch(reset())
  }, [isSuccess,isError, message]);










  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    } else {
      dispatch(register(formData));
    }
  };

  return (
    <div className="form-div">
    <form onSubmit={onSubmit} className="contact-us form-container">
      
      <input
        type="text"
        name="first_name"
        value={first_name}
        onChange={onChange}
        placeholder=" First name"
        className="input"
      />
      <input
        type="text"
        name="last_name"
        value={last_name}
        onChange={onChange}
        placeholder=" Last name"
        className="input"
      />
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
        placeholder=" Password"
        className="input"
      />
      <input
        type="password"
        name="confirm_password"
        value={confirm_password}
        onChange={onChange}
        placeholder="Confirm password"
        className="input"
      />
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={onChange}
        placeholder=" Phone number"
        className="input"
      />
      <input
        type="number"
        name="age"
        value={age}
        onChange={onChange}
        placeholder=" Age"
        className="input"
      />
      <input
        type="text"
        name="gender"
        value={gender}
        onChange={onChange}
        placeholder=" gender"
        className="input"
      />
      <input
        type="text"
        name="country"
        value={country}
        onChange={onChange}
        placeholder=" Country"
        className="input"
      />
      <input
        type="text"
        name="city"
        value={city}
        onChange={onChange}
        placeholder=" City"
        className="input"
      />
      <button type="submit" className="button">
        REGISTER
      </button>
    </form>
    </div>
  );
};

export default Register;
