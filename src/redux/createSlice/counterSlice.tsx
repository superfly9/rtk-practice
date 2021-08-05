import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    //여기에서 설정한 key값이 actions.type이 된다
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

// selector function도 createSlice있는 곳에서 정의 후, 사용하는 곳마다 import해옴
export const selectCount = (state: any) => state.counter.value;

export default slice.reducer;

// Creating a slice requires
// 1. a string name to identify the slice, (타입 이름)
// 2. an initial state value (초기 상태값)
// 3. one or more reducer functions to define how the state can be updated.  (액션 발생시 처리할 리듀서 - 로직)
// Once a slice is created, we can export the generated Redux action creators and the reducer function
// for the whole slice.

// reducer에 정의한 게 action.type이 된다
