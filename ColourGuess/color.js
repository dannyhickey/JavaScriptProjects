var colours = generateRandomColours(6);

var resetGame = document.querySelector("#resetGame");
var msgDisplay = document.querySelector("#msgDisplay");
var	h1 = document.querySelector("h1");
var chosenColour = pickRandomColour();

var colourChoice = document.querySelector("#colourChoice");//Selecting the colourChoice id in the span tag of h1 element.
colourChoice.textContent = chosenColour;
var	box = document.querySelectorAll(".box");


for (var i = 0; i < box.length; i++) {
	box[i].style.background = colours[i];
	//adding click event listener to each box.
	box[i].addEventListener("click", function()
	{
		//get the colour of selected square
		var colourClicked = this.style.background;
		//compare the colour to the picked colour
		if(colourClicked === chosenColour)
			{	
				msgDisplay.textContent = "Correct!";// if correct change the message display to "Correct".
				changeAllColours(colourClicked);
							}else{
				this.style.background = "#487A21"; // changes selected box colour to match the background colour of the body
				msgDisplay.textContent = "Try Again!";// if incorrect change the message display to "Try Again".
			}
	});
}

//Changes all colours  to the correct colour when the correct is selected.
function changeAllColours(colour){
	//for loop to cycle through box classes
	for (var i = 0; i < box.length; i++) {
		box[i].style.background = colour;
		h1.style.background = colour;
	}
}



resetGame.addEventListener("click", function(){
		//generate all new colours
		colours = generateRandomColours(6);

		//choose a new random colour from array
		chosenColour = pickRandomColour();


		colourChoice.textContent = chosenColour;

		for (var i = 0; i < box.length; i++) {
		box[i].style.background = colours[i];	
		}
		h1.style.background = "none";// Removes the background style of the h1
	
	});


function pickRandomColour(){
	var rand = Math.floor(Math.random() * colours.length);
	return colours[rand];
}

function generateRandomColours(num)
{
	//make empty array
	var arr = [];
	//add "num" random colours to the array
	for (var i = 0; i < num; i++) {
		//push random colour to the array
		arr.push(randomColour());
	}
	return arr;
}

function randomColour(){
	//choose a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	
	//choose a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	
	//choose a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);

	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}