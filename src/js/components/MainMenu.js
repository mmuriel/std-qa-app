import React from 'react';
import {Link} from 'react-router-dom';

class MainMenu extends React.Component{

	constructor(props) {
		super(props);
		
	}

	render(){

		return (
			<ul>
				<li><Link to="/login">Login</Link></li>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/event/45">Event</Link></li>
				<li><Link to="/logout">Logout</Link></li>
				<li><Link to="/forgot">Forgot</Link></li>
			</ul>
		)
	}

}

export default MainMenu;