var playerPosition ={x:1, y:2};
var mapData = [
	[false, true, false, true],
	[true,  true, true,  true],
	[true,  true, true,  true],
	[false, true, true,  false],
];
const height = mapData.length;
const width = mapData[0].length;
const Direction = { N:1,E:2,W:3,S:4 }

function getDestination(currentPos, direction) {
	switch(direction){
		case Direction.N: return {x:currentPos.x, y:currentPos.y -1};
		case Direction.S: return {x:currentPos.x, y:currentPos.y +1};
		case Direction.W: return {x:currentPos.x -1, y:currentPos.y};
		case Direction.E: return {x:currentPos.x +1, y:currentPos.y};
	}	
}
function canMoveTo(pos){
	return pos.x >=0 && pos.x < width 
		&& pos.y >=0 && pos.y < height 
		&& mapData[pos.y][pos.x];
}

function moveNorth(){
	var pos = getDestination(playerPosition, Direction.N);
	if(canMoveTo(pos)){
		playerPosition.x = pos.x;
		playerPosition.y = pos.y;
		//思考为什么 playerPosition = pos 不可以?
	}
}
function moveSouth(){
	var pos = getDestination(playerPosition, Direction.S);
	if(canMoveTo(pos)){
		playerPosition.x = pos.x;
		playerPosition.y = pos.y;
	}
}
function moveWest(){
	var pos = getDestination(playerPosition, Direction.W);
	if(canMoveTo(pos)){
		playerPosition.x = pos.x;
		playerPosition.y = pos.y;
	}
}
function moveEast(){
	var pos = getDestination(playerPosition, Direction.E);
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

