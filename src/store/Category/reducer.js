import {
  GET_CATEGORIES,
  LOADING,
  ERROR,
  REMOVE_CATEGORY,
  ADD_CATEGORY,
  EDIT_CATEGORY
} from "./constant";

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
    case REMOVE_CATEGORY: {
      const nextState = state.categories.filter((item) => item.id !== payload);
      return { ...state, categories: nextState };
    }
    case ADD_CATEGORY:
      return { ...state, categories: [...state.categories, payload] };
    case EDIT_CATEGORY: {
      const newCategory = state.categories.map((item) => {
        if (item.id === payload.id) {
          return { ...item, payload };
        }
        return item;
      });
      return { ...state, categories: newCategory };
    }
    default:
      return state;
  }
};
export default reducer;
