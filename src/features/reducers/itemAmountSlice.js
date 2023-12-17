
import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const itemAmountSlice = createSlice({
  name: "itemAmount",
  initialState,
  reducers: {
    changeAmount: (state, action) => {
      const { type } = action.payload;
      if (type === "add" && state < 10) {
        return state + 1;
      } else if (type === "sub" && state > 1) {
        return state - 1;
      }
      return state;
    },
  },
});


export const { changeAmount } = itemAmountSlice.actions;
export default itemAmountSlice.reducer;
