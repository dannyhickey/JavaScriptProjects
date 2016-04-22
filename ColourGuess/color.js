var colours = [
		"rgb(255, 0, 0)",
		"rgb(255, 255, 0)",
		"rgb(0, 255, 0)",
		"rgb(0, 255, 255)",
		"rgb(0, 0, 255)",
		"rgb(255 ,0 ,255)"
	];

var resetColours = document.querySelector("#resetColours");
var msgDisplay = document.querySelector("#msgDisplay");
var	h1 = document.querySelector("h1");
var chosenColour = randomColour();

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
				changeAllColours();
							}else{
				this.style.background = "#487A21"; // changes selected box colour to match the background colour of the body
				msgDisplay.textContent = "Try Again!";// if incorrect change the message display to "Try Again".
			}
	});
}

//Changes all colours  to the correct colour when the correct is selected.
function changeAllColours(){
	//for loop to cycle through box classes
	for (var i = 0; i < box.length; i++) {
		box[i].style.background = chosenColour;
		h1.style.background = chosenColour;
	}


	//change colour of all box classes and h1 element to match selected colour
	//box[i].style.background = chosenColour;

}



resetColours.addEventListener("click", function(){
		
		colourGenerate();
		
	});

//This function generates the colours for the beginning of the game.
function colourGenerate(){


			msgDisplay.textContent = "";
			/*loops through the "box" class elements and also loops through colours array
  			assigning corresponding values in array to each element cycled through*/
			for (var i = 0; i < box.length; i++) {
			box[i].style.background = colours[i];
			h1.style.background = "none";// Removes the background style of the h1
		}
}

function randomColour(){
	var rand = Math.floor(Math.random() * colours.length);
	return colours[rand];
}