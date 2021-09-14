import CommentApi from "../../apis/CommentApi";
import {
  ADD_COMMENT,
  EDIT_APPROVAL,
  GET_COMMENT,
  REMOVE_COMMENT
} from "./constant";

const addComment = (item) => async (dispatch) => {
  try {
    const { data } = await CommentApi.add(item);
    dispatch({ type: ADD_COMMENT, payload: data });
  } catch (error) {
    return error;
  }
};
const getComment = () => async (dispatch) => {
  try {
    const { data } = await CommentApi.getAll();
    dispatch({ type: GET_COMMENT, payload: data });
  } catch (error) {
    return error;
  }
};
const removeComment = (id) => async (dispatch) => {
  try {
    await CommentApi.remove(id);
    dispatch({ type: REMOVE_COMMENT, payload: id });
  } catch (error) {
    return error;
  }
};
const editApproval = (item) => async (dispatch) => {
  try {
    const newItem = { ...item, approval: !item.approval };
    const { data } = await CommentApi.update(item.id, newItem);
    dispatch({ type: EDIT_APPROVAL, payload: data });
  } catch (error) {
    return error;
  }
};
export { addComment, getComment, removeComment, editApproval };
