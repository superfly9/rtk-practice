import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Creating a slice requires
// 1. a string name to identify the slice, (타입 이름)
// 2. an initial state value (초기 상태값)
// 3. one or more reducer functions to define how the state can be updated.  (액션 발생시 처리할 리듀서 - 로직)
// Once a slice is created, we can export the generated Redux action creators and the reducer function
// for the whole slice.

// Redux requires that we write all state updates immutably, by making copies of data and updating the copies.
// Toolkit's createSlice and createReducer APIs use Immer inside  ( createSlice / createReducer => immer를 내부적으로 사용)
// to allow us to write "mutating" update logic that becomes correct immutable updates.

export interface CounterState {
  value: number;
  name: string;
}

const initialState: CounterState = {
  value: 0,
  name: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //여기에서 설정한 key값이 actions.type이 된다
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    seoul: (state) => {
      state.name = "Seoul";
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// reducer에 정의한 게 action.type이 된다

export default counterSlice;
