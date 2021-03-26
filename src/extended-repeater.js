const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strCut=str;
  result = "";
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;
  if (repeatTimes === undefined) repeatTimes = 1;
  if (separator === undefined) separator = "+";
  if (addition === undefined) addition = "";
  if (additionRepeatTimes === undefined) additionRepeatTimes = 1;
  if (additionSeparator === undefined) additionSeparator = "|";
  for (let i = 0; i < additionRepeatTimes; i++){
    if (i == additionRepeatTimes-1){
      strCut += addition + separator;
    }else{
      strCut += addition + additionSeparator;
    }
  }
  for (let i = 0; i < repeatTimes; i++){
    if(i == repeatTimes - 1){
      result += strCut.substr(0, strCut.length-separator.length);
    }else{
      result += strCut;
    }
  
  }
  return result;
  };
    