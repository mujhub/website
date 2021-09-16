import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import EateriesDashboard from "../pages/EateriesDashboard";
import EateriesLogin from "../pages/EateriesDashboard/Login";

const EateriesRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      {/* // TODO: Add auth */}
      <Route exact path={`${path}/dashboard`}>
        <EateriesDashboard />
      </Route>

      <Route path={`${path}/login`}>
        <EateriesLogin />
      </Route>
    </Switch>
  );
};

export default EateriesRoutes;
