import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

import Home from './components/Home/Home';
import Partners from './components/Partners/Partners';
import Privacy from './components/Privacy/Privacy';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.scss';
import Guideline from './components/Guidelines/Guidelines';
import SignIn from './Admin/Signin';
import CityForm from './components/CityForm/CityForm';
import AdminDashboard from './Admin/Dashboard/AdminDashboard';
import Cities from './components/Cities/Cities';
import ScrollToTop from './components/ScrollToTop';
import Faqs from './components/Faqs/Faqs';

function App() {
  return (
	<div className="App">
	<Router>
		<ScrollToTop />
		<Header/>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/partners" component={Partners} />
			<Route path="/privacy" component={Privacy} />
			<Route path="/guidelines" component={Guideline} />
			<Route path="/cities" component={Cities} />
			<Route path="/faqs" component={Faqs} />
			<Route path="/admin" component={SignIn} />
			<Route path="/form" component={CityForm} />
			<Route path="/dashboard" component={AdminDashboard} />
		</Switch>
		<Footer/>
	</Router>
	</div>
  );
}

export default App;
