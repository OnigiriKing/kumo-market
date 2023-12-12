import * as actions from "../actionTypes";

const initialState = 1;

export default function subtotalReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_LINK: {
      const { location } = action.payload;
      if (location.includes("product/")) {
        return location.split("/")[2];
      } else {
        return Math.floor(Math.random() * 12) + 1;
      }
    }
    default:
      return state;
  }
}
