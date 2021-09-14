import {
  ADD_COMMENT,
  EDIT_APPROVAL,
  GET_COMMENT,
  REMOVE_COMMENT
} from "./constant";

const initialState = {
  comment: []
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COMMENT:
      return {
        comment: [...state.comment, payload]
      };
    case GET_COMMENT:
      return { ...state, comment: payload };
    case REMOVE_COMMENT: {
      const nextState = state.comment.filter((item) => item.id !== payload);
      return { comment: nextState };
    }
    case EDIT_APPROVAL: {
      const isApproval = state.comment.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            approval: !item.approval
          };
        }
        return item;
      });
      return { comment: isApproval };
    }
    default:
      return state;
  }
};
export default reducer;
