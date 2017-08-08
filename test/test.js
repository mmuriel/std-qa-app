//Libreria requerida para operar Babel con ES2015
import 'babel-polyfill';

/* Librerias de aserciones */
import assert from 'assert';
import chai from 'chai';

/* Componentes a testear */
import LastOclockTimeDefiner from "../src/js/classes/LastOclockTimeDefiner.js";


describe('LastOclockTimeDefiner',() => {
	//Sets timeout more than default 2000 milisecs
	it ('LastOclockTimeDefiner.defineLastOclockTime() Debe retornar el instante xx:00, xx:15, xx:30, xx:45 mas proximo inmediatamente anterior',() => {

		
		let lotd = new LastOclockTimeDefiner(new Date());
		let testDate = lotd.defineLastOclockTime();
		chai.assert.match(testDate.getMinutes(),/(0|15|30|45){1,1}/,"No es igual la cadena");

	});
});

