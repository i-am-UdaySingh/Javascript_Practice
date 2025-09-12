const myArray = ["a", "b", "c", "d", "e"]

//foreach never returns anything to a variable 
const values = myArray.forEach((item) => {
    //console.log(item);
    return item 
})
// console.log(values);

//Filter //in this we directly write condition in call back function
const arr = [1,2,3,4,5] 
let newNums = arr.filter((num) => num > 4) //it also takes call back fuction and returns the values itself.
// console.log(newNums);  //output is an array


const arr2 = [1,2,3,4,5,6,7,8,9,0]
let newNums2 = arr.filter((num) => {
    num > 4
    return num // It will not return anything until return is explicitly used bcz. now we defined scope using {} and this will automatically return only objects.
})
// console.log(newNums);

const newNums3 = []
arr2.forEach((num) => {
    if (num > 4) {
        newNums3.push(num)
    }
})
// console.log(newNums3);


const myarray2 = [
{
    langname: "js",
    langfile:"java"
},
{
    langname: "java",
    langfile:"java"
},
{
    langname: "cpp",
    langfile:"c++"
}];

const userlang = myarray2.filter((lang) => lang.langfile == "java" ) //Filter original use case
console.log(userlang);
