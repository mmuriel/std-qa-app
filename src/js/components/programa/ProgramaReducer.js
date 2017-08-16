import arrayFinderIndex from "../../helpers/arrayFinderIndex";

let ProgramaReducer = (state = [], action) => {

	
	switch (action.type){

		case "ADD_PROGRAMA":

				state = [ ...state,action.programa];

			break;

		case "DEL_PROGRAMA":
				
				/* Determina el indice del programa a eliminar */
				let indexToDel = arrayFinderIndex(state,action.id,'id');
				state.splice(indexToDel,1);

			break;	


	}

	return state;

}

export default ProgramaReducer;