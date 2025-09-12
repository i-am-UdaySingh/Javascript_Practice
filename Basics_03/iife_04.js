//Immediately invoked function expressions(IIFE)
//1. No global scope impact on function
//2. function immediately run
// function db(){
//     console.log("DB Connected");
    
// }
// db() 

//But now for global scope pollution iife is used
(function db(){
    //Named IIFE
    console.log("DB Connected One");
})();//(Semicolon is compulsory bcz. iife doesn't know when to stop context) //immediately invoke (IIFE)
//()() -> 1.Function definition + 2.Execution

( () => {
    console.log("DB Connected Two");
})();

( (name) => {
    console.log(`DB Connected ${name}`);
})("Mysql");//Always remeber to end iife with ; if need to write 2 iife especially