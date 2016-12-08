var playerPosition ={x:1, y:2};
var mapData = [
	[false, true, false, true],
	[true,  true, true,  true],
	[true,  true, true,  true],
	[false, true, true,  false],
];


function moveNorth(){
	var destPosY = playerPosition.y - 1;
	if(destPosY >=0 && mapData[destPosY][playerPosition.x]){
		playerPosition.y = destPosY;
	}
}
function moveSouth(){
	var destPosY = playerPosition.y + 1;
	if(destPosY <= 3 && mapData[destPosY][playerPosition.x]){
		playerPosition.y = destPosY;
	}
}
function moveWest(){
	var destPosX = playerPosition.x - 1;
	if(destPosX >= 0 && mapData[playerPosition.y][destPosX]){
		playerPosition.x = destPosX;
	}
}
function moveEast(){
	var destPosX = playerPosition.x + 1;
	if(destPosX <= 3 && mapData[playerPosition.y][destPosX]){
		playerPosition.x = destPosX;
	}
}

module.exports = {
	moveNorth,
	moveSouth,
	moveWest,
	moveEast,
	playerPosition
};

