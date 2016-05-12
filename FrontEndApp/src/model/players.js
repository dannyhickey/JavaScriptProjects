//Player constructor function
function Player( slots) {
  this.idNum = slots.idNum;
  this.name = slots.name;
  this.dob = slots.dob;
};


Player.instances = {};//initialize player instances

//The Player.add procedure takes care of creating a new Player instance and adding it to the Player.instances collection 
Player.add = function (slots) {
  var player = new Player(slots);
  // add Player to the Player.instances collection
  Player.instances[slots.idNum] = player;
  console.log("Player " + slots.idNum + " created!");
};

//Retrieving the player table that has been stored as a large 
//string with the key "players" from Local Storage with the help of the assignment
playersString = localStorage["players"];

//Converting the player table string into a corresponding entity table 
//players with player rows as elements, with the help of the built-in procedure JSON.parse: 
players = JSON.parse(playersString);

