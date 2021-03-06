/* 
* Score board functionality 
@ author: Daniel Hickey
*/
//todo: assign names to players playing
//

/***************Buttons************************/
var pOne = document.querySelector("#p1");
var pTwo = document.querySelector("#p2");
var reset = document.querySelector("#reset");
/**********************************************/
var inputNum = document.querySelector("input");//input tag of type="number"
var playingTo = document.querySelector("#playingTo");//span tags with display of maximum points needed
var p1Display = document.querySelector("#p1Display");//span tags with score display for player 1
var p2Display = document.querySelector("#p2Display");//span tags with score display for player 2
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
			p1Display.classList.add("theWinner");
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
			p2Display.classList.add("theWinner");
		}
		p2Display.textContent = p2Score;		
	}	
});

//reset the p1Display and p2Display to zero
reset.addEventListener("click", function(){	
	resetScore();
});

function resetScore(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("theWinner");
	p2Display.classList.remove("theWinner");
	gameOver = false;
}

inputNum.addEventListener("change", function(){
	playingTo.textContent = this.value; 
	win = Number(this.value);//Convert String to Number 
	resetScore();
});

