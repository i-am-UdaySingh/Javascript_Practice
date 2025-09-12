//Declaration of objects
//Singleton(by constructor declaration), literals declare(not singleton)

//Singleton
Object.create

//Object literals declaration
const mysym = Symbol("Key1") // symbol declaration
const jsUser = {
    name: "Thor",// By default system consider key name as "name"(but we don't write like this) and value can be any datatype 
    "movie": "Thor Ragnarok",//we can't access this value using .
    mysym: "mykey1", // we can't use symbol in object using this method
    [mysym]:"mykey1", //To use this as symbol //This means we are reffering to above declared symbol
    age: 18,
    location: "Asgard",
    email: "thor@marvel.com",
    isLoggedIn: false,
    lastLoginDays: ["MON", "FRI", "SUN"]
}

console.log(jsUser.email); //Not right way to access .But not wrong either bcz. there is even more 
//Better way to access this object
console.log(jsUser["email"]); //Bcz. in background email is stored as a string
console.log(jsUser.mysym); 
console.log(jsUser[mysym]); //To access symbol // Interview

//Change values of object
jsUser.isLoggedIn = true
console.log(jsUser);

//To lock objects so that no changes can occur we use freeze
//Object.freeze(jsUser)
jsUser.isLoggedIn = false //Now it can't be changed
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Thor"); 
}

console.log(jsUser.greeting()); //bcz. its a function that's why

jsUser.greetingtwo = function(){
    console.log(`Hello Thor this is your email: ${this.email}`); //To reference same object use this in curly braces
}
console.log(jsUser.greetingtwo());


/*******************************OBJECT 2***************************/
//Singleton
const user = new Object()
user.id = "123abc"
user.name = "rambo"
user.isLoggedIn = false
console.log(user);

//Nesting of objects
const otheruser = {
    email:"jumbo@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Jumbo",
            lastname:"rambo"
        }
    }
}
console.log(otheruser.fullname?.userfullname.lastname); //optional chaining
//? give protection that if full name doesn't exist api response
const obj3 = {user, otheruser} // obj inside obj
console.log(obj3);
const obj4 = Object.assign({}, user, otheruser) //first is target and others are sources
console.log(obj4);
 
//Imp: Max usage spread
const obj5 = {...user, ...otheruser}
console.log(obj5);

//Max usage when value comes from database i.e array of objects

const dataUser = [     //Like this values comes
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:2,
        email:"g@gmail.com",
    },
]

console.log(dataUser[1].email);

console.log(Object.keys(user)); //method //Output dataype array
//That is all keys are in array //Very useful
console.log(Object.values(user));
console.log(Object.entries(user)); //array insie an array //very less use
console.log(user.hasOwnProperty('isLoggedIn')); //to ask if it has this value or not used in loops 
//so that it doesn't crash

/**********************************Objects 3************************************/

//Destructuring of objects (also of array but we will not learn it now very rare)

//max. usage
const course = {
    coursename: "Javascript",
    Instructor: "Self",
    price:"Free",
}
//retrieval method syntax change only

//console.log(course.Instructor);

//For destructure
const{Instructor: ins} = course //we can also provide alias using : inside extraction value in curly braces
//console.log(Instructor);  //Makes code more clean that's why used
console.log(ins);  //Makes code more clean that's why used

//react method
// const navbar = ({company}) => { //props.company bar bar nhi krte to use krte h destructuring 

// }

// navbar(company = "Ragnarok")


//API'S
//Without name it is treated as JSON  (JSON se api call hoti h)
// {
//     "coursename": "Javascript", //Here keys are also strings
//     "Instructor": "Self",
//     "price": "Free",

// }

//Sometimes ApPI'S also in array
[
    {},
    {},
    {},
]

//Randomuserme api
//JSON formatter

