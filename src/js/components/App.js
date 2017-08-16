import React from 'react';
import Home from '../routes/Home.js';
import Login from '../routes/Login.js';
import Event from '../routes/Event.js';
import Logout from '../routes/Logout.js';
import Forgot from '../routes/Forgot.js';

import store from '../redux-components/store';

import {
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {

	constructor(props) {
		super(props);
		/*
		this.state = {
			canales: this.props.canales
		}
		*/
		//this.handlingQuerySearch = this.handlingQuerySearch.bind(this);
		console.log(store.getState());
		
	}


	render() {
		return (
				
			<div className="app__container">
				<Route exact path="/" component={Home}/>
				<Route path="/login" component={Login}/>
				<Route path="/event/:id" component={Event}/>
				<Route path="/logout" component={Logout}/>
				<Route path="/forgot" component={Forgot}/>				
			</div>	

		);
	}
}

export default App;