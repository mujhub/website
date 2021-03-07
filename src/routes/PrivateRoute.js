import React, { useContext } from "react";
import { Route, Redirect, useRouteMatch } from "react-router-dom";

import { AuthContext } from "../contexts/Auth";

const PrivateRoute = ({ children, ...rest }) => {
	const { currentUser } = useContext(AuthContext);
	const { path } = useRouteMatch();
	return (
		<Route {...rest} render={({ location }) => (currentUser ? children : <Redirect to={{ pathname: `${path}/login`, state: { from: path } }} />)} />
	);
};

export default PrivateRoute;
