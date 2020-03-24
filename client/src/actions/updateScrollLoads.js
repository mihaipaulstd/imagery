import { UPDATE_SCROLL_LOADS } from "./actionTypes";
// debugger
export const updateScrollLoads = (loads = 0) => ({
  type: UPDATE_SCROLL_LOADS,
  payload: loads
});
