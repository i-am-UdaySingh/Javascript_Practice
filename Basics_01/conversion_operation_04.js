let score = "33abc" //also see for null nad undefined if entered
//console.log(typeof score)
//console.log(typeof(score))
// if we only want to do operation on numbers only even if the requested datatype is different
let valueInNumber = Number(score) //First letter always capital while type conversion bcz. of classes
//console.log(typeof valueInNumber)
//console.log(valueInNumber) //Also check if converted is not Of NAN(not a no. type) 

//bcz. someone can input mix of no.s //don't rely on no.s
//null gives 0, undefined NAN, bool 1 or 0 and string that cannot be converted NAN so be aware
//NAN has type no.

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)
//1 = true, 0 = false, "" = false, "name" = true 

let number = 33
let string = String(number)
//console.log(string);
//console.log(typeof string);
//*********************************Operations************************************//
let value=3
let negvalue= -value
//console.log(negvalue);

//imp: console.log(2**3); //2 raise to the power 3 **(meaning)

let s1 = "Hello"
let s2 = " World"
let s3 = s1 + s2
console.log(s3);

//complex situations
// console.log("1" + 2); 
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + "2" + "2");
// console.log(1 + 2 + "2"); //depends on the first type acc. to ECMA
//But don't be dependent on these it's not used in real world use parenthesis or other readable method
//And don't be messy 
// console.log(true)
// console.log(+true) //not good to write bcz. it's confusion code
// console.log(+"") //not good to write bcz. it's confusion code(tricky conversion not to do)

let n1, n2, n3
n1=n2=n3=2 + 2 //( don't do this tricky behaviour not works in companies)

let gamecounter=100
gamecounter++ // prefix and postfix learn about it
console.log(gamecounter);

