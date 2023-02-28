import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default function RouteWrapper({ component, isPrivate, ...rest }) {
  // let authenticated = false;

  // var session_token = sessionStorage.getItem("user");
  // if (session_token) {
  //   authenticated = true;
  // } else {
  //   authenticated = false;
  // }

  // //Route is private and user is not logged in
  // if (isPrivate && !authenticated) {
  //   return <Redirect to="/" />;
  // }

  return <Route {...rest} component={component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.any.isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
