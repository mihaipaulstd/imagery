import { SET_QUERY } from "../actions/actionTypes";

export const queryReducer = (query = "", action) => {
  switch (action.type) {
    case SET_QUERY:
      return action.payload;
    default:
      return query;
  }
};
