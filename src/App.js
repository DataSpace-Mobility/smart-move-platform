import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

import Home from './components/Home/Home';

import './App.scss';

function App() {
  return (
	<div className="App">
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	</Router>
	</div>
  );
}

export default App;
