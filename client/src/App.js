import React, { Fragment } from "react";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Route exact path="/">
            Hello World
          </Route>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
