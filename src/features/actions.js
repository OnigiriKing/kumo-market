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

export const setLink = (location) => {
  return {
    type: actions.SET_LINK,
    payload: { location },
  };
};

export const setCount = (items) => {
  return {
    type: actions.SET_COUNT,
    payload: { items },
  };
};

export const setCategory = (category) => {
  return {
    type: actions.SET_CATEGORY,
    payload: { category },
  };
};

