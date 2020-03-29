import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Success from "./Success/Success";
import Main from "./Main/Main";

const RouterNav = () => (
  <Switch>
    <Route path="/" exact>
      <Main />
    </Route>
    <Route path="/success">
      <Success />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default RouterNav;
