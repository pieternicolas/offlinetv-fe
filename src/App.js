import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'assets/js/fontawesome-all.min.js';

import Home from 'containers/Home';


const App = (props) => {
	return (
	<Switch>
		<Route path="/" component={Home}></Route>
	</Switch>
	)
};


export default App;