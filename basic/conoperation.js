let score = "33";

// console.log(typeof score);
// console.log(typeof(score));

let value = Number(score);
console.log(typeof value);

// 33 = 33 -> can be converted 
// "33abc" = NaN -> Not a Number 
// true=1; false =0;

let isLoggedIn = 1;
let booleenislogged = Boolean(isLoggedIn);
console.log(booleenislogged);


let login = 0;
let valid = Boolean(login);
console.log(valid);

// 1 -> true
// 0 -> false
// " "  ->  false  -> undefined
// "varad" ->  true -> any String