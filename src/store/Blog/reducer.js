import { GET_BLOGS } from "./constant";

const initialState = {
  blogs: []
};
const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_BLOGS:
      return { ...state, blogs: payload };
    default:
      return state;
  }
};
export default reducer;
