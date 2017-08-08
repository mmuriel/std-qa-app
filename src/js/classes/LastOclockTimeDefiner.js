'use strict';

class LastOclockTimeDefiner{
	
	constructor(dateBase) {
		
		this.dateBase  = dateBase;
	}

	defineLastOclockTime(){

		let baseMinutes = this.dateBase.getMinutes();
		let minutes = 0;

		if (baseMinutes < 15){

			minutes = 0;

		}
		else if (baseMinutes < 30 && baseMinutes >= 15){

			minutes = 15;			

		}
		else if (baseMinutes < 45 && baseMinutes >= 30){

			minutes = 30;

		}
		else{

			minutes = 45;

		}

		return new Date (this.dateBase.getFullYear(),this.dateBase.getMonth(),this.dateBase.getDate(),this.dateBase.getHours(),minutes,0,0);

	}

}

export default LastOclockTimeDefiner;