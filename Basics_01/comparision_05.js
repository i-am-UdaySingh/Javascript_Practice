// console.log(2<1);
// console.log(2<=1);
// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);//avoid
//may not give predictable result sometimes so do ensure the comparision is between same datatype.

// console.log(null>0);
// console.log(null==0);//avoid
// console.log(null>=0); //value conversion problem no predictable result


//imp : == and comparision works differently comparision op first converts it to 0 then compare i.e why 


//null>=0 is true and null>0 is false
//so don't do this

// console.log(undefined>0);//always false
// console.log(undefined==0);//always false
// console.log(undefined>=0);//always false //avoid

// === -> strict check : not only checks number but also checks for datatype too
console.log("2" === 2);
console.log(2 === 2);
//do clean coding