console.log("Hello how are you?")

let a = 5;
a = a + 1; //you can change tha value of the variable if it is not constant. while using const you cannot change the existing value of the variable.
var b = 5;
var c = "Harry"
var $d = "marry"
var _44 = "Jhon"
// var 44_ = "Nothin" This is invalid variable cuz it starts form the number. & The variable are also case sensitive.
// console.log(a + b + 5)
// console.log(c)  
// console.log(typeof a, typeof b, typeof c)
// const j = 10;
// j = j + 1;
// console.log(j) Not allowed because const value cant be changed. This will return an error.

{
    let a = 55; //LET IS A BLOCK SCOPE. WHILE VAR IS GLOBALLY SCOPED USKA BLOCK SCOPE NHI HOTA. 
    console.log(a)
}
console.log(a)


// PRIMITIVE DATATYPES:

let x = "Harry Bhai";
let y = 3;
let z = 3.34;
let p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


// OBJECT:

let obj = {
    name: "Harry",
    "Job code": 222,
    "is_it": true
}

console.log(obj)
obj.salary = "100crores";
console.log(obj)
obj.salary = "200crores";
console.log(obj)
