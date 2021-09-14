import { HIDDEN, SHOW } from "./constant";

const intitialState = {
  spinning: false
};
const reducer = (state = intitialState, action) => {
  const { type } = action;
  switch (type) {
    case SHOW:
      return { spinning: true };
    case HIDDEN:
      return { spinning: false };
    default:
      return state;
  }
};
export default reducer;
