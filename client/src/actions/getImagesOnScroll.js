import { GET_IMAGES_ON_SCROLL } from "./actionTypes";
import { getImages } from './getImages';
import { updateScrollLoads } from "./updateScrollLoads";

export const getImagesOnScroll = () => async (dispatch, getState) => {
  const response = await dispatch(getImages());
  await dispatch({
    type: GET_IMAGES_ON_SCROLL,
    payload: response
  });
  dispatch(updateScrollLoads(getState().scrollLoads + 1));
};