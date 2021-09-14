import {
  PATH_HOME,
  PATH_ABOUT,
  PATH_UPDATE_PRODUCT,
  PATH_UPDATE_CATEGORY,
  PATH_SEARCH,
  PATH_PRODUCT_DETAIL,
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
  PATH_BLOG,
  PATH_SIGNIN,
  PATH_SIGNUP,
  PATH_DASHBROAD_USER,
  PATH_DASHBROAD_COMMENT,
  PATH_CHECKOUT_SUCCESS,
  PATH_ERROR_403,
  PATH_ERROR_404,
  PATH_USER_DETAIL,
  PATH_UPDATE_USER,
  PATH_ADD_USER,
  PATH_DASHBROAD_ORDERS_DETAIL,
  PATH_UPDATE_ORDER
} from "./routes.path";
import Home from "../../pages/Website/Home";
import About from "../../pages/Website/About";
import Concat from "../../pages/Website/Contact";
import Service from "../../pages/Website/Service";
import ProductDetail from "../../pages/Website/Menu/List/ProductDetail";
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
import Error404 from "../../pages/NotFound/404";
import Blog from "../../pages/Website/Blog";
import SignIn from "../../pages/Website/SignIn";
import SignUp from "../../pages/Website/SignUp";
import DashboardUser from "../../pages/Dashboard/User/dashboardUser";
import DashboardComment from "../../pages/Dashboard/Comment/dashboardComment";
import CheckOutSuccess from "../../pages/Website/Cart/CheckOutSuccess";
import Error403 from "../../pages/NotFound/403";
import DetailUser from "../../pages/Website/DetailUser";
import UpdateUser from "../../pages/Dashboard/User/updateUser";
import AddUser from "../../pages/Dashboard/User/addUser";
import DetailOrders from "../../pages/Dashboard/Order/detail";
import UpdateOrder from "../../pages/Dashboard/Order/updateOrder";

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
  },
  {
    exact: true,
    path: PATH_SIGNIN,
    component: SignIn
  },
  {
    exact: true,
    path: PATH_SIGNUP,
    component: SignUp
  },
  {
    exact: true,
    path: PATH_CHECKOUT_SUCCESS,
    component: CheckOutSuccess
  },
  {
    exact: true,
    path: PATH_ERROR_404,
    component: Error404
  },
  {
    exact: true,
    path: PATH_USER_DETAIL,
    component: DetailUser
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
    path: PATH_DASHBROAD_USER,
    component: DashboardUser
  },

  {
    exact: true,
    path: PATH_UPDATE_USER,
    component: UpdateUser
  },
  {
    exact: true,
    path: PATH_DASHBROAD_COMMENT,
    component: DashboardComment
  },
  {
    exact: true,
    path: PATH_ERROR_403,
    component: Error403
  },
  {
    exact: true,
    path: PATH_ERROR_404,
    component: Error404
  },
  {
    exact: true,
    path: PATH_ADD_USER,
    component: AddUser
  },
  {
    exact: true,
    path: PATH_ERROR_404,
    component: Error404
  },
  {
    exact: true,
    path: PATH_DASHBROAD_ORDERS_DETAIL,
    component: DetailOrders
  },
  {
    exact: true,
    path: PATH_UPDATE_ORDER,
    component: UpdateOrder
  }
];
export { websiteRoutes, dashboardRoutes };
