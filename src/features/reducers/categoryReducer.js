import * as actions from "../actionTypes";

// const initialState = "all";

const initialState = localStorage.getItem("categoryName")
  ? localStorage.getItem("categoryName"): "all";

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_CATEGORY: {
      localStorage.setItem("categoryName", action.payload.toString());
      const { category } = action.payload;
      localStorage.setItem("categoryName", category);
      return category;
    }

    default:
      return state;
  }
}
