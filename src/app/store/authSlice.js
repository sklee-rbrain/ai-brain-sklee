import { createSlice } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";

const initialState = {
  username: null,
  password: null,
  company: null,
  token: null,
};

/**
 * @title 유저 전용 redux
 */
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // 로그인 입력 정보
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.company = action.payload.company;
    },
    unSetUser: () => {
      storageSession.removeItem();
      window.location.reload();
    },
    setToken: (state, action) => {
      // 토큰
      state.token = action.payload.token;
    },
  },
});

export const authPersistConfig = {
  key: "auth",
  storage: storageSession,
};
export const { setUser, unSetUser, setToken } = authSlice.actions;
