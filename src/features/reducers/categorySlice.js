import { createSlice } from "@reduxjs/toolkit";

const initialState = "all";

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      const { category } = action.payload;
      return category;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
