import arrayFinderIndex from "../../helpers/arrayFinderIndex";

let ProgramaReporteReducer = (state = [], action) => {
	
	switch (action.type){

		case "ADD_REPORTE":

				state = [ ...state,action.reporte];

			break;

		case "DEL_REPORTE":
				
				/* Determina el indice del programa a eliminar */
				let indexToDel = arrayFinderIndex(state,action.id,'id');
				state.splice(indexToDel,1);

			break;	


	}

	return state;

}

export default ProgramaReporteReducer;