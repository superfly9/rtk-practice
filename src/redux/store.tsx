import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/createSlice/counterSlice";

// 1. store 생성 - reducer - state를 연결짓는다 => App.tsx에 store를 넣어줘야 사용
// 2. reducer생성
const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// 1 스토어 생성 + dev tool도 자동으로 설정됨
// This creates a Redux store, and also automatically configure
// the Redux DevTools extension so that you can inspect the store while developing.

console.log("counterSlice:", counterSlice);
// actions:
// decrement: ƒ actionCreator()
// increment: ƒ actionCreator()
// incrementByAmount: ƒ actionCreator()
// seoul: ƒ actionCreator()
// [[Prototype]]: Object
// caseReducers:
// decrement: state => { state.value -= 1; }
// increment: state => {…}
// incrementByAmount: (state, action) => {…}
// seoul: state => { state.name = "Seoul"; }
// [[Prototype]]: Object
// name: "counter"
