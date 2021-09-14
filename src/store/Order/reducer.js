import { CHECK_OUT, EDIT_ORDER, GET_ORDERS } from "./constant";

const initialState = {
  orders: []
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHECK_OUT:
      return { ...state, orders: [...state.orders, payload] };
    case GET_ORDERS:
      return { ...state, orders: payload };
    case EDIT_ORDER: {
      const newOrder = state.orders.map((item) => {
        if (item.id === payload.id) {
          return { ...item, payload };
        }
        return item;
      });
      return { orders: newOrder };
    }
    default:
      return state;
  }
};
export default reducer;
