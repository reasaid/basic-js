const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string'){return false;}
  let sampleActivityOfFloat = parseFloat(sampleActivity);
  if (isNaN(sampleActivityOfFloat) ) return false;
  if (sampleActivityOfFloat>MODERN_ACTIVITY || sampleActivityOfFloat<=0)return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY/sampleActivityOfFloat)/k;
  return Math.ceil(t);
};
