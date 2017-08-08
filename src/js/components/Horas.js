import React from 'react';

class Horas extends React.Component {

	constructor(props) {
		super(props);

		this.state ={

			h1: "00:00",
			h2: "00:15",
			h3: "00:30"

		}
		
	}


	componentWillMount() {
		


	}

	populateHorasBlocks(){


		



	}

	render() {

		return (
			<div className="horas">
				<div className="horas__hora" id="hora_1">{this.state.h1}</div>
				<div className="horas__hora" id="hora_2">{this.state.h2}</div>
				<div className="horas__hora" id="hora_3">{this.state.h3}</div>
			</div>
		);
	}
}


export default Horas;