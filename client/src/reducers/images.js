import {
  GET_IMAGES_ON_SEARCH,
  GET_IMAGES_ON_SCROLL
} from "../actions/actionTypes";

export const imagesReducer = (images = [], action) => {
  switch (action.type) {
    case GET_IMAGES_ON_SEARCH:
      return action.payload.data.results;
    case GET_IMAGES_ON_SCROLL:
      return [...images, ...action.payload.data.results];
    default:
      return images;
  }
};
