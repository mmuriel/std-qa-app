import React from 'react';

class Buscador extends React.Component {

	constructor(props) {
		super(props);
		this.buscadorOnChangeHandler = this.buscadorOnChangeHandler.bind(this);
	}

	

	buscadorOnChangeHandler(event){


		console.log("Modificando el campo de texto "+event.target.value);
		this.setState({q:event.target.value});


	}

	render() {
		return (
			<div className="app__buscador">
				<input type="text" name="q" id="q" className="buscador" onChange={this.props.qsearch}/>
				<button>Buscar</button>
			</div>
		);
	}
}


Buscador.propTypes = {

	q : React.PropTypes.string

}

export default Buscador;
