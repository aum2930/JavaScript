console.log("js-2 running...");



// Error handeling:
let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed.")
}
let sum = parseInt(a) + parseInt(b);

try {
    console.log("The sum is", sum*z);
} catch (error) {
    console.log("Error aa gaya bhai"); // insted of printing that red warning type error print this mininal message.
    console.log(error.name);
    console.log(error);  // you can print this error object too.
}


