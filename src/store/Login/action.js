import { LOGOUT, SIGNIN } from "./constant";

function signIn(item) {
  return {
    type: SIGNIN,
    payload: item
  };
}
function logOut() {
  return {
    type: LOGOUT,
    payload: ""
  };
}
export { signIn, logOut };
