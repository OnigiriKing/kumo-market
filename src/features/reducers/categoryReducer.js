import * as actions from "../actionTypes";

const initialState = "all";

// const initialState = localStorage.getItem("categoryName")
//   ? parseInt(localStorage.getItem("categoryName"), 10)
//   : "all";

export default function categoryReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case actions.SET_CATEGORY: {
      localStorage.setItem("categoryName", action.payload.toString());
      const { category } = action.payload;
      return category;
    }

    default:
      return state;
  }
}
