const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
// Count of turns  (log n ) - 1
let turns = (2 ** disksNumber) - 1;
let speedOnSec = turnsSpeed / 3600;
let allSpeed =  turns / speedOnSec;
let objectHanoi = 
{ turns: turns,
  seconds: Math.floor(allSpeed)};

  return objectHanoi;
}
