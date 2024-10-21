function nice(name) {
console.log("Hey " + "this is " + name + ":")
console.log("Hey " + name + " you are a good teacher.")
console.log("Hey " + name + " your t-shirt is nice.")
console.log("Hey " + name + " your course is also good.")
}
nice("Jay")
nice("Kush")
nice("Sam")



// sum function:
function sum(a , b , c = 1) {
    // console.log(a+b);
    console.log(a,b,c)
    return a + b + c; // This will only work if you want to store value of sum into differennt varuable it will return undefined in result variable.
}
result1 = sum() // this will return nan(not a number);
result2 = sum(6,6,2)
result3 = sum(5,5)
console.log("The result of the sum of a + b is: ", result1)  
console.log("The result of the sum of a + b is: ", result2)  
console.log("The result of the sum of a + b is: ", result3) 


// Arrow function:  
const fun = (x)=>{
    console.log("This is an arrow function", x)  
}
fun(1)
fun(2)
fun(3)



