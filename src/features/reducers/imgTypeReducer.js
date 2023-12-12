import * as actions from "../actionTypes";

const initialState = "";

export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_IMAGE: {
      const { img } = action.payload;
      return img
    }
    default:
      return state;
  }
}
