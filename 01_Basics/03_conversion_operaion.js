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
console.log("************************");
console.log(2+"1"); //21
console.log(1+"2"); //12
console.log("1"+ 1+1);// 111
console.log(1+2+"2");//32
console.log("***************");
console.log(+true); //1
console.log(+"");//0
console.log("*******************");
console.log("2">1); // true
console.log("02">1); // true
console.log("*************");
console.log(null>0); // false
console.log(null==0);//false
console.log(null>=0); // true
// comparisons convert null to a number, treating it as 0
console.log("2"===2);