//STRING METHODS AND MANY MORE METHOD U CAN SEE ON (MDN WEBSITE) OR INSPECT ANY WEBPAGE AND SEE STRING PROTOTYPE :)

let name = "varad"
let repo =50;
console.log(name + repo); // OLD way of combining Strings 

console.log(`my name is ${name} i have ${repo} on my GitHub`); // New way to concating String in Js using ( ` ` )

console.log(name.toUpperCase());

const user = new String('varuop'); // Way to initiize String 
console.log(user.toLowerCase());
console.log(user.toUpperCase());
console.log(user.length);// length is not a fuction can check from inspect Element
console.log(user.lastIndexOf());
console.log(user.charAt(2)); // give u character at that Specific Index
console.log(user.indexOf('r')); //gives index number of that character


//SUBSTRING()
const newString = user.substring(0,3) // Have to give Start and End Index of the String // Cannt Put Negative Index
console.log(newString);

//SLICE()
const anotherString = user.slice(-6,4) // Have to give Start and End Index of the String // Can Put Negative Index
console.log(anotherString);

//TRIM()
const username = "  varu    ";
console.log(username); //Without Trim Function();
console.log(username.trim()); // with Trim(); --> Remove empty Spaces from Start and End Of String

//REPLACE()
const URL = "HTTPS//varad.com/varad%20naik";
console.log(URL.replace('%20','_')); // Repalce the Unwanted String with Wanted String ( %20 ) TO ( _ )
