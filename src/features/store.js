import { configureStore } from "@reduxjs/toolkit";
import cartCountReducer from "./reducers/cartCountReducer";
import categoryReducer from "./reducers/categoryReducer";
import cartItemsReducer from "./reducers/cartItemsReducer";

import itemAmountSlice from "./reducers/itemAmountSlice";
import imgTypeSlice from "./reducers/imgTypeSlice";
import subtotalSlice from "./reducers/subtotalSlice";
import linkSlice from "./reducers/linkSlice";

const store = configureStore({
  reducer: {
    cartCount: cartCountReducer,
    category: categoryReducer,
    cartItems: cartItemsReducer,
    subtotal: subtotalSlice,
    itemAmount: itemAmountSlice,
    link: linkSlice,
    imgType: imgTypeSlice,
  },
});

export default store;
