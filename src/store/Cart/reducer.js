import { localStore } from "../../localStorage";
import {
  ADD_TO_CART,
  REMOVE_CART,
  REMOVE_TO_CART,
  UPDATE_QUANTITY
} from "./constant";

const cart = localStore.get();

const initialState = cart;

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART: {
      const isExist = state[payload.id];

      if (isExist) {
        const nextState = {
          ...state,
          [payload.id]: {
            ...payload,
            quantity: state[payload.id].quantity + payload.quantity
          }
        };
        localStore.set(nextState);
        return nextState;
      }
      const nextState = {
        ...state,
        [payload.id]: {
          ...payload,
          quantity: 1
        }
      };
      localStore.set(nextState);
      return nextState;
    }
    case UPDATE_QUANTITY: {
      const isQuantity = state[payload.id];
      if (isQuantity) {
        const nextQuantity = {
          ...state,
          [payload.id]: {
            ...payload,
            quantity: payload.quantity
          }
        };
        localStore.set(nextQuantity);
        return nextQuantity;
      }
      const nextQuantity = {
        ...state,
        [payload.id]: payload
      };
      localStore.set(nextQuantity);
      return nextQuantity;
    }
    case REMOVE_TO_CART: {
      const newArr = Object.values({ ...state });
      const removeItem = newArr.filter(
        (item) => Number(item.id) !== Number(payload)
      );
      localStore.set({ ...removeItem });
      return { ...removeItem };
    }
    case REMOVE_CART: {
      localStore.set({});
      return {};
    }

    default:
      return state;
  }
};
export default reducer;
