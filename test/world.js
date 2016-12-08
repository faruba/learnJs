require('should');
const { moveEast, moveNorth,moveSouth,moveWest, } = require('../source/world');
var { playerPosition } = require('../source/world');
it("test move",function(){
	moveEast();
	moveNorth();
	moveNorth();
	playerPosition.should.eql({x:2,y:1});
});

describe("should not go out of world", function(){
	before(function() {
		playerPosition = {x:1,y:2};
	});
	it("North",function(){
		moveNorth();
		moveNorth();
		moveNorth();
		playerPosition.should.eql({x:1,y:0});
	});
	it("West",function(){
		moveWest();
		moveWest();
		playerPosition.should.eql({x:0,y:2});
	});
	it("South",function(){
		moveSouth();
		moveSouth();
		playerPosition.should.eql({x:1,y:3});
	});
	it("East",function(){
		moveEast();
		moveEast();
		moveEast();
		playerPosition.should.eql({x:3,y:2});
	});
});
