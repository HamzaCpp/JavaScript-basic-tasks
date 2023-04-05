var a = "hAmZa";
//console.log( "your name is : " +a);
var firstLetter = a.slice(0,1);
var capitaliseFirstLetter = firstLetter.toUpperCase();
var RestofLetters = a.slice(1,a.length);
var lowerCaseRestLetters  = RestofLetters.toLowerCase();
var display = capitaliseFirstLetter + lowerCaseRestLetters;
console.log("your grammatically correct name is : " +display + " ,Whereas the original input was : " +a );
