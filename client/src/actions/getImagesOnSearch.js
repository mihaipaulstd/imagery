import { GET_IMAGES_ON_SEARCH } from "./actionTypes";
import { getImages } from './getImages';
import { updateScrollLoads } from './updateScrollLoads';
import { setSearchTerm } from "./setSearchTerm";
import { setQuery } from './setQuery';

export const getImagesOnSearch = () => async (dispatch, getState) => {
  const response = await dispatch(getImages());
  await dispatch(updateScrollLoads(1));
  await dispatch(setSearchTerm(getState().query));
  await dispatch(setQuery(""));
  dispatch({
    type: GET_IMAGES_ON_SEARCH,
    payload: response
  });
};