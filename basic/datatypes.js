//    1] Primitive datatypea 

//  String , Number , boolean , Symbol , null , Undefined , BigInt


// JS is Dynamamically Type Language -> because be do not need to write specific dataType it will alocate it Automatically


//    2] NON Primitive (Refernce Type)

// Arrays , Objects , Functions 

// Arrays 

const heros = ["iron", "thor","hulk" ];
console.log(heros);

// 3] Object 

let MyObj =  {
    name : "varu",
    age : 21,
} 
console.log(MyObj);

// 4} functions 

const Myfunctions = function(){
    console.log("hello JS");
} 
console.log(Myfunctions())




// 5] Symbol is used to give speical identity to a variable 

const Realid = Symbol("123");
const fakeid = Symbol("123");
console.log(Realid === fakeid);