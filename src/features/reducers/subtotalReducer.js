import * as actions from "../actionTypes";

const initialState = 0;

export default function subtotalReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_SUBTOTAL: {
      const { items } = action.payload;
      let result = 0;
      Object.keys(items).forEach((key) => {
        const el = items[key];
        result += el.price * el.amount;
      });
      return result;
    }
    default:
      return state;
  }
}
