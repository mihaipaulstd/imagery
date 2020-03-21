import { OPEN_MODAL } from "./actionTypes";
import { setModalImage } from "./setModalImage";

export const openModal = image => async (dispatch, getState) => {
  await dispatch(setModalImage(image));
  dispatch({
    type: OPEN_MODAL,
    payload: getState().modalImage
  });
};
