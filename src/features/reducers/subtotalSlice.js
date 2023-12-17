import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const subtotalSlice = createSlice({
  name: "subtotal",
  initialState,
  reducers: {
    changeSubtotal: (state, action) => {
      const { items } = action.payload;
      let result = 0;
      Object.keys(items).forEach((key) => {
        const el = items[key];
        result += el.price * el.amount;
      });
      return result;
    },
  },
});

export const { changeSubtotal } = subtotalSlice.actions;
export default subtotalSlice.reducer;
