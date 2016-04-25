var colours = generateRandomColours(6);

var resetGame = document.querySelector("#resetGame");
var easy = document.querySelector("#easy");
var difficult = document.querySelector("#difficult");

var msgDisplay = document.querySelector("#msgDisplay");
var	h1 = document.querySelector("h1");
var chosenColour = pickRandomColour();

var displayedColours = document.querySelector("#displayedColours");//Selecting the displayedColours id in the span tag of h1 element.
displayedColours.textContent = chosenColour;
var	box = document.querySelectorAll(".box");


for (var i = 0; i < box.length; i++) {
	box[i].style.background = colours[i];
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
				this.style.background = "#487A21"; // changes selected box colour to match the background colour of the body
				msgDisplay.textContent = "Try Again!";// if incorrect change the message display to "Try Again".
			}
	});
}

easy.addEventListener("click", function(){
		this.classList.add("selected");//highlight the easy button button when selected		
		difficult.classList.remove("selected");//unhighlight the difficult button button when selected

		colours = generateRandomColours(3); // set the colours array to display 3 boxes instead of the default 6

		chosenColour = pickRandomColour();//choose a new random colour from array

		displayedColours.textContent = chosenColour;
		for (var i = 0; i < box.length; i++) {
			if(colours[i])
			{
				box[i].style.background = colours[i];// generate random colour for the 3 boxes on top
			}else{
				
				box[i].style.background = "none";//hide the bottom 3 boxes 
				box[i].style.border = "none";//hide the bottom 3 boxes border

			}
		}

});

difficult.addEventListener("click", function(){
	
		this.classList.add("selected");
		easy.classList.remove("selected");

		colours = generateRandomColours(6); // set the colours array to display 3 boxes

		chosenColour = pickRandomColour();//choose a new random colour from array

		displayedColours.textContent = chosenColour;
		for (var i = 0; i < box.length; i++) {
			
				box[i].style.background = colours[i];// generate random colour for the 3 boxes on top
							
				box[i].style.background = "block";//hide the bottom 3 boxes 
				box[i].style.border = "1px solid black";//sets border back to black

			}

});

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


		displayedColours.textContent = chosenColour;

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