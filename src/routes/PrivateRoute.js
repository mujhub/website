import React, { useContext } from "react";
import { Route, Redirect, useRouteMatch } from "react-router-dom";

import { AuthContext } from "../contexts/Auth";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const { path } = useRouteMatch();
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={() =>
        currentUser ? (
          children
        ) : (
          <Redirect to={{ pathname: `${path}/login`, state: { from: path } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
