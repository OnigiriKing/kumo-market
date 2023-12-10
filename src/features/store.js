import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
// import caregoryReducer from "./reducers/caregoryReducer";
// import itemsReducer from "./reducers/itemsReducer";
// import subtotalReducer from "./reducers/subtotalReducer";
import amountReducer from "./reducers/amountReducer";
// import linkReducer from "./reducers/linkReducer";
// import imgTypeReducer from "./reducers/imgTypeReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // category: caregoryReducer,
    // items: itemsReducer,
    // subtotal: subtotalReducer,
    amount: amountReducer,
    // link: linkReducer,
    // imgType: imgTypeReducer,
  },
});

export default store;
