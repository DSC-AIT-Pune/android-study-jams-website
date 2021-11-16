import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

import NotFound from './components/NotFound';
import NavBar from "./common/Navbar";
import Home from "./components/Home";
import AboutUs from "./common/AboutUs";

const App = () => {
	return (
		<React.Fragment>
			<NavBar/>
			<main className="body">
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/notFound" component={NotFound}/>
					<Redirect to="/notFound"/>
				</Switch>
			</main>
			<AboutUs/>
		</React.Fragment>
	);
};

export default App;

