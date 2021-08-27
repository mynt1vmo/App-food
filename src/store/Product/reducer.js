import { GET_PRODUCTS } from "./constant";

const initialState = {
  products: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export default reducer;
