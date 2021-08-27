import { GET_CATEGORIES, ERROR, LOADING } from "./constant";
import CategoriesApi from "../../apis/CategoriesApi";

const getCategories = () => async (dispatch) => {
  dispatch({ type: LOADING, payload: "" });
  try {
    const { data } = await CategoriesApi.getAll();
    // console.log(data);
    dispatch({ type: GET_CATEGORIES, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
export { getCategories };
