import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { MemberTemplate } from "./members/MemberTemplate";
import { Home, Dashboard, Auth } from "./Pages";
import { Members } from "./Pages/Members";

function App() {
  return (
    <div className="px-8 py-6">
      <Router>
        <Nav />
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
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/member/:member">
            <MemberTemplate />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
