import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Dashboard, Auth } from "./Pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
