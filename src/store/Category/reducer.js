import { GET_CATEGORIES, LOADING, ERROR } from "./constant";

const initialState = {
  categories: []
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return { ...state };
    case GET_CATEGORIES:
      return { ...state, categories: payload };
    case ERROR:
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
