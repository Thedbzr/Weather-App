import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Home from './components/home'
import Cities from './components/cities'

ReactDOM.render(
  <Router>
    <App>
      <Route path="/" exact component={Home} />
      <Route path="/cities" component={Cities} />
    </App>
  </Router>,
  document.getElementById("root")
);
