import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import categories from "./Category/reducer";
import services from "./Service/reducer";
import blogs from "./Blog/reducer";
import products from "./Product/reducer";
import comment from "./Comment/reducer";
import users from "./User/reducer";
import cart from "./Cart/reducer";
import spin from "./Spinning/reducer";
import orders from "./Order/reducer";
import signIn from "./Login/reducer";

export const store = createStore(
  combineReducers({
    categories,
    services,
    blogs,
    products,
    comment,
    users,
    cart,
    orders,
    spin,
    signIn
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
