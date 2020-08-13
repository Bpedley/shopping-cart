import { ADD_ITEM, INCREMENT, DECREMENT, REMOVE_ITEM } from "./types";

export const addItem = id => {
  return {
    type: ADD_ITEM,
    payload: id
  };
};

export const increment = id => {
  return {
    type: INCREMENT,
    payload: id
  };
};

export const decrement = id => {
  return {
    type: DECREMENT,
    payload: id
  };
};

export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    payload: id
  };
};
