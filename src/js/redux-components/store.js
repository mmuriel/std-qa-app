import {createStore,combineReducers} from 'redux';

/* Se importan los reducers */
import TimeBaseReducer from '../components/AppReducer';
import CanalReducer from '../components/canal/CanalReducer';
import ProgramaReducer from '../components/programa/ProgramaReducer';
import ProgramaReporteReducer from '../components/programa/ProgramaReporteReducer';


/* Se genera el objeto que registra todos los reducers */

let reducers = {

	timebase: TimeBaseReducer,
	canales: CanalReducer,
	programacion: ProgramaReducer,
	reportes: ProgramaReporteReducer
}

let reducer = combineReducers(reducers);
/* Se genera el store del App */
let store = createStore(reducer);
//let store = {};


export default store;