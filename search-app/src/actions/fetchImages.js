import { FETCH_IMAGES_ON_SEARCH, FETCH_IMAGES_ON_SCROLL } from "./actionTypes";
import { updateScrollLoads } from "./updateScrollLoads";
import unsplash from "../api/unsplash";

export const fetchImages = () => async (dispatch, getState) => {
  const response = await unsplash.get("/search/photos", {
    params: {
      query: getState().query,
      per_page: getState().perLoad,
      page: getState().scrollLoads + 1
    }
  });
  await dispatch(updateScrollLoads());
  dispatch({
    type: !getState().scrollLoads
      ? FETCH_IMAGES_ON_SEARCH
      : FETCH_IMAGES_ON_SCROLL,
    payload: response
  });
};
