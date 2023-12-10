import * as actions from "../actionTypes";

const initialState = 1;

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_AMOUNT: {
        const { type } = action.payload;
        return type === "add" && state < 10
          ? state + 1
          : type === "sub" && state > 1
          ? state - 1
          : state;
    }
    default:
      return state;
  }
}
