import { configureStore } from "@reduxjs/toolkit";
import cartCountReducer from "./reducers/cartCountReducer";
import categoryReducer from "./reducers/categoryReducer";
import cartItemsReducer from "./reducers/cartItemsReducer";
import subtotalReducer from "./reducers/subtotalReducer";
import amountReducer from "./reducers/amountReducer";
import linkReducer from "./reducers/linkReducer";
import imgTypeReducer from "./reducers/imgTypeReducer";

const store = configureStore({
  reducer: {
    cartCount: cartCountReducer,
    category: categoryReducer,
    cartItems: cartItemsReducer,
    subtotal: subtotalReducer,
    amount: amountReducer,
    link: linkReducer,
    imgType: imgTypeReducer,
  },
});

export default store;
