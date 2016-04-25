var numOfBoxes = 6;//variable to store the number of boxes to be displayed
var colours = [];
var chosenColour;

var resetGame = document.querySelector("#resetGame");
var difficulty = document.querySelectorAll(".difficulty");

var msgDisplay = document.querySelector("#msgDisplay");
var	h1 = document.querySelector("h1");

var displayedColours = document.querySelector("#displayedColours");//Selecting the displayedColours id in the span tag of h1 element.
displayedColours.textContent = chosenColour;
var	box = document.querySelectorAll(".box");

init();

function init(){
	difficultyButtons();

	displayBoxes();

	reset();

}

function displayBoxes()
{
	for (var i = 0; i < box.length; i++) {
		
		//adding click event listener to each box.
		box[i].addEventListener("click", function()
		{
			//get the colour of selected box
			var colourClicked = this.style.background;
			//compare the colour to the picked colour
			if(colourClicked === chosenColour)
				{	
					msgDisplay.textContent = "Correct!";// if correct change the message display to "Correct".
					changeAllColours(colourClicked);
					resetGame.textContent = "Play Again";
								}else{
					this.style.background = "#6666AC"; // changes selected box colour to match the background colour of the body
					msgDisplay.textContent = "Try Again!";// if incorrect change the message display to "Try Again".
				}
		});
	}
}

function difficultyButtons()
{
	//difficulty buttons event listeners
	for (var i = 0; i < difficulty.length; i++) {
		difficulty[i].addEventListener("click", function(){
			difficulty[0].classList.remove("selected");
			difficulty[1].classList.remove("selected");
			difficulty[2].classList.remove("selected");
			difficulty[3].classList.remove("selected");
			this.classList.add("selected");
			//this.textContent === "Easy" ? numOfBoxes = 3: numOfBoxes = 6;

			if(this.textContent === "Easy")
			{
				numOfBoxes = 3;
			}
			else if(this.textContent === "Difficult")
			{
				numOfBoxes = 6;
			}
			else if(this.textContent === "Extreme")
			{
				numOfBoxes = 9;
				
			}else if(this.textContent === "Super-Extreme")
			{
				numOfBoxes = 15;

			}
			reset();
		});
	}	

}


function reset(){
		msgDisplay.textContent = "";

		//generate all new colours
		colours = generateRandomColours(numOfBoxes);

		//choose a new random colour from array
		chosenColour = pickRandomColour();

		resetGame.textContent = "Reset";


		displayedColours.textContent = chosenColour;//displays the colour in the span with id displayedColours

		for (var i = 0; i < box.length; i++) {
			if (colours[i]) {
			box[i].style.display = "block";	
			box[i].style.background = colours[i];
			}else{
			box[i].style.display = "none";				
			}
		}
		h1.style.background = "#722626";// Sets the background of the h1 back to its original colour
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
		reset();	
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