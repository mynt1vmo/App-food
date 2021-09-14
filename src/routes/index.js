import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashbroad from "../layout/Dashbroad";
import Website from "../layout/Website";
import Error403 from "../pages/NotFound/403";
import Error404 from "../pages/NotFound/404";
import { PATH_ERROR_403 } from "./Routes/routes.path";
import { dashboardRoutes, websiteRoutes } from "./Routes/routes.routes";

const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute path="/dashboard/:path?">
        <Dashbroad>
          <Switch>
            {dashboardRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Dashbroad>
      </PrivateRoute>
      <Route exact path={PATH_ERROR_403} component={Error403} />

      <Route>
        <Website>
          <Switch>
            {websiteRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
            <Route path="*" component={Error404} />
          </Switch>
        </Website>
      </Route>
    </Switch>
  </Router>
);

export default Routes;
function PrivateRoute({ children, ...rest }) {
  const user = useSelector((state) => state.signIn);
  return (
    <Route
      {...rest}
      render={() =>
        Number(user.payload?.user?.role) === 0 ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: PATH_ERROR_403
            }}
          />
        )
      }
    />
  );
}
