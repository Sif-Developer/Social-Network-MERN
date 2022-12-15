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
    localStorage.setItem("user", JSON.stringify(res.data));
    console.log("Ha funcionado!");
  } else if (res.data.user === null) {
    console.log("res.data.user es null");
  }
  return res.data;
};

const logout = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/users/logoutUser", {
    headers: {
      authorization: user?.token,
    },
  });
  if(res.data){
    localStorage.removeItem("user")
  }
  return res.data
};



const authService = {
  register,
  login,
  logout
};

export default authService;
