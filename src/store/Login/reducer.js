import { localUser } from "../../localStorage";
import { LOGOUT, SIGNIN } from "./constant";

const user = localUser.get();
const initialState = user;

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN: {
      const nextState = { payload };
      localUser.set(nextState);
      return nextState;
    }
    case LOGOUT: {
      const nextState = { ...state, payload };
      localUser.remove();
      return nextState;
    }
    default:
      return state;
  }
};
export default reducer;
