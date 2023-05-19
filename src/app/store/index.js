import { configureStore } from "@reduxjs/toolkit";
import { authPersistConfig, authSlice } from "../store/authSlice";
import { etcPersistConfig, etcSlice } from "../store/etcSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    authSlice: persistReducer(authPersistConfig, authSlice.reducer),
    etcSlice: persistReducer(etcPersistConfig, etcSlice.reducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
