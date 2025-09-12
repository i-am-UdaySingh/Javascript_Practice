"use strict"; //all js code will be treated as newer version of js
// alert(3+3) 
/* we are using nodejs not browser.In nodejs it has different syntax so we can't use it.You can use this in console of developer
option in browser */
console.log(3
    +3) //code readability should be high //avoid this
console.log("Uday") //good practice and also avoid semicolons bcz. in react and node these are generally avoided.

//documentation:  alert mdn(mozilla recommended), https://tc39.es/ecma262/(official)

let name = "Uday" //string ""
let age = 18 // number
let isLoggedIn = true //bool
//bigint
//number
//string
//boolean
//null => standalone value
//undefined =>value not assigned
//symbol =>For uniqueness in components in react


//object
// console.log(typeof "Uday")
// console.log(typeof age)
console.log(typeof null) //This is exception or language fault that this is an object.
// console.log(typeof undefined)//undefined type in js

//Typeof result for special datatypes:
//bigint
const bigno = 3263523555875553535n
console.log(typeof bigno)
//array
const heroes = ["Batman", "Superman", "Shaktiman"]
console.log(typeof heroes);
//objects 
let account = {
    name:"Thor",
    age:2000,
}
console.log(typeof account);
//function
const helloworld = function(){
    console.log("Hello World")
}
console.log(typeof helloworld); //Remember this is function object not just function acc. to docs
//Symbol
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(typeof id)
console.log(typeof anotherid)
console.log(id === anotherid);

