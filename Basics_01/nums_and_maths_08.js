const score = 100 //automatically detects number type
// console.log(score);
// console.log(typeof score);
//Explicitly defining that it should be no. only i.e manually definition to invoke only no. object
const balance = new Number(100000) //More sure that its no. only other way to define
//new object define that is of no. type
//But now it's an object in this way of definition it specificially casted that its a number in the object
// console.log(balance);
// console.log(typeof balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //Used if not to show client high precision occured during calculations.
//ecommerce application specifically
const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); //Use cautiously as it gives preference before decimal point values 
//And roundsoff accordingly 
//value dependency you should know 100% value 3 will only come before decimal not other values

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US')); // US standards
// console.log(hundreds.toLocaleString('en-IN')); //Indian standards

//max and min value and other various operations with no.s
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// console.log(Number.NaN);

//**********************Maths************************/
// console.log(Math); //OBJECT:It has many property can be seen in developer console
// console.log(Math.abs(-4)); //-ve to +ve value
// console.log(Math.round(6.378));
// console.log(Math.ceil(6.378)); //can control roundoff to upper value
// console.log(Math.floor(6.378)); //control roundoff to lower value
// console.log(Math.min(24,4,53,79,86,7,6,544,656)); //min value
// console.log(Math.max(6,5,7,3,9)); //max value

//maximum usage random
console.log(Math.random()); //Always value b/w 0 and 1
console.log((Math.random()*10) + 1); //Always value b/w 1 and 10 +1 to avoid 0.00 case no.s 
console.log(Math.floor(Math.random()*10) + 1); //Always value b/w 1 and 10 +1 to avoid 0.00 case no.s 
//Parenthesis for accurate result
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min + 1) + min)); //General Formula
console.log(Math.random()); //
