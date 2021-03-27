const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
if(Array.isArray(arr)) {
  let transArr = [];
 
for(let i = 0;i<arr.length;i++){
  if(arr[i] === '--discard-next'){
    if(i!==arr.length) i++;;
      
  }else
  if(arr[i] === '--discard-prev'){
    if(i!==0 && arr[i-2] !== '--discard-next' && arr[i-1] !== '--discard-next') transArr.pop();
  }else
  if(arr[i] === '--double-next'){
    if(i!==arr.length-1) transArr.push(arr[i+1])
  }else
  if(arr[i] === '--double-prev'){
    if(i!==0 && arr[i-2] !== '--discard-next' && arr[i-1] !== '--discard-next') transArr.push(arr[i-1]);
  }else{
    transArr.push(arr[i]);
  }
}
 
for(let x=0;x<transArr.length; x++){
  if(transArr[x]===false){
    transArr.slice(transArr[x],1);
  }
}

return transArr;} 
else throw Error('Error!')
};
