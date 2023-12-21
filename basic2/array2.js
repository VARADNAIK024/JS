const marvel = ["iron","thor","hulk"];
const Dc = ["super","batman","Flash"];

//marvel.push(Dc); // BUT THIS NOT OPTIMAL WAY TO COMBINE TO ARRAYS 
//console.log(marvel);

//CONCAT

const newheros = marvel.concat(Dc); // PROPER WAY TO MERGE TWO ARRAYSBUT IN CONCAT U NEED TO MAKE A NEW ARRAY TO STORE THE COMBINE ARRAY e.g (newheros to store marvel & Dc ARRAY)
//console.log(newheros);


// SPREAD Operator 

const newway = [...marvel, ...Dc]; // WE NEED TO PUT ( ... -> MEANS ELEMENT) TO ADD  TWO ARRAYS  
console.log(newway);


//FLAT --> USED TO ADD MULTIPLE ARRAYS IN AS NEW ARRAY

const single = [1,2,3,4,[5,6],[7,[8,9]]];
const allarray = single.flat(Infinity); // flat(inside its Depth of array ) how much arrays are present inside one array
console.log(allarray); // infinity is used so computer can calculate the depth by itself