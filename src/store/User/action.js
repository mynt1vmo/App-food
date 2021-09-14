import UserApi from "../../apis/UserApi";
import {
  ADD_USER,
  ERROR,
  LOADING,
  REMOVE_USER,
  EDIT_USER,
  GET_USER
} from "./constant";

const addUser = (item) => async (dispatch) => {
  dispatch({ type: LOADING, payload: "" });
  try {
    const { data } = await UserApi.add(item);
    dispatch({ type: ADD_USER, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
const listUser = () => async (dispatch) => {
  dispatch({ type: LOADING, payload: "" });
  try {
    const { data } = await UserApi.getAll();
    dispatch({ type: GET_USER, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
const editUser = (item) => async (dispatch) => {
  dispatch({ type: LOADING, payload: "" });
  try {
    const { data } = await UserApi.update(item.id, item);
    dispatch({ type: EDIT_USER, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
const removeUser = (id) => async (dispatch) => {
  dispatch({ type: LOADING, payload: "" });
  try {
    await UserApi.remove(id);
    dispatch({ type: REMOVE_USER, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export { addUser, listUser, editUser, removeUser };
