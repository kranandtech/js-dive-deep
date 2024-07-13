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
console.log("*********************");
// Stack(primitive) , Heap(Non-primitive)

let myEmail1 = "ak@gmail.com";
let myEmail2 = myEmail1;
myEmail2 = "anand@gmail.com";
console.table([myEmail1,myEmail2]);
/*
┌─────────┬───────────────────┐
│ (index) │ Values            │
├─────────┼───────────────────┤
│ 0       │ 'ak@gmail.com'    │
│ 1       │ 'anand@gmail.com' │
└─────────┴───────────────────┘
*/
let userOne = {
    email:"one@gmail.com"
};
let userTwo = userOne;
userTwo.email = "two@gmail.com";
console.table([userOne,userTwo]);
/*┌─────────┬─────────────────┐
│ (index) │ email           │
├─────────┼─────────────────┤
│ 0       │ 'two@gmail.com' │
│ 1       │ 'two@gmail.com' │
└─────────┴─────────────────┘*/