const _ = require('lodash');
function sumOfArray(array) {
	if(_.isArray(array)){
		return array.reduce((acc, num) => {
			if(_.isNumber(num)){
			       return  acc + num;
			}else if(_.isArray(num)){
			       return	acc + sumOfArray(num);
			}else{
				return acc;
			};
		},0);
	}else{
		throw "not array";
	}
}

module.exports = {
	sumOfArray
};
