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
				<Route exact path='/anandkejriwal.github.io/firstreactwebsite/' component={Home} />
				<Route path='/anandkejriwal.github.io/firstreactwebsite/mainapp' component={MainApp} />
				<Route path='/anandkejriwal.github.io/firstreactwebsite/yashapp' component={YashApp} />
				<Route path='/anandkejriwal.github.io/firstreactwebsite/user/:fname' component={User} />
				<Route component={Error} />
			</Switch>

		</>
	);
}

export default App;
