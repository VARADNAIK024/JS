let arr =[1,2,3,4,8,9,6];
//console.log(arr);

arr.push(9); //push elemnts in last of array like stack
//console.log(arr);

arr.pop() // pop last element
//console.log(arr);

//--- UNSHIFT -> used to ADD element in Start of The Arrays 

arr.unshift(0);
//console.log(arr);

// SHIFT is used to DELETE first Elememt in the list

arr.shift()
arr.shift()
//console.log(arr);

arr.reverse() //used to REVERSER ARRAY element
//console.log(arr);

// INCLUDES in not a Function in arrays is used to find element in arrays 
//console.log(arr.includes(11));//if element Not is present FALSE 
//console.log(arr.includes(3));//if element  is Present TRUE 


// SLICE AND SPLICE

console.log("A", arr);

const myarr1 = arr.slice(0,3); // In Slice Orginal Arrays is Not Manipulated or Changed 
console.log("slice", arr);
console.log(myarr1);


const myarr2 = arr.splice(0,3); // In Splice Orginal Array is Manipulated or Changed
console.log("splice", arr);
console.log(myarr2);
