import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
	<div className="App">
	<Header/>
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	</Router>
	<Footer/>
	</div>
  );
}

export default App;
