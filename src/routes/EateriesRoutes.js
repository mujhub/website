import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import EateriesDashboard from "../pages/EateriesDashboard";
import EateriesLogin from "../pages/EateriesDashboard/Login";
import PrivateRoute from "./PrivateRoute";

const EateriesRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch >
      <PrivateRoute exact path={`${path}`}>
        <EateriesDashboard />
      </PrivateRoute>

      <Route path={`${path}/login`}>
        <EateriesLogin />
      </Route>
    </Switch>
  );
};

export default EateriesRoutes;
