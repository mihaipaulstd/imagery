import { SET_MODAL_IMAGE } from '../actions/actionTypes';

export const modalImageReducer = (image = null, action) => {
  switch (action.type) {
    case SET_MODAL_IMAGE:
      return action.payload;
    default:
      return image;
    }
}