import { createSlice } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";

/**
 * @title 기타 잡다한 것들 모음 redux
 * @memo 1. 게시판-검색 필터 오픈여부
 */
export const etcSlice = createSlice({
  name: "etcSlice",
  initialState: { value: true },
  reducers: {
    // 게시판-검색필터 오픈 여부 - true : 열린상태 / false : 접힌상태
    filterCollapse: (state, action) => {
      state.value = action.payload.Activate ?? true;
    },
  },
});

export const etcPersistConfig = {
  key: "etc",
  storage: storageSession,
};

export const { filterCollapse } = etcSlice.actions;
