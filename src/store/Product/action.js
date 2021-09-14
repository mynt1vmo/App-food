import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  REMOVE_PRODUCT
} from "./constant";
import ProductApi from "../../apis/ProductsApi";

const getProducts = () => async (dispatch) => {
  try {
    const { data } = await ProductApi.getAll();
    dispatch({ type: GET_PRODUCTS, payload: data });
  } catch (error) {
    return error;
  }
};
const removeProduct = (id) => async (dispatch) => {
  try {
    await ProductApi.remove(id);
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  } catch (error) {
    return error;
  }
};
const editProduct = (item) => async (dispatch) => {
  try {
    const { data } = await ProductApi.update(item.id, item);
    dispatch({ type: EDIT_PRODUCT, payload: data });
  } catch (error) {
    return error;
  }
};
const addProduct = (item) => async (dispatch) => {
  try {
    const { data } = await ProductApi.add(item);
    dispatch({ type: ADD_PRODUCT, payload: data });
  } catch (error) {
    return error;
  }
};
export { getProducts, removeProduct, editProduct, addProduct };
