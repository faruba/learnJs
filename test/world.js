require('should');
const { moveEast, moveNorth, playerPosition } = require('../source/world');
it("test move",function(){
	moveEast();
	moveNorth();
	moveNorth();
	playerPosition.should.eql({x:2,y:0});
});
