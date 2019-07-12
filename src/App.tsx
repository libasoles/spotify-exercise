import React from "react";

import "normalize.css";
import "./App.css";
import Header from "./pages/shared/Header";
import login from "./services/auth";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

login();

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
