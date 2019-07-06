import React from "react";

import "normalize.css";
import "./App.css";
import Home from "./pages/Home";
import Header from "./pages/shared/Header";


function App(): JSX.Element {
  return (
    <div className='app'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
