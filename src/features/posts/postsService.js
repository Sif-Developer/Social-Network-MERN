import axios from "axios";

const API_URL = "http://localhost:8000";

const getAllPosts = async () => {
    const res = await axios.get(API_URL + "/posts/getAllPosts");
    return res.data;
  };
const getPostById = async (id) => {
    const res = await axios.get(API_URL + "/posts/getPostById/" + id)
    return res.data
}

  const postService = {
    getAllPosts,
    getPostById
  }

export default postService