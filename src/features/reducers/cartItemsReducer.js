import * as actions from "../actionTypes";

const initialState = {};

export default function cartItemsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART: {
      const { id, product, amount } = action.payload;
      const itemId = `product${id}`;

      if (state[itemId] && state[itemId].amount <= 10) {
        const newAmount =
          state[itemId].amount + amount > 10
            ? 10
            : state[itemId].amount + amount;
        return {
          ...state,
          [itemId]: { ...state[itemId], amount: newAmount },
        };
      } else {
        return {
          ...state,
          [itemId]: {
            img: product.img,
            name: product.name,
            price: product.price,
            amount: amount,
          },
        };
      }
    }

    case actions.DELETE_FROM_CART: {
      const { name } = action.payload;
      return state.filter((item) => item.name != name);
    }

    default:
      return state;
  }
}


