import {
  GET_CATEGORIES,
  ERROR,
  LOADING,
  REMOVE_CATEGORY,
  ADD_CATEGORY,
  EDIT_CATEGORY
} from "./constant";
import CategoriesApi from "../../apis/CategoriesApi";

const getCategories = () => async (dispatch) => {
  dispatch({ type: LOADING, payload: "" });
  try {
    const { data } = await CategoriesApi.getAll();
    dispatch({ type: GET_CATEGORIES, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
const removeCategory = (id) => async (dispatch) => {
  dispatch({ type: LOADING, payload: "" });
  try {
    await CategoriesApi.remove(id);
    dispatch({ type: REMOVE_CATEGORY, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
const editCategory = (item) => async (dispatch) => {
  dispatch({ type: LOADING, payload: "" });
  try {
    const { data } = await CategoriesApi.update(item.id, item);
    dispatch({ type: EDIT_CATEGORY, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
const addCategory = (item) => async (dispatch) => {
  dispatch({ type: LOADING, payload: "" });
  try {
    const { data } = await CategoriesApi.add(item);
    dispatch({ type: ADD_CATEGORY, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
export { getCategories, removeCategory, editCategory, addCategory };
