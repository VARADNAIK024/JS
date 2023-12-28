//THIS -> MEANS CURRENT CONTEXT of that variable / USED TO ACCESS CURRENT VARIABLE INSIDE THAT SCOPE

const user = {
    username : "varad",
    price : 99,

    messagetouser : function()
    {
        // console.log(` ${this.username}, welcome to our website`);
        // console.log(this); // this will print whole list of username added E,g varad ,sam

    }
    
}
// user.messagetouser()
// user.username = "sam";
//  user.messagetouser()

 //console.log(this); --> it give u a empty obj



 //THIS KEYWORD IS ONLY USED IN OBJECT AND NOT IN FUNCTIONS()

 function chai()
 {
    //let username = "chaisutta"
    //console.log(this.username);
 }
// chai ()

// const chai1 = function()  // in this func() is declared with variable / in this also THIS KEYWORD IS NOT WORKING 
// {
//     let username = "chaisutta"
//     console.log(this.username);
//  }
//  chai1()


//--------------------------------------------------------------------------------------

 // ARROW FUN ()

//  const chai2 = () => { // arrow func() is declared by [  =>  ]    
//     let username = "chaisutta"
//     console.log(this.username);
//  }
// chai2()


// 1] Easy way to use arrow func  ALSO CALLED AS EXPLICIT
const addtwo = (num1,num2) => {
    return num1 + num2 // WE NEED RETURN() WHEN WE USE CURLY { }
}
console.log(addtwo(1,2));


// 2]  METHOD TO USE ARROW FUN() ALSO CALLED IMPLICT
const two =(num3,num4) => ( num3 + num4) // WE DONT NEED RETURN() WHEN WE USED PARANTESIS ()
console.log(two(6,4));

const objj =() => ({username:"varu"}) //for object compalsary we need () to declare