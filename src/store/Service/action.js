import ServicesApi from "../../apis/ServicesApi";
import { GET_SERVICES, LOADING, ERROR } from "./constant";

const getServices = () => async (dispatch) => {
  dispatch({ type: LOADING, payload: "" });
  try {
    const { data } = await ServicesApi.getAll();
    dispatch({ type: GET_SERVICES, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: "" });
  }
};
export { getServices };
