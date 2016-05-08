//Player constructor function
function Player( slots) {
  this.idNum = slots.idNum;
  this.name = slots.name;
  this.dob = slots.dob;
};

Player.instances = {};//initialize player instances
