import * as actions from "./actionTypes"

export const addInCart = (id, product, amount) => {
  return {
    type: actions.ADD_TO_CART,
    payload: { id, product, amount },
  };
};

export const changeAmount = (type) => {
  return {
    type: actions.CHANGE_AMOUNT,
    payload: { type },
  };
};

export const changeImage = (img) => {
  return {
    type: actions.CHANGE_IMAGE,
    payload: { img },
  };
};

export const changeSubtotal = (items) => {
  return {
    type: actions.CHANGE_SUBTOTAL,
    payload: { items },
  };
};

