const _ = require('lodash');
module.exports = {
	sumOfArray(array) {
		if(_.isArray(array)){
			return array.reduce((acc, num) => _.isNumber(num) ? acc + num : acc, 0);
		}else{
			throw "not array";
		}
	}
};
