const mynums = [1,2,3,4,5,6,7,8,9,10]
//const nums = mynums.map((num) => num+10) //returns value //It iterates on all always and doesn't filter on condition
//const nums = mynums.map().map().filter() //Chaining its just an example

//Usage of Chaining
const nums = mynums
              .map((num) => num*10) //It's result is passed in 2nd chain
              .map((num) => num + 1)
              .filter((num) => num >= 40 )
console.log(nums);
