//Stack(Primitive), Heap(Non-Primitive) memory

//Stack memory example
let myname = "Thor"
let anothername = myname
anothername = "Ragnarok"
console.log(myname);
console.log(anothername);

//Heap memory example
let userOne = {
    name:"Thor",
    email:"thor@gmail.com"
}
let userTwo = userOne
userTwo.name = "Ragnarok"
console.log(userOne.name);
console.log(userTwo.name);
