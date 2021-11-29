import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Schedule from "./components/Schedule";

// import NotFound from './components/NotFound';
import NavBar from "./common/Navbar";
import Home from "./components/Home";
import AboutUs from "./common/AboutUs";
import Auth from "./components/Auth";
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="body">
        <Switch>
          {/* <Route path="/" exact component={Auth} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/Schedule" component={Schedule} />
          <Redirect to="/notFound" />
        </Switch>
      </main>
      <AboutUs />
    </React.Fragment>
  );
};

export default App;
