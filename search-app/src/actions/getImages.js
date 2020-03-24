import unsplash from "../api/unsplash";

export const getImages = () => async (dispatch, getState) => 
  await unsplash.get("/search/photos", {
    params: {
      query: getState().query || getState().searchTerm,
      per_page: getState().perLoad,
      page: getState().scrollLoads + 1
    }
  }
);