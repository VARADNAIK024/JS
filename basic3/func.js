// console.log("v");
// console.log("a");
// console.log("r");
// console.log("u");

// function name1 ()
// {
// console.log("v");
// console.log("a");
// console.log("r");
// console.log("u");
// }

// name1() // name=refernce ()=execution

//add two Number

function addtwonum (num1,num2)
{
    let result = num1 +num2; // common method to add
    return result;
}

const result = addtwonum(1,2)
//console.log(result);


function ll (n1,n){
  n1+n;
   // return n1+n; // new mrthod to add
}

// add = ll(5,5);
// console.log(add);



//login form

function loginusername(username)
{
    if(username === undefined)
    {
        console.log("plz enter user name");
        return
    }
return ` ${username} user has login IN`;

}

//console.log(loginusername("varad"));
//console.log(loginusername());


//login form 
function loginusername(username ="unknownuser") //in case of no username we can give DEFAULT values
{
    if(!username) // if username = false give unknownuser as default value
    {
        console.log("plz enter user name");
        return
    }
return ` ${username} user has login IN`;

}
console.log(loginusername());


 // Enter from for CLUB

function loginusername1(username1)
{
    if(username1 <= 18)
    {
        console.log("u cant enter CLub");
        return
    }
return ` ${username1} u can enter club`;

}
//console.log(loginusername1(2));



// CREATED CARTS TO ADD ITEM IN LIST 

function cardvalue(...cardval)  //... is used in Spread and Rest operator depands upon its use
{
return cardval
}
console.log(cardvalue(200,300,500));



//HOW TO USE OBJECT INSIDE FUNC()

const myobject1 = {

    usern1 : "varu",
    id : 2,
}

function handleobj(valss)
{
console.log(`user name is ${valss.usern1} and its id is ${valss.id}`);

}
handleobj(myobject1)

