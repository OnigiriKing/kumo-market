import * as actions from "../actionTypes";

const savedState = JSON.parse(localStorage.getItem("cartItems"));
const initialState = savedState || {};

export default function cartItemsReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case actions.ADD_TO_CART: {
      const { id, product, amount } = action.payload;
      const itemId = `product${id}`;

      if (state[itemId] && state[itemId].amount <= 10) {
        const newAmount =
          state[itemId].amount + amount > 10
            ? 10
            : state[itemId].amount + amount;
        newState= {
          ...state,
          [itemId]: { ...state[itemId], amount: newAmount },
        };
      } else {

        newState = {
          ...state,
          [itemId]: {
            img: product.img,
            name: product.name,
            price: product.price,
            amount: amount,
          },
        };
        

      }
      break;
    }

    case actions.CHANGE_ITEM_AMOUNT: {
      const { type, key } = action.payload;
      let newAmount = state[key].amount;

      if (type === "plus" && newAmount < 10) {
        newAmount++;
      } else if (type === "minus" && newAmount > 1) {
        newAmount--;
      }

      newState = {
        ...state,
        [key]: {
          ...state[key],
          amount: newAmount,
        },
      };

      break;
    


    }

    case actions.DELETE_FROM_CART: {
      const { key } = action.payload;
      const { [key]: deletedItem, ...updateState } = state;

      newState = updateState;
      break;
    }

    default:
      break;
  }

  try {
    localStorage.setItem("cartItems", JSON.stringify(newState));
  } catch (e) {
    console.error("Failed to save state to local storage:", e);
  }
  return newState;
}
