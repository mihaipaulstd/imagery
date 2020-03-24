import { combineReducers } from "redux";

import { imagesReducer } from "./images";
import { queryReducer } from "./query";
import { searchTermReducer } from './searchTerm';
import { scrollLoadsReducer } from "./scrollLoads";
import { perScrollLoadReducer } from "./perScrollLoad";
import { modalReducer } from "./modal";
import { modalImageReducer } from "./modalImage";

export default combineReducers({
  images: imagesReducer,
  query: queryReducer,
  searchTerm: searchTermReducer,
  scrollLoads: scrollLoadsReducer,
  perLoad: perScrollLoadReducer,
  isModalOpen: modalReducer,
  modalImage: modalImageReducer
});
