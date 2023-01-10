import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deletePost,
  dislike,
  getAllPosts,
  likePost,
} from "../../../features/posts/postsSlice";
import "./Post.scss"

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const like = (_id) => {
    dispatch(likePost(_id));
    dispatch(getAllPosts());
  };

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      {posts?.map((post) => {
        const isAlreadyLiked = post.likes.includes(user._id);
        console.log(user._id);
        return (
          <div key={post._id} className="post">
            <Link to={"/post/" + post._id}>
              <p className="post-title">{post.title}</p>
              <p className="post-body">{post.body}</p>
            </Link>
            <DeleteOutlined onClick={() => dispatch(deletePost(post._id))} />
  
            <p className="post-likes">Likes: {post.likes.length}</p>

            {isAlreadyLiked ? (
              <button className="post-button liked" onClick={() => dispatch(dislike(post?._id))}>
                Dislike
              </button>
            ) : (
              <button className="post-button" onClick={() => like(post?._id)}>
                Like
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
    }  

export default Post;