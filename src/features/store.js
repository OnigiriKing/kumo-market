import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categoryReducer";
import cartItemsReducer from "./reducers/cartItemsReducer";

import itemAmountSlice from "./reducers/itemAmountSlice";
import imgTypeSlice from "./reducers/imgTypeSlice";
import subtotalSlice from "./reducers/subtotalSlice";
import linkSlice from "./reducers/linkSlice";
import cartCountSlice from "./reducers/cartCountSlice";

const store = configureStore({
  reducer: {
    cartCount: cartCountSlice,
    category: categoryReducer,
    cartItems: cartItemsReducer,
    subtotal: subtotalSlice,
    itemAmount: itemAmountSlice,
    link: linkSlice,
    imgType: imgTypeSlice,
  },
});

export default store;
