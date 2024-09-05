import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import blogSlice from "./slices/blog.slice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    blog: blogSlice,
  },
});
