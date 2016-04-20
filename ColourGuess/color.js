var colours = [
		"rgb(255,0,0)",
		"rgb(255,255,0)",
		"rgb(0,255,0)",
		"rgb(0,0,255)",
		"rgb(0,255,255)",
		"rgb(255,0,255)"
	]

	var	box = document.querySelectorAll(".box");
	/*loops through the "box" class elements and also loops through colours array
	  assigning corresponding values in array to each element cycled through*/
	for (var i = 0; i < box.length; i++) {
		box[i].style.background = colours[i];
	}