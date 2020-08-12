import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import MainApp from './MainApp';
import YashApp from './YashApp';
import User from './User';
import NavBar from './NavBar';
import Error from './Error';

function App() {

	return (
		<>
			<NavBar />
			<Switch>
				<Route exact path='/firstreactwebsite' component={Home} />
				<Route path='/mainapp' component={MainApp} />
				<Route path='/yashapp' component={YashApp} />
				<Route path='/user/:fname' component={User} />
				<Route component={Error} />
			</Switch>

		</>
	);
}

export default App;
