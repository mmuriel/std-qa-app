
import React from 'react';
import Buscador from './Buscador';
import Resultados from './Resultados';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			canales:[
				{
					"id":"395",
					"nom":"CANAL CLARO",
					"num":"100",
					"logo":"7c4b9e8566a6e867d1db4c7ce845f1f4.jpg",
					"cat":"Exclusivos Claro",
					"prog":[
						{
							"id":"220777760",
							"nom":"Popland",
							"ini":1490830200,
							"fin":1490833800
						},
						{
							"id":"220777761",
							"nom":"Anthony Bourdain",
							"ini":1490833800,
							"fin":1490837400
						}
					]
				},
				{
					"id":"984",
					"nom":"CANAL CLARO HD",
					"num":"102",
					"logo":"7ed0e4d7e0879491114a0ee9ddb59f7d.jpg",
					"cat":"Exclusivos Claro",
					"prog":[
						{
							"id":"220778974",
							"nom":"Popland",
							"ini":1490830200,
							"fin":1490833800
						},
						{
							"id":"220778975",
							"nom":"Anthony Bourdain",
							"ini":1490833800,
							"fin":1490837400
						}
					]
				},
				{
					"id":"401",
					"nom":"CANAL UNO",
					"num":"105",
					"logo":"8bebdd221f133c1af9dede9a8bc7f976.jpg",
					"cat":"Nacionales",
					"prog":[
						{
							"id":"220636371",
							"nom":"Gente Pelota",
							"ini":1490830200,
							"fin":1490832000
						},
						{
							"id":"220636372",
							"nom":"CMI",
							"ini":1490832000,
							"fin":1490833800
						},
						{
							"id":"220636373",
							"nom":"GPS",
							"ini":1490833800,
							"fin":1490835600
						},
						{
							"id":"220636374",
							"nom":"Panorama",
							"ini":1490835600,
							"fin":1490837400
						}
					]
				},
				{
					"id":"394",
					"nom":"CANAL CARACOL",
					"num":"106",
					"logo":"3e9259a8ae9bddb1f01a0fbf01e1f30f.jpg",
					"cat":"Nacionales",
					"prog":[
						{
							"id":"220781024",
							"nom":"Tu Voz Estéreo",
							"ini":1490828400,
							"fin":1490832000
						},
						{
							"id":"220781025",
							"nom":"Noticias 19:00 Caracol",
							"ini":1490832000,
							"fin":1490835600
						},
						{
							"id":"220781026",
							"nom":"Yo Me Llamo",
							"ini":1490835600,
							"fin":1490839200
						}
					]
				},
				{
					"id":"421",
					"nom":"RED+",
					"num":"107",
					"logo":"e4dd778bd580b2c66349e966814eabcf.jpg",
					"cat":"Nacionales",
					"prog":[
						{
							"id":"219797460",
							"nom":"NSN",
							"ini":1490828400,
							"fin":1490832000
						},
						{
							"id":"219797461",
							"nom":"Red + Noticias Internacional",
							"ini":1490832000,
							"fin":1490835600
						},
						{
							"id":"219797462",
							"nom":"Red + Noticias",
							"ini":1490835600,
							"fin":1490839200
						}
					]
				},
				{
					"id":"399",
					"nom":"CANAL RCN",
					"num":"108",
					"logo":"1f1b5140c92f420a3183a288efbc3440.jpg",
					"cat":"Nacionales",
					"prog":[
						{
							"id":"220781187",
							"nom":"Los Reyes",
							"ini":1490828400,
							"fin":1490832000
						},
						{
							"id":"220781188",
							"nom":"Noticias RCN",
							"ini":1490832000,
							"fin":1490835600
						},
						{
							"id":"220781189",
							"nom":"Francisco El Matemático Clase 2017",
							"ini":1490835600,
							"fin":1490839200
						}
					]
				},
				{
					"id":"497",
					"nom":"EL TIEMPO TELEVISION",
					"num":"109",
					"logo":"163308ec0dceca207789ffb3afc68342.jpg",
					"cat":"Nacionales",
					"prog":[
						{
							"id":"220232378",
							"nom":"Noticias El Tiempo",
							"ini":1490828400,
							"fin":1490835600
						},
						{
							"id":"220232379",
							"nom":"Noticias El Tiempo",
							"ini":1490835600,
							"fin":1490839200
						}
					]
				}
			]
		}
		this.handlingQuerySearch = this.handlingQuerySearch.bind(this);
		
	}


	handlingQuerySearch(e){

		//console.log(e.nativeEvent.target.value);
		//console.log(e);


		
		let tmpCanales = this.state.canales;
		tmpCanales.push({
					"id":`399200 ${Math.random(1,200)}`,
					"nom":`CANAL CLARO 2000 ${Math.random(1,200)}`,
					"num":"100",
					"logo":"7c4b9e8566a6e867d1db4c7ce845f1f4.jpg",
					"cat":"Exclusivos Claro",
					"prog":[
						{
							"id":`2207777602000 ${Math.random(1,200)}`,
							"nom":`Popland 2000 ${Math.random(1,200)}`,
							"ini":1490830200,
							"fin":1490833800
						},
						{
							"id":`2207777612000 ${Math.random(1,200)}`,
							"nom":`Anthony Bourdain 2000 ${Math.random(1,200)}`,
							"ini":1490833800,
							"fin":1490837400
						}
					]
				});
		
		console.log(tmpCanales);
		this.setState({canales:tmpCanales});

	}

	render() {
		return (
			
			<div className="app">
				<Buscador qsearch={this.handlingQuerySearch} />
				<Resultados canales={this.state.canales}/>
			</div>

		);
	}
}

export default App;