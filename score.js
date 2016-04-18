/***************Buttons************************/
var pOne = document.querySelector("#p1");
var pTwo = document.getElementById('p2');
var reset = document.querySelector('#reset');
/*********************************************/

var p1Display = document.querySelector("#p1Display");//span tags with number display
var p2Display = document.querySelector("#p2Display");//span tags with number display
var p1Score = 0;
var p2Score = 0;

//Incremtent player one score
pOne.addEventListener("click", function(){
	p1Score++;
	p1Display.textContent = p1Score;
	
});

//Incremtent player two score
pTwo.addEventListener("click", function(){
	p2Score++;
	p2Display.textContent = p2Score;
	
});

//reset the p1Display and p2Display to zero
reset.addEventListener("click", function(){
	
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;


});
