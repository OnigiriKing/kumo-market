import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const cartCountSlice = createSlice({
  name: "cartCount",
  initialState,
  reducers: {
    setCount: (state, action) => {
      const { items } = action.payload;
      return Object.values(items).reduce((sum, el) => sum + el.amount, 0);
    },
  },
});

export const { setCount } = cartCountSlice.actions;
export default cartCountSlice.reducer;
