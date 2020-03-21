import { FETCH_IMAGES_ON_SEARCH, FETCH_IMAGES_ON_SCROLL } from '../actions/actionTypes';
// debugger;

export const imagesReducer = (images = [], action) => {
  switch (action.type) {
    case FETCH_IMAGES_ON_SEARCH:
      console.log(action.payload);
      return action.payload.data.photos;
    case FETCH_IMAGES_ON_SCROLL:
      console.log(action.payload);
      return [...images, ...action.payload.data.photos]
    default:
      return images;
  }
}