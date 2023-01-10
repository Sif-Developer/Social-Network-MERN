import axios from "axios";

const API_URL = "http://localhost:8000";

const register = async (userData) => {
  const res = await axios.post(API_URL + "/users/registerUser", userData);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + "/users/loginUser", userData);
  // Verificamos que res.data contenga la propiedad "user" y que no sea nula
  if (res.data !== null) {
    const userData = res.data.user;
    const { _id, first_name, last_name, age, phone, email, gender, country, city , postIds} =
      userData;
    const userLoggedData = {
      _id,
      first_name,
      last_name,
      age,
      phone,
      email,
      gender,
      country,
      city,
      postIds,
    };
    localStorage.setItem("user", JSON.stringify(userLoggedData));
    localStorage.setItem("token", JSON.stringify(res.data.token));
  } else if (res.data.user === null) {
  }
  return res.data;
};

const logout = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.delete(API_URL + "/users/logoutUser", {
    headers: {
      authorization: token,
    },
  });
  if (res.data) {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
  return res.data;
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
