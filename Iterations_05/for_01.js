//for

for (let index = 0; index < 10; index++) { //CTRL+D shortcut for accessing same word in diff places (multi-cursor)
    const element = index;
    //console.log(element);
}

for (let i = 1; i <= 10 ; i++) {
    //console.log(`Outer loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        //console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArray = [1, 2, 3, 4, 5]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}

//Break and Continue

//Break

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is ${i}`);   
// }

//Continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);   
}