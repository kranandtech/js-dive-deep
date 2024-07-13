let score  ="33ab";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number

console.log(valueInNumber); // NaN
console.log("---------------------------------------");
let score1  = null;

console.log(typeof score1);

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1); // number

console.log(valueInNumber1); // 0
console.log("---------------------------------------");
let score2  = undefined;

console.log(typeof score2);

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); // number

console.log(valueInNumber2); // NaN
console.log("----------------------------");
let isLoggedIn = "";
isLoggedIn = Boolean(isLoggedIn);
console.log(typeof isLoggedIn); // boolean
console.log(isLoggedIn); // false
