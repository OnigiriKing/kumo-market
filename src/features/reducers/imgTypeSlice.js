import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const imageTypeSlice = createSlice({
  name: "imageType",
  initialState,
  reducers: {
    changeImage: (state, action) => {
      const {img} = action.payload;
      return img
    }
  }
});


export const { changeImage } = imageTypeSlice.actions;
export default imageTypeSlice.reducer;