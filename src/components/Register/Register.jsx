import React, { useState } from "react";
import { register } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { useEffect } from "react";
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
        message: "Success",
        description: message,
      });
    }
    if (isError){
      notification.error({
        message: "Error",
        description: message,
      })
    }
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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="first_name"
        value={first_name}
        onChange={onChange}
        placeholder=" First name"
      />
      <input
        type="text"
        name="last_name"
        value={last_name}
        onChange={onChange}
        placeholder=" Last name"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder=" Email"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder=" Password"
      />
      <input
        type="password"
        name="confirm_password"
        value={confirm_password}
        onChange={onChange}
        placeholder="Confirm password"
      />
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={onChange}
        placeholder=" Phone number"
      />
      <input
        type="number"
        name="age"
        value={age}
        onChange={onChange}
        placeholder=" Age"
      />
      <input
        type="text"
        name="gender"
        value={gender}
        onChange={onChange}
        placeholder=" gender"
      />
      <input
        type="text"
        name="country"
        value={country}
        onChange={onChange}
        placeholder=" Country"
      />
      <input
        type="text"
        name="city"
        value={city}
        onChange={onChange}
        placeholder=" City"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
