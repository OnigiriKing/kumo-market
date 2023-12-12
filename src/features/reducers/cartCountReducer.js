import * as actions from "../actionTypes";

const initialState = 0;


export default function cartCountReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_COUNT: {
      const { items } = action.payload;
      let count = 0;
      Object.keys(items).forEach((key) => {
        const el = items[key];
        count += el.amount;
      });
      return count;
    }

    default:
      return state;
  }
}


