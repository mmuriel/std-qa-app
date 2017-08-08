/* Module Dependencies */
import App from './js/components/App.js';
import React from 'react';
import ReactDOM from 'react-dom';
import CanalesDb from './fakedb.js';
import {BrowserRouter as Router} from 'react-router-dom';


//1. Metodo 1: Usando JSX directamente en el método ReactDOM.render.
//ReactDOM.render(<App canales={CanalesDb.canales}/>,document.getElementById('app'));

//2. Metodo 2, creando un elemento con el método React.createElement
let reactEle = React.createElement(App, {canales:CanalesDb.canales},'');



//3. Metodo 3, creando manualmente un objeto "Element":
/*
let reactEle = {

	type: 'div',
	props: {

		canales:CanalesDb.canales,
	},
	key: null,
    ref: null

};
*/



//Se renderiza
//ReactDOM.render(reactEle,document.getElementById('app'));

ReactDOM.render(<Router><App /></Router>,document.getElementById('app'));

