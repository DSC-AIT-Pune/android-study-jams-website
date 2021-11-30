import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Schedule from "./components/Schedule";

// import NotFound from './components/NotFound';
import NavBar from "./common/Navbar";
import Home from "./components/Home";
import AboutUs from "./common/AboutUs";
import Auth from "./components/Auth";
import Treasure from "./components/Treasure";
import Speakers from "./components/Speakers";
import "./styles/css/app.css";
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="body">
        <Switch>
          <Route  exact path="/"   component={Home} />
          <Route  exact path="/Schedule" component={Schedule} />
          <Route  exact path="/login" component={Auth} />
          <Route  exact path="/treasure" component={Treasure} />
          <Route  exact path="/speakers" component={Speakers} />
          <Redirect to="/notFound" />
        </Switch>
      </main>
      <AboutUs />
    </React.Fragment>
  );
};

export default App;
