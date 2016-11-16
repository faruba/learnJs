module.exports = {
	sumOfArray(array) {
		var sum = 0;
		for(var index in array){
			sum += array[index];
		}
		return sum;
	}
};
