import produce from "immer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { likePost } from "../../../features/posts/postsSlice";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  



  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      Post
      {posts?.map((post) => {
        
        console.log(user._id);
        return (
          <div key={post._id}>
            <Link to={"/post/" + post._id}>
              <p>
                {" "}
                Title: {post.title} <br /> Body: {post.body}{" "}
              </p>
            </Link>

            <span>Likes: {post.likes.length} </span>

            {isAlreadyLiked ? (
              <button onClick={() => console.log("dislike"(post?._id))}>
                Dislike
              </button>
            ) : (
              <button onClick={() => dispatch(likePost(post?._id))}>
                Like
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Post;
