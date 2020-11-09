import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

import Home from './components/Home/Home';
import Partners from './components/Partners/Partners';
import Privacy from './components/Privacy/Privacy';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
	<div className="App">
	<Router>
		<Header/>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/partners" component={Partners} />
			<Route path="/privacy" component={Privacy} />
		</Switch>
		<Footer/>
	</Router>
	</div>
  );
}

export default App;
