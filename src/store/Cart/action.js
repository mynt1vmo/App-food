import {
  ADD_TO_CART,
  REMOVE_CART,
  REMOVE_TO_CART,
  UPDATE_QUANTITY
} from "./constant";

function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item
  };
}

function updateQuantity(value) {
  return {
    type: UPDATE_QUANTITY,
    payload: value
  };
}

function removeItemcart(id) {
  return {
    type: REMOVE_TO_CART,
    payload: id
  };
}

function removeCart() {
  return {
    type: REMOVE_CART
  };
}

export { addToCart, updateQuantity, removeItemcart, removeCart };
