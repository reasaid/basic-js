const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr) )
		return 0; 
    let count = 1;
    function  isNested(arr){
      let isWork=false;
      arr.forEach((element) =>{
       if(Array.isArray(element)) isWork= true;
      });
      return isWork;
    };
   if (isNested(arr)){
      let nestedArray = arr.flat();
     return count + this.calculateDepth(nestedArray);
   }
   return count;
  }

}


