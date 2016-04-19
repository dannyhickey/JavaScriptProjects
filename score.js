/* 
* Score board functionality 
@ author: Daniel Hickey
*/
//todo: assign names to players playing
//

/***************Buttons************************/
var pOne = document.querySelector("#p1");
var pTwo = document.getElementById('p2');
var reset = document.querySelector('#reset');
/**********************************************/

var p1Display = document.querySelector("#p1Display");//span tags with number display
var p2Display = document.querySelector("#p2Display");//span tags with number display
var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var win = 5;

//Increment player one score
pOne.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if (p1Score === win) {
			gameOver = true;
			p1Display.style.color = "red";
		}
		p1Display.textContent = p1Score;		
	}
	
});

//Increment player two score
pTwo.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if (p2Score === win) {
			gameOver = true;
			p2Display.style.color = "red";
		}
		p2Display.textContent = p2Score;		
	}	
});

//reset the p1Display and p2Display to zero
reset.addEventListener("click", function(){
	
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.style.color = "black";
	p2Display.style.color = "black";

	gameOver = false;


});
