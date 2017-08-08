'use strict';

import React from 'react';

class Programa extends React.Component{


	constructor(props) {
		super(props);
		this.styleBox = {
			width: '10vw',
			//left: '0vw'
		};

		this.state = {

			dateHoraIni: new Date(this.props.ini),
			dateHoraFin: new Date(this.props.fin)

		}

		this.clickBtnOk = this.clickBtnOk.bind(this);
		this.clickBtnError = this.clickBtnError.bind(this);
		
	}

	/*

		React's Lifecicle methods

	*/

	componentWillMount() {
		
		//Define el ancho del componente
		this.defineComponentWidth();
		this.defineComponentPosition();
		console.log(this.props.timebase.getFullYear()+"-"+(this.props.timebase.getMonth()+1)+"-"+this.props.timebase.getDate()+" "+this.props.timebase.getHours()+"-"+this.props.timebase.getMinutes()+"-"+this.props.timebase.getSeconds());
		console.log(this.props.timebase.getTime());

	}


	/*


		Custom methods


	*/

	defineComponentWidth(){

		let duracionEvento = parseInt(parseInt(this.props.fin) - parseInt(this.props.ini));
		duracionEvento = parseInt((duracionEvento/1000) / 60);
		//Regla de tres para determinar el ancho de la caja
		this.styleBox.width = `${parseInt((duracionEvento * 33) / 15)}vw`;
		//console.log(`Duracion: ${duracionEvento}, Ancho: ${this.styleBox.width}, Evento: ${this.props.titulo}`);
	}


	defineComponentPosition(){

		let diffFromStart = parseInt(parseInt(this.props.timebase.getTime() - this.props.ini)) * -1;
		diffFromStart = parseInt((diffFromStart/1000)/60);
		console.log(`Diferencia para ${this.props.titulo}: `);
		this.styleBox.left = `${parseInt((diffFromStart * 33) / 15)}vw`;

	}


	clickBtnError(){

		console.log("Click Error");
		console.log(this.state);

	}

	clickBtnOk(){

		console.log("Click Ok");
		console.log(this.state);

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
