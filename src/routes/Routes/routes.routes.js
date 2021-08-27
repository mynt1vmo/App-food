import {
  PATH_HOME,
  PATH_ABOUT,
  PATH_UPDATE_PRODUCT,
  PATH_UPDATE_CATEGORY,
  PATH_SEARCH,
  PATH_PRODUCT_DETAIL,
  PATH_NOT_FOUND,
  PATH_MENU,
  PATH_CART,
  PATH_CONTACT,
  PATH_SERVICE,
  PATH_DASHBROAD_PRODUCT,
  PATH_ADD_PRODUCT,
  PATH_DASHBROAD_CATEGORY,
  PATH_ADD_CATEGORY,
  PATH_DASHBROAD_ORDER,
  PATH_PRODUCT_CATEGORY,
  PATH_BLOG
} from "./routes.path";
import Home from "../../pages/Website/Home";
import About from "../../pages/Website/About";
import Concat from "../../pages/Website/Contact";
import Service from "../../pages/Website/Service";
import ProductDetail from "../../pages/Website/ProductDetail";
import Menu from "../../pages/Website/Menu";
import Cart from "../../pages/Website/Cart";
import Search from "../../pages/Website/Search";
import DashboardCategories from "../../pages/Dashboard/Categories/dashboardCategories";
import AddCategories from "../../pages/Dashboard/Categories/addCategories";
import UpdateCategories from "../../pages/Dashboard/Categories/updateCategories";
import DashboardProducts from "../../pages/Dashboard/Product/dashboardProducts";
import AddProduct from "../../pages/Dashboard/Product/addProduct";
import UpdateProduct from "../../pages/Dashboard/Product/updateProduct";
import DashbroadOrder from "../../pages/Dashboard/Order/dashboardOrder";
import ProductCategories from "../../pages/Website/Menu/List/ProductCategories";
import NotFound from "../../pages/NotFound";
import Blog from "../../pages/Website/Blog";

const websiteRoutes = [
  {
    exact: true,
    path: PATH_HOME,
    component: Home
  },
  {
    exact: true,
    path: PATH_ABOUT,
    component: About
  },
  {
    exact: true,
    path: PATH_CONTACT,
    component: Concat
  },
  {
    exact: true,
    path: PATH_MENU,
    component: Menu
  },
  {
    exact: true,
    path: PATH_SERVICE,
    component: Service
  },
  {
    exact: true,
    path: PATH_PRODUCT_DETAIL,
    component: ProductDetail
  },
  {
    exact: true,
    path: PATH_CART,
    component: Cart
  },
  {
    exact: true,
    path: PATH_SEARCH,
    component: Search
  },
  {
    exact: true,
    path: PATH_PRODUCT_CATEGORY,
    component: ProductCategories
  },
  {
    exact: true,
    path: PATH_BLOG,
    component: Blog
  }
];
const dashboardRoutes = [
  {
    exact: true,
    path: PATH_DASHBROAD_CATEGORY,
    component: DashboardCategories
  },
  {
    exact: true,
    path: PATH_ADD_CATEGORY,
    component: AddCategories
  },
  {
    exact: true,
    path: PATH_UPDATE_CATEGORY,
    component: UpdateCategories
  },
  {
    exact: true,
    path: PATH_DASHBROAD_PRODUCT,
    component: DashboardProducts
  },
  {
    exact: true,
    path: PATH_ADD_PRODUCT,
    component: AddProduct
  },
  {
    exact: true,
    path: PATH_UPDATE_PRODUCT,
    component: UpdateProduct
  },
  {
    exact: true,
    path: PATH_DASHBROAD_ORDER,
    component: DashbroadOrder
  },
  {
    exact: true,
    path: PATH_NOT_FOUND,
    component: NotFound
  }
];
export { websiteRoutes, dashboardRoutes };
