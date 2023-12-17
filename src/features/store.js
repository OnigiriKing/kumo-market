import { configureStore } from "@reduxjs/toolkit";
import cartCountReducer from "./reducers/cartCountReducer";
import categoryReducer from "./reducers/categoryReducer";
import cartItemsReducer from "./reducers/cartItemsReducer";
import subtotalReducer from "./reducers/subtotalReducer";
import linkReducer from "./reducers/linkReducer";

import itemAmountSlice from "./reducers/itemAmountSlice";
import imgTypeSlice from "./reducers/imgTypeSlice";

const store = configureStore({
  reducer: {
    cartCount: cartCountReducer,
    category: categoryReducer,
    cartItems: cartItemsReducer,
    subtotal: subtotalReducer,
    itemAmount: itemAmountSlice,
    link: linkReducer,
    imgType: imgTypeSlice,
  },
});

export default store;
