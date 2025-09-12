//Reduce //Used in shopping cart billing
const mynums = [1,2,3,4,5,6,7,8,9]
let mytotal = mynums.reduce(function(acc, curval) {
    console.log(`accumulator:${acc} and Current value:${curval} `);
    return acc + curval
},0) //0 is inital value assigned to accumulator
console.log(mytotal);

const mytotal2 = mynums.reduce((acc, curval) => (acc + curval), 0 )
console.log(mytotal);

const shoppingCart = [
{
    itemname:"course1",
    price:2999
},
{
    itemname:"course2",
    price:3999
},
{
    itemname:"course3",
    price:4999
},
{
    itemname:"course4",
    price:5999
}]

const total= shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(total);
