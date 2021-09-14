import {
  ADD_USER,
  EDIT_USER,
  ERROR,
  GET_USER,
  LOADING,
  REMOVE_USER
} from "./constant";

const initialState = {
  users: []
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return { ...state };
    case ADD_USER:
      return { ...state, users: [...state.users, payload] };
    case GET_USER:
      return { ...state, users: payload };
    case EDIT_USER: {
      const nextState = state.users.map((item) => {
        if (item.id === payload.id) {
          return { ...item, payload };
        }
        return item;
      });
      return { users: nextState };
    }
    case REMOVE_USER: {
      const nextState = state.users.filter((item) => item.id !== payload);
      return { users: nextState };
    }
    case ERROR:
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
