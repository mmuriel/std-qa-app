import React from 'react';
import Programa from './Programa.js';

class Canal extends React.Component {

	constructor(props) {
		super(props);
		
	}

	render() {

		let programas = this.props.programas.map((prg)=>{
					return <Programa titulo={prg.nom} ini={prg.ini} fin={prg.fin} key={prg.id} timenow={this.props.timenow} timebase={this.props.timebase} />
		})

		return (
			<div className="canal">
				<div className="canal__header">
				{this.props.nombre}
				</div>
				<div className="canal__programas">
				{programas}
				</div>
			</div>
		);
	}
}


export default Canal;

