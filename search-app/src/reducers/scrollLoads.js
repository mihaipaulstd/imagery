import { UPDATE_SCROLL_LOADS } from "../actions/actionTypes";

export const scrollLoadsReducer = (loads = 0, action) => {
  switch (action.type) {
    case UPDATE_SCROLL_LOADS:
      return action.payload;
    default:
      return loads;
  }
};
