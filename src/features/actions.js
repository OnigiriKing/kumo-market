import * as types from "./actionTypes"

export const addInCart = (id, product, amount) => {
  return {
    type: types.ADD_TO_CART,
    payload: { id, product, amount },
  };
};

export const changeAmount = (type) => {
  return {
    type: types.CHANGE_AMOUNT,
    payload: { type },
  };
};
