import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedBlogs: [],
  loggedInBlogs: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlogs: (state, actions) => {
      state.savedBlogs.push(actions.payload);
    },
    loggedInBlogs: (state, actions) => {
      state.loggedInBlogs = actions.payload;
    },
  },
});

export const { addBlogs, loggedInBlogs } = blogSlice.actions;

export default blogSlice.reducer;
