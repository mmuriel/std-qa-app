import React from 'react';

import Header from '../components/header/Header';

class Login extends React.Component{

	constructor(props){

		super(props);
	}
	
	render(){

		return (
			<div className="route">
				<Header />
				<section className="route__body">
					<h1>
					Login
					</h1>     
				</section>
			</div>
		);

	}

}

export default Login;