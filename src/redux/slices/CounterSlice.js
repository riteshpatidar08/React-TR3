import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      return { count: state.count + 1 };
    },
    decrement: (state, action) => {
      return { count: state.count - 1 };
    },
  },
});

//export reducer property from counterslice
export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
