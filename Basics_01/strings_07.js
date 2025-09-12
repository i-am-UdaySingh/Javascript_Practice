const name = "Thor" //Behind the scene it also invokes object
const count = 50
// console.log(name +" " + count + " Value") //don't use this outdated
console.log(`Hello my name is ${name} and my accounts are ${count}`) //strings interpolation //Here we make placeholders and directly inject variables
//more readable and reliable and mordern way

//Another method to declare string //new keyword means use of object of js
const gameName = new String('IGI-2') //inside string constructor is the name of game
console.log(gameName[0]); //object has key value pair as 0:"I"
console.log(gameName.__proto__); //actually output is not empty when seen on developer console
console.log(gameName.length);

//Prototype usage
console.log(gameName.toLowerCase()); //doesn't change original value bcz. it's stack memory
console.log(gameName.charAt('1'));
console.log(gameName.indexOf('G')); //for not found returns -1

//Substrings
const newstring = gameName.substring(0,3); //cant use -ve values
console.log(newstring); 

//Slice
let anotherstring = gameName.slice(-5, 3); //Can also provide negative values
console.log(anotherstring);
anotherstring = gameName.slice(-4);
console.log(anotherstring);

//Trim
const newstr1 = "   Thor    "
console.log(newstr1);
console.log(newstr1.trim());
 
const url = "https://Thor.com/Thor%20Ragnarok" //Urrl codig convert whitespace into %20 like stuff
//Need to overcome this 
console.log(url.replace('%20', ' '));
console.log(url.replace('%20', '-'));

//Includes
console.log(url.includes('Thor')); // Asks if it includes Thor in it 

//split
console.log(gameName.split('-')); //Gives array of strings based on seperator.

