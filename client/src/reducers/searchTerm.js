import { SET_SEARCH_TERM } from "../actions/actionTypes";

export const searchTermReducer = (query = "", action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return query;
  }
};
