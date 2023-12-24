//const instauser = new Object(); ----> its is singleTon Object

const instauser = { } // ---> its not a singleton Object
instauser.id = "abc1254"
instauser.name = "varad"
instauser.login = false
//console.log(instauser);


//NESTED LOOPING IN OBJECTS 
const emaildetails ={
    email_id : "varu@gmail.com",

    fullname: {                        // This called as Nested Object Looping
       username :{
                firstname : "varad",
                lastname : "naik"
                    
    }
    
  }
}
//console.log(emaildetails);
//console.log(emaildetails.fullname);
//console.log(emaildetails.fullname.username.firstname); // (.) is used for dispalying at loop 



// Combining Multiple Object in single Object  --->    E.g obj4

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj3 = {5:"a" , 6:"b"}

//const obj4 =Object.assign(obj1,obj2,obj3) // In Object to Combine / or Concat onject we need to use [ ASSIGN ]
//const obj4 = {...obj1,...obj2,...obj3} // ---> most Common Techinic to Combine Obj is (  SPREAD ) 
//console.log(obj4);

 
// looping of array inside of an Object
const user = [ 
    {
    id : 1,
    vv:1 ,   
   },
   {
    id : 1,
    vv:1 ,   
   },
   {
    id : 1,
    vv:1,    
   }
]

user[1].id 

console.log(instauser);
console.log(Object.keys(instauser)); // keys  = id , name , login 
console.log(Object.values(instauser));//values = abc1254 , varad , false 
console.log(Object.entries(instauser));// array inside an array
