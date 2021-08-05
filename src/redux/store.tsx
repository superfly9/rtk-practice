import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// 1 스토어 생성 + dev tool도 자동으로 설정됨
// This creates a Redux store, and also automatically configure
// the Redux DevTools extension so that you can inspect the store while developing.
