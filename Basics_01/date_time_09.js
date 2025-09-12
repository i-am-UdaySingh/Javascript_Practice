let mydate = new Date()  //date object is formed
console.log(mydate);
console.log(typeof mydate);
console.log(mydate.toString());
console.log(mydate.toDateString);
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleTimeString());

//let ourDate = new Date(2023, 0 ,27)
//let ourDate = new Date(2023, 0 ,27, 5, 27) //Increase in precisison
//let ourDate = new Date("2023-01-14") // yyyy/mm//dd here months starts from 1 not 0
let ourDate = new Date("01-12-2023") // mm/dd/yyyy
console.log(ourDate.toDateString()); //Months start with index 0
console.log(ourDate.toLocaleString());

let timestamp = Date.now() //Remember 
console.log(timestamp); //in milliseconds from 1st jan 1970.
console.log(ourDate.getTime()); //in milliseconds from 1st jan 1970.For easy comparision 
//And always use in comparision
//Now to display in seconds
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getDay());
console.log(newdate.getMonth() + 1 ); //For accuracy(so end user don't get confuse )
console.log(newdate.getHours());
console.log(newdate.getTime());
console.log(newdate.getSeconds());

// max usage
newdate.toLocaleString('default', {
    weekday:"long", //we can customize accordingly
    //shortcut CTRL+SPACEBAR for suggestion of parameters

})
