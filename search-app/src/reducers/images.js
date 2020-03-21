import {
  FETCH_IMAGES_ON_SEARCH,
  FETCH_IMAGES_ON_SCROLL
} from "../actions/actionTypes";

export const imagesReducer = (images = [], action) => {
  switch (action.type) {
    case FETCH_IMAGES_ON_SEARCH:
      console.log(action.payload);
      return action.payload.data.results;
    case FETCH_IMAGES_ON_SCROLL:
      console.log(action.payload);
      return [...images, ...action.payload.data.results];
    default:
      return images;
  }
};
