//Function definition
function saymyname(){
    console.log("T");
    console.log("H");
    console.log("O");
    console.log("R");
}
saymyname //function reference
saymyname() //function execute or function call

function add(num1, num2){ //in js we don't give parameters types
    console.log(num1 + num2);
}
add(3, 4) //arguments
add(3, "a") //If number is not given then problem arises

const result = add(3, 5) //It will give value as undefined bcz. function is not returning anything
console.log(result); 

function substract(num1, num2){ //in js we don't give parameters types
    // let result = num1 - num2;
    // return result //After function return will not do any work
    return num1 - num2
}
const sub = substract(4, 3) //Now it will return
console.log(sub);

function loginUserMessage(username = "sam"){ //default value
    if(!username){ //or username === undefined, undefined and "" is considered false 
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Thor"));

//Shopping cart if we don't know how many arguments will come //used in projects
// function calculateCartPrice(...num1){ // ... here rest operator otherwise spread operator acc. to use case 
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 800)) //returns an array after packing argument

function calculateCartPrice(val1, val2, ...num1){ // ... here rest operator otherwise spread operator acc. to use case 
    return num1 //interviews
}
console.log(calculateCartPrice(200, 400, 800, 2000)) //200 -> val1, 400 -> val2, and others to num1 as array

const user = {
    username:"Thor",
    age:2000,
}

function handleObject(anyobject){ //function don't know what will come it depends on value inside parenthesis
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}
//Here we need to handle type safety or type checking in TS it's already there and here we do this via if else
handleObject(user)

handleObject({
    username:"sam",
    age:1000
})

const arr=[200, 400, 600, 800]
function returnSecondValue(anyarray){
    return`Second Value is: ${anyarray[1]}`
}
console.log(returnSecondValue(arr));
console.log(returnSecondValue([1, 2, 3, 4]));