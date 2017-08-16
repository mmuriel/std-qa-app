function arrayFinderIndex (arr,val,field = null){
	
		let j = arr.length;
		let left = {};
		let right = {};
		for (let i = 0; i < arr.length; i++){

			j--;
			left = arr[i];
			right = arr[j];

			if (field){

				if (left[field] === val)
					return i;

				if (right[field]===val)
					return j;

			}
			else{

				if (left === val)
					return i;

				if (right === val)
					return j;

			}

		}

		return false;

}

export default arrayFinderIndex;