import axios from "axios";

const API_URL = "http://localhost:8000";

const getAllPosts = async () => {
    const res = await axios.post(API_URL + "/posts/getAllPosts");
    return res.data;
  };

  const postService = {
    getAllPosts
  }

export default postService