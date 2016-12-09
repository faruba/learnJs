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

//function moveNorth(){
//	var destPosY = playerPosition.y - 1;
//	if(destPosY >=0 && mapData[destPosY][playerPosition.x]){
//		playerPosition.y = destPosY;
//	}
//}
function moveNorth(){
}
//function moveSouth(){
//	var destPosY = playerPosition.y + 1;
//	if(destPosY <= 3 && mapData[destPosY][playerPosition.x]){
//		playerPosition.y = destPosY;
//	}
//}
function moveSouth(){
}
//function moveWest(){
//	var destPosX = playerPosition.x - 1;
//	if(destPosX >= 0 && mapData[playerPosition.y][destPosX]){
//		playerPosition.x = destPosX;
//	}
//}
function moveWest(){
}
//function moveEast(){
//	var destPosX = playerPosition.x + 1;
//	if(destPosX <= 3 && mapData[playerPosition.y][destPosX]){
//		playerPosition.x = destPosX;
//	}
//}
function moveEast(){
}
module.exports = {
	moveNorth,
	moveSouth,
	moveWest,
	moveEast,
	playerPosition
};

