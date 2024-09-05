import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null,
  error: "",
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleLoading: (state) => {
      state.loading = true;
    },
    handleError: (state, actions) => {
      state.error = actions.payload;
    },
    authenticUser: (state, actions) => {
      state.loggedInUser = actions.payload;
      state.error = false;
    },
  },
});

export const { authenticUser, handleError, handleLoading } = userSlice.actions;

export default userSlice.reducer;
