const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
 if(!Array.isArray(members) ) return false;
  if(members.length ===0) return false;
 let memberName = [];
 members.forEach(element => {
   if(typeof element === 'string'){
    let i = 0; 
    while(element[i]===" "){
      i++}
     memberName.push(element[i].toUpperCase());
   }
 });
 if(memberName.length ===0) return false;
 return memberName.sort().join("");
};
