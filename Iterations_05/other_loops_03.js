//for of

//Max use case
[{}, {}, {}, {}]

// const arr = [1,2,3,4,5]

// for (const i of arr) { //Can be used on strings, arrays, objects
//     console.log(i);
    
// }

//Maps

const map = new Map()
map.set('In', 'India')
map.set('Rus', 'Russia')
map.set('Fr', 'France')
map.set('In', 'India') //Unique don't create duplicates and areb in given order
// console.log(map);

// for (const [key, value] of map) { //Array destructure
//     console.log(key, ":-", value);
// }

//Objects

const myObj = {
    'game1':"NFS",
    'game2':"Spiderman",
}

// for (const [key, value] of myObj) { //Doesn't work for objects
//     console.log(key, ":-", value); 
// }

// for (const key in myObj) { // For objects also works
//    console.log(`${key} is ${myObj[key]}`);  
// }

//For in loop for array
const myArray = ["a", "b", "c", "d", "e"] //keys of array
for (const key in myArray) {  // Forof directly outputs value instead of keys i.e in forin
    // console.log(`The key ${key} has value ${myArray[key]}`);
}

//Map is non-iterable so it can't be used in forin loop 


//Max Usage foreach loop -> Higher order function

//Call back fuction don't have name

// myArray.forEach( function (item) {
//     console.log(item);
// } )


// myArray.forEach( (item) => {console.log(item);})

// function printMe(item) {
//     console.log(item);
// }

//Using the function for the loop
// myArray.forEach(printMe) //Here we only give funcion reference and doesn't execute it

// myArray.forEach((item, index, arr) => {
//     console.log(item, index, arr); //every single iteration has full access of array
    
// }) //Only item doesn't come other things also comes

//Max usage with array of objects
const myarray2 = [{
    langname: "js",
    langfile:"javascript"
},
{
    langname: "java",
    langfile:"java"
},
{
    langname: "cpp",
    langfile:"c++"
}]

//Iterate through array of objects
myarray2.forEach((item) => {
    console.log(item.langname);
})
