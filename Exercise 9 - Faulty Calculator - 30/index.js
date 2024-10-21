// faulty calc:

let random = Math.random();
console.log(random);

let a =parseInt(prompt("Enter the value of a:"));
let c = prompt("Enter the operation")
let b = parseInt(prompt("Enter the value of b:"));

obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random>0.1){
    // perform the correct operation.
    console.log(a )

}else{
    // perform the wrong operation.
    c = obj[c]

}
