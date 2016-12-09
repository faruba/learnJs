var playerPosition ={x:1, y:2};

//var mapData = [
//	[false, true, false, true],
//	[true,  true, true,  true],
//	[true,  true, true,  true],
//	[false, true, true,  false],
//];

var mapData = {
	'0,0->1,0':true, '1,0->0,0':true,
	'0,0->0,1':true, '0,1->0,0':true,
	'1,0->2,0':true, '2,0->1,0':true,
	'1,0->1,1':true, '1,1->1,0':true,
	'2,0->2,1':true, '2,1->2,0':true,
	'0,1->1,1':false, '1,1->0,1':true,
	'0,1->0,2':false, '0,2->0,1':false,
	'1,1->2,1':true, '2,1->1,1':false,
	'1,1->1,2':true, '1,2->1,1':false,
	'2,1->2,2':true, '2,2->2,1':true,
	'0,2->1,2':false, '1,2->0,2':false,
	'1,2->2,2':true, '2,2->1,2':true,
	
};

const height = 3;
const width = 3;
const DirectionOffset = { 
	North:{x:0,y:-1},
	South:{x:0,y:1},
	West:{x:-1,y:0},
	East:{x:1,y:0},
};

function move(pos,delta) {
	return {
		x:pos.x + delta.x,
		y:pos.y + delta.y
	};
}
function getDestination(currentPos, direction) {
	var offset = DirectionOffset[direction];
	return move(currentPos, offset); 	
}

function canMoveTo(from, to){
	return to.x >=0 && to.x < width 
		&& to.y >=0 && to.y < height
		&& mapData[`${from.x},${from.y}->${to.x},${to.y}`];
}

module.exports = {
	playerPosition
};

["North", "South", "West", "East"].forEach((direction) => {
	module.exports[`move${direction}`] = function() {
		 var pos = getDestination(playerPosition, direction);
		if(canMoveTo(playerPosition, pos)){
			playerPosition.x = pos.x;
			playerPosition.y = pos.y;
		}
	}
});

