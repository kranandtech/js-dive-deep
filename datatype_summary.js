// primitive - 7 types
// string, number,boolean,null,undefined,symbol,BigInt

// Non primitive
// array, object, function
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id===anotherId);
const bigNumber = 3467764774738883773339n;
console.log(typeof bigNumber);
console.log(typeof anotherId);
console.log("************");
function fun(){
    console.log("hello");
}
console.log(typeof fun);
const res =  ()=>{
    console.log("hello");
}
console.log(typeof res);
console.log("********************");
const arr = [3,8,9];
const obj = {
    name:"ak",
    roll:4
};
console.log(typeof arr);
console.log(typeof obj);