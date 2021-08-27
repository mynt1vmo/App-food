import "./App.css";
import { Provider } from "react-redux";
import Routes from "./routes";
import { store } from "./store";
import { getProducts } from "./store/Product/action";
import { getCategories } from "./store/Category/action";
import { getServices } from "./store/Service/action";
import { getBlogs } from "./store/Blog/action";

store.dispatch(getProducts());
store.dispatch(getCategories());
store.dispatch(getServices());
store.dispatch(getBlogs());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
