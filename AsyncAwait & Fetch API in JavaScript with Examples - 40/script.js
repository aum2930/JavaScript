function getData() { // making promise inside the getData function.
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve(455);
       }, 33000);
    })
}
console.log("As I am synchronous in nature I will run 1st.");

console.log("Sequentially I will run after the 1st.");

console.log("I am the 3rd one running.");

// let data = getData(); 
// console.log(data); 

// console.log("4th one running.");

// console.log("5th one running.");

// console.log("6th one running.");  //THIS WILL RUN DIRECTLY ONLY WITHOUT ANY DELAY.

// NOW WHAT IF I WANT TO PRINT FROM "4TH ONE RUNNING" AFTER THE getData FUNCTION EXECUTES THEN I NEED THERE ARE TWO OPTIONS ONE IS AWAIT AND ANOTHER IS ".THEN ONE" AS THE GETDATA FUNCTION IS A PROMISES AND SO THE DATA TOO. FOLLOWING IS USING ".THEN" ONE. HOWEVER THIS IS A CALLBACK APPROACH LIKE .then we gave callback function and then it will run.
let data = getData(); 
data.then((v) => {
    console.log(data); 

    console.log("4th one running after the promise executes.");

    console.log("5th one running after the promise executes.");

    console.log("6th one running after the promise executes."); 
})





