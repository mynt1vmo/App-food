import { GET_PRODUCTS } from "./constant";
import ProductApi from "../../apis/ProductsApi";

const getProducts = () => async (dispatch) => {
  try {
    const { data } = await ProductApi.getAll();
    dispatch({ type: GET_PRODUCTS, payload: data });
  } catch (error) {
    return error;
  }
};
export { getProducts };
