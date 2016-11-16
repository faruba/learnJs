module.exports = {
	sumOfArray(array) {
		if(array instanceof Array){
			var sum = 0;
			for(var index in array){
				if(typeof array[index] == 'number'){
					sum += array[index];
				}
			}
			return sum;
		}else{
			throw "not array";
		}
	}
};
