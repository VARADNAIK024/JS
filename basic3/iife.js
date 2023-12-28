// Immediately invoked function expression (IIFE)

//interview Q    A FUNC WHICH IS IMMEDIATELY CALLED IS CALLED AS IIFE
//                IT IS USED TO REMOVE GOLBAL SCOPE/VARIABLE POLUTION

// function chai ()
// {
//     console.log('db connected');
// }
// chai()

(function chai ()
{
    console.log('db connected 2');
})(); //    IIFE FUN( ) 



//arrow func in iife
(() => {
    console.log("db connected 3");
})();

// same arrow fun but using parameters
((name) => {
    console.log(`My name IS ${name}`);

})("varu");

