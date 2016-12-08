var playerPosition ={x:1, y:2};

function moveNorth(){
	playerPosition.y -= 1;
}
function moveSouth(){
	playerPosition.y += 1;
}
function moveWest(){
	playerPosition.x -= 1;
}
function moveEast(){
	playerPosition.x += 1;
}

module.exports = {
	moveNorth,
	moveSouth,
	moveWest,
	moveEast,
	playerPosition
};

