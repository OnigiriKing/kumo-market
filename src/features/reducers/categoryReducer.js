import * as actions from "../actionTypes";

const initialState = "all";

export default function categoryReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case actions.SET_CATEGORY: {
      const { category } = action.payload;
      return category;
    }

    default:
      return state;
  }
}
