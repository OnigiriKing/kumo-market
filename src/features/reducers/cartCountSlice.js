import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const cartCountSlice = createSlice({
  name: "cartCount",
  initialState,
  reducers: {
    setCount: (state, action) => {
      const { items } = action.payload;
      let count = 0;
      Object.keys(items).forEach((key) => {
        const el = items[key];
        count += el.amount;
      });
      return count;
    },
  },
});

export const { setCount } = cartCountSlice.actions;
export default cartCountSlice.reducer;
