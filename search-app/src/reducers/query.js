import { SET_QUERY } from "../actions/actionTypes";

export const queryReducer = (query = "", action) => {
  switch (action.type) {
    case SET_QUERY:
      console.log(action.payload);
      return action.payload;
    default:
      return query;
  }
};
