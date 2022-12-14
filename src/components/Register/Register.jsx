import React, { useState } from "react";

const Register = () => {

const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    gender: "",
    country: "",
    city: "",
  });

  const { first_name, last_name, email, password, phone, age, gender, country, city } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("formData", formData);
  };

  return (
   
      <form onSubmit={onSubmit}>
  <input type="text" name="first_name" value={first_name} onChange={onChange} placeholder=" First name" />
  <input type="text" name="last_name" value={last_name} onChange={onChange} placeholder=" Last name" />
  <input type="email" name="email" value={email} onChange={onChange} placeholder=" Email" />
  <input type="password" name="password" value={password} onChange={onChange} placeholder=" Password" />
  <input type="tel" name="phone" value={phone} onChange={onChange} placeholder=" Phone number" />
  <input type="number" name="age" value={age} onChange={onChange} placeholder=" Age" />
  <input type="text" name="gender" value={gender} onChange={onChange} placeholder=" gender" />
  <input type="text" name="country" value={country} onChange={onChange} placeholder=" Country" />
  <input type="text" name="city" value={city} onChange={onChange} placeholder=" City" />
      <button type="submit">Register</button>
</form>
 
  );
};

export default Register;