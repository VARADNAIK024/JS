// 1] SINGLETON --> WHEN OBJECT IS MADE OF CONSTRUCTOR TS IT IS SINGLETON / AND WE USE LITERAL IT IS NOT SINGLETON
//  object.create --> is also called as constructor Method used in singleton 

// 2] OBJECT LITERALS     [ OBJECT HAS TO KEY AND VALUE PAIR ]
const employee = {
    name : "Varad",
    age: 21,
    location : "Pune",
    "skill": "java"

}

//console.log(employee.age); // MOSTLY WE USED THIS MEHOD 
//console.log(employee.skill);
 //console.log(employee["location"]);//  used to access specific datatype For Eg :-> "skill": "java"

//console.log(employee);

employee.name = "varad naik";
console.log(employee);
//Object.freeze(employee) // FREEZE IS USED TO MAKE VALUE UNCHANGEABLE



// Fuction 

employee.greeting = function()
{
    console.log("hello JS user");
}
 
 employee.greeting2 = function()
 {
    console.log(`hello js user ${this.name}`);
 }

 console.log(employee.greeting());
 console.log(employee.greeting2());


