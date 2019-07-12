import { Switch, Route } from "react-router-dom";

import * as React from "react";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Album from "./pages/Album";

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/artist/:id" component={Artist} />
      <Route path="/album/:id" component={Album} />
    </Switch>
  );
}

export default Routes;
