import axios from "axios";

const API_URL = "http://localhost:8000";

const register = async (userData) => {
  const res = await axios.post(API_URL + "/users/registerUser", userData);
  return res.data;
};

const login = async(userData)=>{
  const res = await axios.post(API_URL + "/users/loginUser", userData)
  if(res.data){
    localStorage.setItem("user", JSON.stringify(res.data))
  }
  return res.data
}



const authService = {
  register,
  login,
};

export default authService;
