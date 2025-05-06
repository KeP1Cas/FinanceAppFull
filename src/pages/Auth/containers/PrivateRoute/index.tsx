import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props: any) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Route {...props} />;
  }

  return <Redirect to="/auth" />;
};

export { PrivateRoute };
