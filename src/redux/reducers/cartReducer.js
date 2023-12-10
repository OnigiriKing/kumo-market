import * as actions from "../actionTypes";

export default function authorReducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_: {
      const { name, dob } = action.payload;
      return [...state, { name, dob }];
    }
    case actions.DELETE_: {
      const { name } = action.payload;
      return state.filter((author) => author.name != name);
    }
    default:
      return state;
  }
}
