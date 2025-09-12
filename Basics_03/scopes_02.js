//{} This is scope for any variable but not in object as obj is declaration 
// global scope
let a = 40 //for all

//block scope
if(true){ 
    let a = 10 //only for this scope sholdn't go out
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
//console.log(c); //This is the problem with var as it goes out of scope means acts as global variable 

//scope is diff in browser(developer console windows) and in code env. using node global scope is diff

//Nested scope //Closure
function one(){
    const username = "Thor"
    function two(){
        const website = "google"
        console.log(username); //For this username is global means child can access parent function
    }
    // console.log(website); //will not work bcz. scope ended
    
    two()
}
one()

//Function declaration technique
console.log(addOne(3)); //This will not give error
function addOne(num){
    return num+1
}
console.log(addOne(3));

console.log(addTwo(5)); //This will give error //bcz. declarion + value store in variable -> hoisting -> execution context is made
const addTwo = function (num){ //This is sometimes called expression even it's function
    return num + 2             //Bcz. variables in js are powerful and can hold any value
}
console.log(addTwo(5));

 