import React from 'react';

import MainMenu from '../main-menu/MainMenu';

class Header extends React.Component {

	constructor(props) {
		super(props);
		//this.buscadorOnChangeHandler = this.buscadorOnChangeHandler.bind(this);
	}

	

	buscadorOnChangeHandler(event){


		console.log("Modificando el campo de texto "+event.target.value);
		this.setState({q:event.target.value});


	}

	render() {
		return (
			<header className="app__header">
				<figure>
					<img src="" />
				</figure>
				<MainMenu />
			</header>
		);
	}
}


export default Header;
