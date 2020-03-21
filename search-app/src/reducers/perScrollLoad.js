import { SET_IMAGES_NO_PER_SCROLL_LOAD } from '../actions/actionTypes';

export const perScrollLoadReducer = (per_load = 20, action) => {
  switch (action.type) {
    case SET_IMAGES_NO_PER_SCROLL_LOAD:
      return action.payload.per_load;
    default:
      return per_load;
  }
}