import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  REMOVE_PRODUCT
} from "./constant";

const initialState = {
  products: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS: {
      return { ...state, products: payload };
    }

    case REMOVE_PRODUCT: {
      const nextState = state.products.filter((item) => item.id !== payload);
      return { products: nextState };
    }
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, payload] };

    case EDIT_PRODUCT: {
      const newProduct = state.products.map((item) => {
        if (item.id === payload.id) {
          return { ...item, payload };
        }
        return item;
      });
      return { products: newProduct };
    }
    default:
      return state;
  }
};
export default reducer;
