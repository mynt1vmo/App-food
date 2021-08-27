import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashbroad from "../layout/Dashbroad";
import Website from "../layout/Website";
import { dashboardRoutes, websiteRoutes } from "./Routes/routes.routes";

const Routes = () => (
  <Router>
    <Switch>
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
          </Switch>
        </Website>
      </Route>
      <Route path="/dashbroard/:path?">
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
      </Route>
    </Switch>
  </Router>
);

export default Routes;
