import React from 'react';
import {Link} from 'react-router-dom';


import Header from '../components/header/Header';
import Buscador from '../components/buscador/Buscador';
//import CanalesList from '../components/canales-list/CanalesList';


class Home extends React.Component{

	constructor(props){

		super(props);
	}
	
	render(){

		return (

			<div className="route">
				<Header />
				<Buscador />
				<section className="route__body">
					<h1>
					Home
					</h1>
				</section>
			</div>
		)

	}

}

export default Home;