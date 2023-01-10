import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Provider } from "react-redux";
import postService from "./postsService";

import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
  post: {},
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    return await postsService.getAllPosts();
  } catch (error) {
    console.error(error);
  }
});

export const getPostById = createAsyncThunk("posts/getPostById", async (id) => {
  try {
    return await postService.getPostById(id);
  } catch (error) {
    console.error(error);
  }
});

export const likePost = createAsyncThunk("posts/likePost", async (_id) => {
  try {
    return await postService.likePost(_id);
  } catch (error) {
    console.error(error);
  }
});

export const dislike = createAsyncThunk("products/dislike", async (_id) => {
  try {
    return await postService.dislike(_id);
  } catch (error) {
    console.error(error);
  }
});

export const getPostByName = createAsyncThunk(
  "posts/getPostByName",
  async (title) => {
    try {
      return await postsService.getPostByName(title);
    } catch (error) {
      console.error(error);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost/",
  async (postData) => {
    try {
      return await postService.createPost(postData);
    } catch (error) {
      console.log(error);
    }
  }
);
export const comment = createAsyncThunk("posts/comments", async (comment) => {
  try {
    return await postsService.comment(comment);
  } catch (error) {
    console.error(error);
  }
});

export const deletePost = createAsyncThunk("books/deletePost", async(_id) => {
  try {
    return await postService.deletePost(_id)
  } catch (error) {
    console.error(error)
  }
})


export const postsSlice = createSlice({
  name: "posts",

  initialState,

  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },




  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllPosts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.post = action.payload;
      })

      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => {
          if (post._id == action.payload._id) {
            post = action.payload;
          }
          return post;
        });
      })
      .addCase(dislike.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          console.log(typeof action.payload._id);
          if (post._id === action.payload.post._id) {
            post = action.payload.post;
          }
          return post;
        });
        state.posts = posts;
      })

      .addCase(getPostByName.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = [action.payload.post, ...state.posts];
      })
      .addCase(comment.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
            if (post._id === action.payload._id) {
                post = action.payload;
            }
            return post;
        });
        state.posts = posts
    })
    .addCase(deletePost.fulfilled, (state, action) =>{
      state.posts = state.posts.filter(post => post.id !== action.payload.id)
    })
  },
});

export default postsSlice.reducer;
