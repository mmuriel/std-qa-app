'use strict';

import React from 'react';

class Programa extends React.Component{


	constructor(props) {
		super(props);
		
	}


	render(){


		return (
			<div>
					{this.props.titulo}
			</div>
		);

	}

}


export default Programa;
