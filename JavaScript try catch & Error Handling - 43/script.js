console.log("js running...");

// Error throwing:
let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
 // when nan so if you add harry + rohan then means strings adding.
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed.")
}
let sum = parseInt(a) + parseInt(b);

console.log("The sum is", sum);


// where-ever you throw the error and it executes the code will stop running form that. always remember this.