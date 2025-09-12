//if 
//Comparision Operators : >,<,<=,>=,==,!=,===,!==

const score = 200
if (score<=200) {
    const power = "fly"
    console.log(`User power is: ${power}`);
    
}

const balance = 1000
// if (balance > 500) console.log("Test"); //Implicit scope
// if (balance > 500) console.log("Test"), console.log("Test2"); //Very much unreadable not to write this
//Multiple statements in Implicit scope

// if (balance < 500) {
//     console.log("Less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");    
// }

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard) {
    console.log("Allowed to buy courses"); //  || for OR 
}
