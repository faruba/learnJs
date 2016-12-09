var playerPosition ={x:1, y:2};
var mapData = [
	[false, true, false, true],
	[true,  true, true,  true],
	[true,  true, true,  true],
	[false, true, true,  false],
];
const height = mapData.length;
const width = mapData[0].length;
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

function canMoveTo(pos){
	return pos.x >=0 && pos.x < width 
		&& pos.y >=0 && pos.y < height 
		&& mapData[pos.y][pos.x];
}

function moveNorth(){
	var pos = getDestination(playerPosition, 'North');
	if(canMoveTo(pos)){
		playerPosition.x = pos.x;
		playerPosition.y = pos.y;
		//思考为什么 playerPosition = pos 不可以?
	}
}
function moveSouth(){
	var pos = getDestination(playerPosition, 'South');
	if(canMoveTo(pos)){
		playerPosition.x = pos.x;
		playerPosition.y = pos.y;
	}
}
function moveWest(){
	var pos = getDestination(playerPosition, 'West');
	if(canMoveTo(pos)){
		playerPosition.x = pos.x;
		playerPosition.y = pos.y;
	}
}
function moveEast(){
	var pos = getDestination(playerPosition, 'East');
	if(canMoveTo(pos)){
		playerPosition.x = pos.x;
		playerPosition.y = pos.y;
	}
}

module.exports = {
	moveNorth,
	moveSouth,
	moveWest,
	moveEast,
	playerPosition
};

