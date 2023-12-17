import { createSlice } from "@reduxjs/toolkit";

const savedState = JSON.parse(localStorage.getItem("cartItems"));
const initialState = savedState || {};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, product, amount } = action.payload;
      const itemId = `product${id}`;

      if (state[itemId] && state[itemId].amount <= 10) {
        const newAmount = Math.min(state[itemId].amount + amount, 10);
        state[itemId] = { ...state[itemId], amount: newAmount };
      } else {
        state[itemId] = {
          img: product.img,
          name: product.name,
          price: product.price,
          amount: amount,
        };
      }
    },
    changeItemAmount: (state, action) => {
      const { type, key } = action.payload;
      if (type === "plus" && state[key].amount < 10) {
        state[key].amount++;
      } else if (type === "minus" && state[key].amount > 1) {
        state[key].amount--;
      }
    },
    deleteFromCart: (state, action) => {
      const { key } = action.payload;
      delete state[key];
    },
  },
});

export const { addToCart, changeItemAmount, deleteFromCart } =
  cartItemsSlice.actions;

export default cartItemsSlice.reducer;
