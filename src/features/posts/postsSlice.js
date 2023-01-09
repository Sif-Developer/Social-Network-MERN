import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    return await postsService.getAllPosts();
  } catch (error) {
    console.error(error);
  }
});

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
  },
});

export default postsSlice.reducer;
