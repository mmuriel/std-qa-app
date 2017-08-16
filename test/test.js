//Libreria requerida para operar Babel con ES2015
import 'babel-polyfill';

/* Librerias de aserciones */
import assert from 'assert';
import chai from 'chai';

/* Componentes, clases y funciones a testear */
import LastOclockTimeDefiner from "../src/js/helpers/LastOclockTimeDefiner.js";
import arrayFinderIndex from "../src/js/helpers/arrayFinderIndex";
import ProgramaReducer from "../src/js/components/programa/ProgramaReducer";
import ProgramaReporteReducer from "../src/js/components/programa/ProgramaReporteReducer";
import CanalReducer from "../src/js/components/canal/CanalReducer";
import AppReducer from "../src/js/components/AppReducer";

//import {store as mainStore} from "../src/js/redux-components/store";

/* Librerias complementarias de pruebas */



describe('Class: LastOclockTimeDefiner',() => {
	//Sets timeout more than default 2000 milisecs
	it ('LastOclockTimeDefiner.defineLastOclockTime() Debe retornar el instante xx:00, xx:15, xx:30, xx:45 mas proximo inmediatamente anterior',() => {

		
		let lotd = new LastOclockTimeDefiner(new Date());
		let testDate = lotd.defineLastOclockTime();
		chai.assert.match(testDate.getMinutes(),/(0|15|30|45){1,1}/,"No es igual la cadena");

	});
});

describe('Function: ArrayFinderIndex',() => {
	//Sets timeout more than default 2000 milisecs
	it ('Si entregamos el arreglo de objetos [{a:2345,b:1902},{a:2346,b:1902},{a:2347,b:1902},{a:2348,b:1902},{a:2349,b:1902}] y buscamos el valor a:2348 la funcion debe retornar: 3',() => {

		
		let arrBase = [{a:2345,b:1902},{a:2346,b:1902},{a:2347,b:1902},{a:2348,b:1902},{a:2349,b:1902}];
		let indexRequired = arrayFinderIndex (arrBase,2348,'a');
		chai.assert.equal(indexRequired,3,"El valor no es 3");
		chai.assert.equal(arrBase[indexRequired].a,2348,"El valor de arrBase[3].a no es 2348");

	});

	it ('Si entregamos el arreglo de números: [23,13,28,45,3,27,90,102] y buscamos el valor 90, la funcion debe retornar: 6',() => {

		
		let arrBase = [23,13,28,45,3,27,90,102];
		let indexRequired = arrayFinderIndex (arrBase,90);
		chai.assert.equal(indexRequired,6,"El valor no es 6");
		chai.assert.equal(arrBase[indexRequired],90,"El valor de arrBase[6] no es 90");

	});

	it ('Si entregamos el arreglo de números: [23,13,28,45,3,27,90,102] y buscamos el valor 25, la funcion debe retornar: false',() => {

		
		let arrBase = [23,13,28,45,3,27,90,102];
		let indexRequired = arrayFinderIndex (arrBase,25);
		chai.assert.isNotOk(indexRequired,"El valor debería ser false");

	});
});


describe('Redux Reducer: ProgramaReducer',() => {
	//Sets timeout more than default 2000 milisecs
	let state = [];
	it ('Agregar un programa al store cuando el store está vacio, debe retornar longitud 1',() => {

		
		
		let action = {

			type: 'ADD_PROGRAMA',
			programa: {
				id: 34992020309,
				nom: 'CSI Miami T02 - EP. 12',
				chn: 23,
				fec_hor: 1501668000, /* TIMESTAMP */
				dur: 3600, /* Tiempo en segundos */
				sin: 'Giggly hey noiselessly and darn came far a less and for thus scratched groomed more and scallop raccoon more commendably among during titillating snootily the built mindfully ouch before.',
				ctr:[]
			}

		}
		state = ProgramaReducer(state,action);


		chai.assert.equal(1,state.length,"state tiene más de 1 elemento o cero (0) elementos");

	});

	it ('Agregar un programa al store cuando el store ya tiene un programa debe retornar longitud 2',() => {

		let arrTmp = state;
		
		let action = {

			type: 'ADD_PROGRAMA',
			programa: {
				id: 34992020310,
				nom: 'FPC Deportivo Cali vs America de Cali',
				chn: 25,
				fec_hor: 1501678000, /* TIMESTAMP */
				dur: 3600, /* Tiempo en segundos */
				sin: 'Por la quinta fecha de la Liga Colombiana, juegan Deportivo Cali America, en el clásico del surorccidente Colombiano',
				ctr:[]
			}

		}
		state = ProgramaReducer(state,action);


		chai.assert.equal(2,state.length,"state tiene más de 1 elemento o cero (0) elementos");
		chai.assert.notEqual(state,arrTmp,"Son iguales");

	});


	it ('Eliminar un elemento de store cuando tiene 4 elementos, debe retornar una longitud de 3 elementos',() => {


		
		let action = {

			type: 'ADD_PROGRAMA',
			programa: {
				id: 34992020311,
				nom: 'Muy buenos dias',
				chn: 25,
				fec_hor: 1501678800, /* TIMESTAMP */
				dur: 3600, /* Tiempo en segundos */
				sin: 'Muy buenos dias, morning show bastante regularcito',
				ctr:[]
			}

		}
		state = ProgramaReducer(state,action);


		action = {

			type: 'ADD_PROGRAMA',
			programa: {
				id: 34992020312,
				nom: 'Plaza Sesamo',
				chn: 25,
				fec_hor: 1501679600, /* TIMESTAMP */
				dur: 3600, /* Tiempo en segundos */
				sin: 'Plaza Sésamo, programa infantil que no olvidamos',
				ctr:[]
			}

		}
		state = ProgramaReducer(state,action);

		/* Elimina el elemento ID: 34992020311 */
		state = ProgramaReducer(state,{type:'DEL_PROGRAMA',id:34992020311});


		chai.assert.equal(3,state.length,"state tiene una cantidad de elementos diferente a 3");

	});
});



describe('Redux Reducer: CanalReducer',() => {
	//Sets timeout more than default 2000 milisecs
	let state = [];
	it ('Agregar un canal al store cuando el store está vacio, debe retornar longitud 1',() => {
		let action = {

			type: 'ADD_CANAL',
			canal: {
				id: 23,
				timezone: -5, /* GMT -5 */
				nombre: 'CANAL DEL TIEMPO',
				programacion:[34992020309,34992020310,34992020311,34992020312]
			}

		}
		state = CanalReducer(undefined,action);


		chai.assert.equal(1,state.length,"state tiene más de 1 elemento o cero (0) elementos");

	});

	it ('Agregar un canal al store cuando el store ya tiene un canal debe retornar longitud 2',() => {

		let arrTmp = state;
		
		let action = {

			type: 'ADD_CANAL',
			canal: {
				id: 38,
				timezone: -5, /* GMT -5 */
				nombre: 'FOX SPORTS HD',
				programacion:[34992030301,34992030302,34992030303,34992030304]
			}

		}
		state = CanalReducer(state,action);


		chai.assert.equal(2,state.length,"state tiene más de 1 elemento o cero (0) elementos");
		chai.assert.notEqual(state,arrTmp,"Son iguales");

	});


	it ('Eliminar un elemento de store cuando tiene 3 elementos, debe retornar una longitud de 2 elementos',() => {


		
		let action = {

			type: 'ADD_CANAL',
			canal: {
				id: 67,
				timezone: -5, /* GMT -5 */
				nombre: 'SIBA GUIDE',
				programacion:[34992040301,34992040302,34992040303,34992040304]
			}

		}
		state = CanalReducer(state,action);


		/* Elimina el elemento ID: 34992020311 */
		state = CanalReducer(state,{type:'DEL_CANAL',id:67});


		chai.assert.equal(2,state.length,"state tiene una cantidad de elementos diferente a 2");

	});
});


describe('Redux Reducer: AppReducer',() => {
	//Sets timeout more than default 2000 milisecs
	//let state = ;
	it ('Seteando el tiempo base para 1501678000000 (TIMESTAMP para: 2017-08-02 12:46:40) debe retornar 1501677900000 (TIMESTAMP para: 2017-08-02 12:45:00 )',() => {

		let state;		
		let action = {

			type: 'SET_TIMEBASE',
			timebase: new Date(1501678000000)

		}
		state = AppReducer(state,action);
		chai.assert.equal('45:00',state.getMinutes()+':'+state.getSeconds()+'0',"El valor esperado y registrado el diferente");

	});


	it ('Si no se provee un tipo de acción válido, debe retornar un objeto Date con el instante actual',() => {

		let state;		
		let action = {

			type: 'NO_VALID_ACTION',
			timebase: new Date(1501678000000)

		}
		state = AppReducer(state,action);
		let actualDate = new Date();
		let expectedVal = actualDate.getHours()+":"+actualDate.getMinutes();
		let stateVal = state.getHours()+":"+state.getMinutes();
		chai.assert.equal(expectedVal,stateVal,"El valor por defecto del reducer no esta bien configurado, debe generar la misma hora:minutos de un new Date()");

	});




});


describe('Redux Reducer: ProgramaReporteReducer',() => {
	//Sets timeout more than default 2000 milisecs
	let state = [];
	it ('Agregar un reporte al store cuando el store está vacio, debe retornar longitud 1',() => {

		
		
		let action = {

			type: 'ADD_REPORTE',
			reporte: {
				id: 'ad32fe28739fc9382710023b3bcd98373',
				evt: 34992020312,
				tipo: 1,
				fechora: 1502507700
			}

		}
		state = ProgramaReporteReducer(state,action);


		chai.assert.equal(1,state.length,"state.reportes tiene más de 1 elemento o cero (0) elementos");

	});

	it ('Agregar un reporte al store cuando el store ya tiene un reporte debe retornar longitud 2',() => {

		let arrTmp = state;
		
		let action = {

			type: 'ADD_REPORTE',
			reporte: {
				id: '9c356e2ab39fc9382710023b3bcd9f372',
				evt: 34992020312,
				tipo: 0,
				fechora: 1502507700,
				mot: 101,
				des: 'Descripcion del elemento'
			}

		}
		state = ProgramaReporteReducer(state,action);


		chai.assert.equal(2,state.length,"state tiene más de 1 elemento o cero (0) elementos");
		chai.assert.notEqual(state,arrTmp,"Son iguales");

	});


	it ('Eliminar un elemento de store cuando tiene 3 elementos, debe retornar una longitud de 2 elementos',() => {

		let action = {

			type: 'ADD_REPORTE',
			reporte: {
				id: '1ada934ab39fc93d3719d23b3bcd9f301',
				evt: 34992020312,
				tipo: 0,
				fechora: 1502507700,
				mot: 102,
				des: 'Programacion no coincide aparece un evento y muestra otro'
			}

		}
		state = ProgramaReporteReducer(state,action);


		/* Elimina el elemento ID: 34992020311 */
		state = ProgramaReporteReducer(state,{type:'DEL_REPORTE',id:'9c356e2ab39fc9382710023b3bcd9f372'});


		chai.assert.equal(2,state.length,"state tiene una cantidad de elementos diferente a 2");

	});
});