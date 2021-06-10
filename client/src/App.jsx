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
          <Route path="/easter_egg">
            <EasterEgg />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

export const EasterEgg = () => {
  const mockdata = [
    {
      name: "Max",
      game: "God of war",
    },
    {
      name: "Irfan",
      game: "Injustice",
    },
    {
      name: "Andrew",
      game: "Fortnite",
    },
  ];
  return (
    <div>
      {mockdata.map((d) => (
        <>
          <h1 className="text-3xl text-indigo-500">{d.name}</h1>
          <h3 className="text-xl mb-4">{d.game}</h3>
        </>
      ))}
    </div>
  );
};