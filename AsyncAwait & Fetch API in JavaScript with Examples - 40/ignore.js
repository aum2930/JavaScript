function getData() { // making promise inside the getData function.
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve(455);
       }, 3000);
    })
}
console.log("As I am synchronous in nature I will run 1st.");

console.log("Sequentially I will run after the 1st.");

console.log("I am the 3rd one running.");

let data = getData(); 
console.log(data); 

console.log("4th one running after the promise executes.");

console.log("5th one running after the promise executes.");

console.log("6th one running after the promise executes.");

