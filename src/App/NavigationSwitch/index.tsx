import React from "react";
import { Route, Switch } from "react-router-dom";

import { Auth } from "pages/Auth";
import { PrivateRoute } from "pages/Auth/containers/PrivateRoute";

import { navigationRoutes } from "constants/navigationRoutes";

const NavigationSwitch = () => {
  return (
    <Switch>
      {navigationRoutes.map(({ path, component }) => (
        <PrivateRoute key={path} exact path={path} component={component} />
      ))}
      <Route exact path="/auth" component={Auth} />
    </Switch>
  );
};

export { NavigationSwitch };
