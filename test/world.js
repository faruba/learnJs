require('should');
const { moveEast, moveNorth,moveSouth,moveWest, } = require('../source/world');
var { playerPosition } = require('../source/world');
describe("test move", function(){
	beforeEach(function() {
		playerPosition.x =1;
		playerPosition.y =1;
	});
	it("move through road",function(){
		moveNorth();
		playerPosition.should.eql({x:1,y:0});
		moveEast();
		playerPosition.should.eql({x:2,y:0});
		moveSouth();
		playerPosition.should.eql({x:2,y:1});
	});


	it("should not move out of world",function(){
		moveNorth();
		moveNorth();
		moveNorth();
		playerPosition.should.eql({x:1,y:0});
	});
	it("slide with rope",function(){
		moveEast();
		playerPosition.should.eql({x:2,y:1});
		moveWest();
		playerPosition.should.eql({x:2,y:1});
	});
	it("move to a tree",function(){
		moveWest();
		playerPosition.should.eql({x:0,y:1});
		moveSouth();
		playerPosition.should.eql({x:0,y:1});
	});
});
