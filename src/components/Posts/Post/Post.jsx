import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
    Post
    {posts?.map((post) => (

      <div  key={post._id}>
      <Link to={"/post/" + post._id}>
        <p> Title: {post.title} <br /> Body: {post.body} </p>
      </Link>
      </div>
    ))}
  </div>
  );
};

export default Post;
