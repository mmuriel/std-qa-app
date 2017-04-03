import React from 'react';
import Programa from './Programa.js';

class Canal extends React.Component {

	constructor(props) {
		super(props);
		
	}

	render() {

		let programas = this.props.programas.map((prg)=>{
					return <Programa titulo={prg.nom} ini={prg.ini} fin={prg.fin} key={prg.id} />
		})
		console.log(this.programas);

		return (
			<div className="canal">
				<div className="canal__header">
				{this.props.nombre}
				</div>
				<div className="canal__programs">
				{programas}
				</div>
			</div>
		);
	}
}


export default Canal;

