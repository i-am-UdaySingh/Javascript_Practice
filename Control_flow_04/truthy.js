const useremail = []
// if (useremail){
//     console.log("Got it");    
// }else{
//     console.log("Didn't get");
// }
if (useremail.length === 0){
    console.log("Array empty");    
}else{
    console.log("Didn't get");
}
//for object
const myobj = {}
if (Object.keys(myobj).length === 0){
    console.log("Object empty");
    
}
//Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
//Truthy values
//"0", "false", " ", [], {}, function(){}

// Nullish Coalescing Operator(??): null, undefined
let val1; 
// val1 = 5 ?? 10 //Used when data is fetched from database
// val1 = null ?? 10 //Safety check
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 //after null or undefined the first value will be assigned only
console.log(val1);

//Ternary operator condition ? true : false
