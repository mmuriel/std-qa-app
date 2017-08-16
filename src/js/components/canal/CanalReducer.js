import arrayFinderIndex from "../../helpers/arrayFinderIndex";

let CanalReducer = (state = [], action) => {
	
	switch (action.type){

		case "ADD_CANAL":

				state = [ ...state,action.canal];

			break;

		case "DEL_CANAL":
				
				/* Determina el indice del programa a eliminar */
				let indexToDel = arrayFinderIndex(state,action.id,'id');
				state.splice(indexToDel,1);

			break;	


	}

	return state;

}

export default CanalReducer;