var colours = [
		"rgb(255, 0, 0)",
		"rgb(255, 255, 0)",
		"rgb(0, 255, 0)",
		"rgb(0, 255, 255)",
		"rgb(0, 0, 255)",
		"rgb(255 ,0 ,255)"
	];

var msgDisplay = document.querySelector("#msgDisplay");

var chosenColour = colours[3];

var colourChoice = document.querySelector("#colourChoice");//Selecting the colourChoice id in the span tag of h1 element.
colourChoice.textContent = chosenColour;
var	box = document.querySelectorAll(".box");

/*loops through the "box" class elements and also loops through colours array
  assigning corresponding values in array to each element cycled through*/
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
				changeColours();
							}else{
				this.style.background = "#487A21"; // changes selected box colour to match the background colour of the body
				msgDisplay.textContent = "Try Again!";// if incorrect change the message display to "Try Again".
			}
	});
}

function changeColours(colour){
	//for loop to cycle through squares
	for (var i = 0; i < box.length; i++) {
		box[i].style.background = chosenColour;
	}
	return;

	//change colour of all box classes and h1 element to match selected colour
	//box[i].style.background = chosenColour;

}