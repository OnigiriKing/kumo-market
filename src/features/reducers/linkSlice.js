import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    setLink: (state, action) => {
      const { location } = action.payload;
      if (location.includes("product/")) {
        return location.split("/")[2];
      } else {
        return Math.floor(Math.random() * 12) + 1;
      }
    }
  }
})

export const { setLink } = linkSlice.actions;
export default linkSlice.reducer;
