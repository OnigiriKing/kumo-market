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

// export default function cartItemsReducer(state = initialState, action) {
//   let newState = state;
//   switch (action.type) {
//     case actions.ADD_TO_CART: {
//       const { id, product, amount } = action.payload;
//       const itemId = `product${id}`;

//       if (state[itemId] && state[itemId].amount <= 10) {
//         const newAmount =
//           state[itemId].amount + amount > 10
//             ? 10
//             : state[itemId].amount + amount;
//         newState= {
//           ...state,
//           [itemId]: { ...state[itemId], amount: newAmount },
//         };
//       } else {

//         newState = {
//           ...state,
//           [itemId]: {
//             img: product.img,
//             name: product.name,
//             price: product.price,
//             amount: amount,
//           },
//         };

//       }
//       break;
//     }

//     case actions.CHANGE_ITEM_AMOUNT: {
//       const { type, key } = action.payload;
//       let newAmount = state[key].amount;

//       if (type === "plus" && newAmount < 10) {
//         newAmount++;
//       } else if (type === "minus" && newAmount > 1) {
//         newAmount--;
//       }

//       newState = {
//         ...state,
//         [key]: {
//           ...state[key],
//           amount: newAmount,
//         },
//       };

//       break;

//     }

//     case actions.DELETE_FROM_CART: {
//       const { key } = action.payload;
//       const { [key]: deletedItem, ...updateState } = state;

//       newState = updateState;
//       break;
//     }

//     default:
//       break;
//   }

//   try {
//     localStorage.setItem("cartItems", JSON.stringify(newState));
//   } catch (e) {
//     console.error("Failed to save state to local storage:", e);
//   }
//   return newState;
// }

export const { addToCart, changeItemAmount, deleteFromCart } =
  cartItemsSlice.actions;

export default cartItemsSlice.reducer;
