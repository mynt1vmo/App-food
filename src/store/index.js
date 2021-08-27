import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import categories from "./Category/reducer";
import services from "./Service/reducer";
import blogs from "./Blog/reducer";
import products from "./Product/reducer";

export const store = createStore(
  combineReducers({
    categories,
    services,
    blogs,
    products
  }),
  applyMiddleware(thunk)
);
