import { combineReducers } from "redux";

import { imagesReducer } from "./images";
import { queryReducer } from "./query";
import { scrollLoadsReducer } from "./scrollLoads";
import { perScrollLoadReducer } from "./perScrollLoad";
import { modalReducer } from "./modal";
import { modalImageReducer } from "./modalImage";

export default combineReducers({
  images: imagesReducer,
  query: queryReducer,
  scrollLoads: scrollLoadsReducer,
  perLoad: perScrollLoadReducer,
  isModalOpen: modalReducer,
  modalImage: modalImageReducer
});
