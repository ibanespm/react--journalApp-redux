import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", //not authenticated - checking - authenticated
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {},
  },
  logout: (state, action) => {},
  checking: (state) => {},
});

export const { login, logout, checking } = authSlice.actions;

export default authSlice.reducer;
