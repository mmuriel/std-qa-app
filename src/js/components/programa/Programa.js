'use strict';

import React from 'react';

class Programa extends React.Component{


	constructor(props) {
		super(props);
	}

	

	/*

		Render Method

	*/

	render(){


		let horaIni = `${this.state.dateHoraIni.getHours()}:${this.state.dateHoraIni.getMinutes()}:00`;
		return (
			<div className="canal__programas__programa" style={this.styleBox} >
					{this.props.titulo}
					{horaIni}

					<div className="canal__programas__programa__btns">
						<button onClick={this.clickBtnOk} >Ok</button>
						<button onClick={this.clickBtnError} >Error</button>
					</div>
			</div>
		);

	}

}


export default Programa;
