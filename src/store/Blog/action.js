import BlogApi from "../../apis/BlogApi";
import { ERRPR, GET_BLOGS, LOADING } from "./constant";

const getBlogs = () => async (dispatch) => {
  dispatch({ type: LOADING, payload: "" });
  try {
    const { data } = await BlogApi.getAll();
    dispatch({ type: GET_BLOGS, payload: data });
  } catch (error) {
    dispatch({ type: ERRPR, payload: error });
  }
};
export { getBlogs };
