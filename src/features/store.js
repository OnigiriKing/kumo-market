import { configureStore } from "@reduxjs/toolkit";
import itemAmountSlice from "./reducers/itemAmountSlice";
import imgTypeSlice from "./reducers/imgTypeSlice";
import subtotalSlice from "./reducers/subtotalSlice";
import linkSlice from "./reducers/linkSlice";
import cartCountSlice from "./reducers/cartCountSlice";
import categorySlice from "./reducers/categorySlice";
import cartItemsSlice from "./reducers/cartItemsSlice";

const store = configureStore({
  reducer: {
    cartCount: cartCountSlice,
    category: categorySlice,
    cartItems: cartItemsSlice,
    subtotal: subtotalSlice,
    itemAmount: itemAmountSlice,
    link: linkSlice,
    imgType: imgTypeSlice,
  },
});

export default store;
