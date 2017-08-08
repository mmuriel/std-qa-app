import React from 'react';
import {Link} from 'react-router-dom';

import MainMenu from '../MainMenu';

class Home extends React.Component{

	constructor(props){

		super(props);
	}
	
	render(){

		return (

			<div>
				<h1>Home</h1>
				<MainMenu />
			</div>
		)

	}

}

export default Home;