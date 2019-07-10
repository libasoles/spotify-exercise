import { Switch, Route } from "react-router-dom";

import * as React from "react";
import Home from "./pages/Home";
import Artist from "./pages/Artist";

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/artist/:id" component={Artist} />
    </Switch>
  );
}

export default Routes;
