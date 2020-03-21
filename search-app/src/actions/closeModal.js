import { CLOSE_MODAL } from "./actionTypes";

export const closeModal = image => ({
  type: CLOSE_MODAL,
  payload: image
});
