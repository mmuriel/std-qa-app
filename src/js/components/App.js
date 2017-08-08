
import React from 'react';
import Home from './Routes/Home.js';
import Login from './Routes/Login.js';
import Event from './Routes/Event.js';
import Logout from './Routes/Logout.js';
import Forgot from './Routes/Forgot.js';

import {
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			canales: this.props.canales
		}
		//this.handlingQuerySearch = this.handlingQuerySearch.bind(this);
		
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