console.log("js-3 running...");



// Using finally clause:
let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed.")
}
let sum = parseInt(a) + parseInt(b);

function main() {   
    let z = 1;
    try {
    console.log("The sum is", sum*z);
    return true;
    } 
    catch (error) {
    console.log("Error aa gaya bhai");
    return false;
    }
    finally{
    console.log("Files are being closed and db connection is being closed.");
    }
}
let c = main() // this means that you called the function.


// We use the finally clause because in the function if we do not write finally and we want to print the console log after return so you cannot print that. why? because in function if you written anyting then and it executed the code will be stop executing from there, so it won't reach till your console.log("message"). However, if you use the finally then you can execute the console.log("message"). This finally only is useful in the functions and it won't make any difference out side the function. outside the function if you use finally or not if there is console.log("message") after the try and catch means after the catch then that message is going to print only.
    

