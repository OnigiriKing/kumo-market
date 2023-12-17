import * as actions from "./actionTypes"

export const addInCart = (id, product, amount) => {
  return {
    type: actions.ADD_TO_CART,
    payload: { id, product, amount },
  };
};

export const changeItemAmount = (type, key) => {
  return {
    type: actions.CHANGE_ITEM_AMOUNT,
    payload: { type, key },
  };
};

export const deleteFromCart = (key) => {
  return {
    type: actions.DELETE_FROM_CART,
    payload: { key },
  };
};

export const setCategory = (category) => {
  return {
    type: actions.SET_CATEGORY,
    payload: { category },
  };
};

