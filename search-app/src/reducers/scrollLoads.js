import { SET_SCROLL_LOADS } from '../actions/actionTypes';

export const scrollLoadsReducer = (loads = 0, action) => {
  switch (action.type) {
    case SET_SCROLL_LOADS:
      return loads + 1
    default:
      return loads;
  }
}