import React from 'react';
import Canal from './Canal';

class Resultados extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
	  	
  }

  render() {
    return (
      <div className="app__resultados">
      	{
      		this.props.canales.map((canal)=>{
      			return (<Canal programas={canal.prog} nombre={canal.nom} key={canal.id}/>);
      		})
      	}
      </div>
    );
  }
}

export default Resultados;

