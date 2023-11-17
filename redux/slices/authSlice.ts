import { getCookie, removeCookie, setCookie } from "@/utils/common";
import { IUser } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    access_token: getCookie("access_token") || null,
    isLoading: false,
    error: null,
    currentUser: null as IUser | null,
  },
  reducers: {
    userLoginPending: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    userLoginFulfill: (state, action) => {
      state.isLoading = false;
      state.access_token = action.payload;
    },
    userLoginReject: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    userLogout: (state) => {
      removeCookie("access_token");
      removeCookie("refresh_token");

      state.access_token = null;
      state.isLoading = false;
      state.error = null;
    },
    removeError: (state) => {
      state.error = null;
    },
    setCurrentUserLogin: (
      state,
      action: { type: string; payload: { access_token: string; user: IUser } }
    ) => {
      state.access_token = action.payload.access_token;
      state.currentUser = action.payload.user;
      setCookie("access_token", action.payload.access_token);
    },
    setToken: (state, action) => {
      state.access_token = action.payload;
    },
    currentUserLogOut: (state) => {
      removeCookie("access_token");

      state.currentUser = null;
      state.access_token = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  userLoginPending,
  userLoginFulfill,
  userLoginReject,
  userLogout,
  removeError,
  setToken,
  currentUserLogOut,
  setCurrentUserLogin,
} = authSlice.actions;
export default authSlice.reducer;
