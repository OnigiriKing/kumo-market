import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./reducers/cartItemsReducer";

import itemAmountSlice from "./reducers/itemAmountSlice";
import imgTypeSlice from "./reducers/imgTypeSlice";
import subtotalSlice from "./reducers/subtotalSlice";
import linkSlice from "./reducers/linkSlice";
import cartCountSlice from "./reducers/cartCountSlice";
import categorySlice from "./reducers/categorySlice";

const store = configureStore({
  reducer: {
    cartCount: cartCountSlice,
    category: categorySlice,
    cartItems: cartItemsReducer,
    subtotal: subtotalSlice,
    itemAmount: itemAmountSlice,
    link: linkSlice,
    imgType: imgTypeSlice,
  },
});

export default store;
