var firstString = "I am a";
var secondString = "Kalvian";
var concatenatedString = firstString + " " + secondString ;
console.log(concatenatedString)

var givenString = "If you fail, never give up because FAIL means First Attempt In Learning." 
console.log(givenString)

var someString = "JavaScript"
var stringLength = someString.length
console.log('Length of the string:' + stringLength)

var originalString = "I love programming";
var modifiedString = "Javascript programming";
console.log(modifiedString);

var myString = "Kalvium"
console.log(myString.repeat(3))

var myString = "I am a Kalvian"
var stringArray = myString.split(" ");
console.log(stringArray)

var myString = "Time and tide wait for none"
var index = myString.indexOf("Ti")
console.log("Index of Ti:" +index)

var myString = "If life gives you lemons make lemonade"
var includeLemons = myString.includes("lemons")
if (includeLemons){
  console.log("The string includes the word lemons.");
}else{
  console.log("The string dosenot contain the word lemons.");
}

var myString = "You must be the change you wish to see in the world.";
var wordChange = myString.slice(19, 25);
console.log("Word 'change': " + wordChange);
var wordWorld = myString.substring(myString.lastIndexOf("world"), myString.length);
console.log("Word 'world': " + wordWorld);