import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import MessPanel from "../pages/MessPanel";
import MessLogin from "../pages/MessLogin";

// import { AuthProvider } from "./contexts/Auth";

const MessRoutes = () => {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<PrivateRoute exact path={`${path}`}>
				<MessPanel />
			</PrivateRoute>

			<Route path={`${path}/login`}>
				<MessLogin />
			</Route>
		</Switch>
	);
};

export default MessRoutes;
