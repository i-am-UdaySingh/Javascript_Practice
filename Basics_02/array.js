//array
const myarray = [0, 1, 2, 3, true, "Jumbo"]
const myarray2 = new Array(1,2,3,4) //Another method of array declaration
console.log(myarray[4]); //accessing element

//array methods
myarray.push(6) //add elements in array
console.log(myarray);
myarray.pop() //last element remove
console.log(myarray);
myarray.unshift(6) //adds in starting of array not suitable bcz. load on resouce and time bcz. whole array shifts in memory.
console.log(myarray);
myarray.shift(); //works like pop
console.log(myarray);
console.log(myarray.includes(19)); //bool type
console.log(myarray.indexOf('Jumbo')); //-1 not found otherwise index

const newarray = myarray.join(); //Converts array to string + bind elements
console.log(myarray);
console.log(newarray);
console.log(typeof newarray);

//slice and splice 
//original array
console.log("A ", myarray);
//slice
const myn1 = myarray.slice(1, 3) //It doesn't manipulate original array
console.log(myn1);
console.log("B ", myarray);
//splice
const myn2 = myarray.splice(1, 3) //manipulate original array
console.log("C ", myarray);
console.log(myn2);

/************************************arrays2*************************************/

//Arrays Operations
const heroes = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman" ]
//push
// heroes.push(dc) // not good way of merging 2 arrays //do stuffs in existing array
// console.log(heroes);
// console.log(heroes[3][1]); //Accessing array inside array
//concat //need to hold its value
const cat_heroes= heroes.concat(dc) //returns new array
console.log(cat_heroes)

//new and easy method is spread method glass example
const newHeroes = [...heroes, ...dc]
console.log(newHeroes);

//rarely used but imp to know
const otherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usableArray = otherArray.flat(Infinity) //Here we specify depth and its good but we are using infinity as it find itself for now
console.log(usableArray);

//Most used
console.log(Array.isArray("Thor")); //Ask if its an array
console.log(Array.from("Thor"));//Any datatype changes to array if inserted inside the from prototype
console.log(Array.from({name:"Thor"})); // Interesting
//Remember if it can't form array it will give empty array


let score1 = 100
let score2 = 101
let score3 = 102
console.log(Array.of(score1, score2, score3));

