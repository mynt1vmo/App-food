import OrderApi from "../../apis/OrderApi";
import { CHECK_OUT, EDIT_ORDER, GET_ORDERS } from "./constant";

const checkOut = (item) => async (dispatch) => {
  try {
    const { data } = await OrderApi.add(item);
    dispatch({ type: CHECK_OUT, payload: data });
  } catch (error) {
    return error;
  }
};
const getOrders = () => async (dispatch) => {
  try {
    const { data } = await OrderApi.getAll();
    dispatch({ type: GET_ORDERS, payload: data });
  } catch (error) {
    return error;
  }
};
const editOrder = (item) => async (dispatch) => {
  try {
    const { data } = await OrderApi.edit(item.id, item);
    dispatch({ type: EDIT_ORDER, payload: data });
  } catch (error) {
    return error;
  }
};
export { checkOut, getOrders, editOrder };
