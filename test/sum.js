require('should');
const { sumOfArray } = require('../source/sum.js');

describe("sum ", function() {
	it("sum of array", function() {
		sumOfArray([1,2]).should.eql(3);
	});
	it("sum of empty array should be zero", function() {
		sumOfArray([]).should.eql(0);
	});
	it("sum of array with other type should be ignore", function() {
		sumOfArray([1,'acb', {a:1},2,[2,3]]).should.eql(3);
	});
	it("sum of other type should throw error", function() {
		(function() {
			sumOfArray(123);
		}).should.throw();
	});
	it("sum of empty array with float and int", function() {
		sumOfArray([1, 1.5]).should.eql(2.5);
	});
	
});
