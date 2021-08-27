import { GET_SERVICES, LOADING, ERROR } from "./constant";

const initialState = {
  services: []
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return state;
    case GET_SERVICES:
      return { ...state, services: payload };
    case ERROR:
      return state;
    default:
      return state;
  }
};
export default reducer;
