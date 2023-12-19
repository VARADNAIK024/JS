//Stack Memory ---> is a Primitive DataType

//In stack memory the value is changed because it only gives copy of first variable
//when second variable is given different value it points Towards it

let homename = "varad";
let anothername = homename ;
anothername = "varu";
 
console.log(homename);
console.log(anothername);



// Heap memory ---> is a Non Primitive DataType

//In heap memory value doesnt change because it is present in a single HEAP Memory 
// Heap gives Refernces of the Variable

let userOne = {

    email : "varu@gmail.com",
    pass : 123,
}

let userTwo = userOne;

userTwo.email = "aditi@gmail.com"

console.log(userOne);
console.log(userTwo);