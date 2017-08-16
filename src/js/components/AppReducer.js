import LastOclockTimeDefiner from '../helpers/LastOclockTimeDefiner';

let TimeBaseReducer = (state = 0, action) =>{

	switch(action.type){


		case 'SET_TIMEBASE':

			let lastOclockDate = new LastOclockTimeDefiner(action.timebase);
			state = lastOclockDate.defineLastOclockTime();
			break;


	}

	return state;

}

export default TimeBaseReducer;