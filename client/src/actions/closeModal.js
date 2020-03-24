import { CLOSE_MODAL } from "./actionTypes";
import { setModalImage } from './setModalImage';

export const closeModal = () => async dispatch => {
  await dispatch(setModalImage(null));
  dispatch({
    type: CLOSE_MODAL
  });
};
