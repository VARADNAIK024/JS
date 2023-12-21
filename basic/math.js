console.log (Math.abs(-8)); // gives -ve value in positive 

console.log(Math.round(5.3)) // Gives u answer close to that decimal if 0.1 0.5 = 5
console.log(Math.round(5.6)) // if greater then 0.5 t0.10 its = 6

console.log(Math.ceil(4.1));// always give upper value ans = 5
console.log(Math.floor(4.9))//  always give lower value ans = 4

console.log(Math.min(2,5,8,1,6));
console.log(Math.max(1,6,8,7,3,9));
 
//MOST IMPORT TOPIC of math is RANDOM ()

console.log( Math.random());// return values between 0 to 1 ;
console.log((Math.random() * 10 )+ 1); // * 10 is used to shift one decimal  &   +1 is used for not getting zero 

const max = 25;
const min = 10;
 
console.log(Math.floor(Math.random() * (max - min + 1) ) + min)