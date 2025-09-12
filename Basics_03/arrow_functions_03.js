const user ={
    username:"Thor",
    price:999,
    welcomeMessage: function(){ // to refer current context i.e scope is done through this
        console.log(`Hello ${this.username}`); //we don't write username directly
        console.log(this);//current context
    }
}
user.welcomeMessage() //() bcz. it's a function
user.username = "Ironman"
user.welcomeMessage() //() bcz. it's a function
user['welcomeMessage']() //This method is used like this in this case

//Now current context is empty bcz. we are in node env.(standalone js engine) and it refers to empty object
//Bcz. there is no global context but in dev console it's different as it has window as global object
console.log(this);

function gen(){
    console.log(this);
}
gen()
function gen2(){
    let usrname = "Thor"
    console.log(this.username); //will give undefined  //In functions it doesn't work like objects
}
gen2()

// const gen3 = function(){
//     let usrname = "Thor"
//     console.log(this.username);
// }
// gen3()

//Arrow function () => {}
const gen3 = () => {
    let usrname = "Thor"
    console.log(this); //We can't use this in arrow function
}
gen3()

//explicit return

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3, 4));

//Implicit return - arrow function one more usage

// const addTwo = (num1, num2) => num1 + num2
//Very much used in react
// const addTwo = (num1, num2) => (num1 + num2) //don't need to write return in paranthesis bracket but not the case with {}
const addTwo = (num1, num2) => ({username:"Thor"}) //To return an object
console.log(addTwo(3, 4));
