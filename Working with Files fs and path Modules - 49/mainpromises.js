import fs from  "fs/promises"

let a = await fs.readFile("harry.txt")
console.log(a.toString()); 

let b = await fs.appendFile("harry.txt", "\n\n\n\n\nThis is amazing promise")
console.log(b);



// similarly i can read and also write the file in here.
// and when you are typing the code in the module you can use await funcion without being in async function. i can do directly await because i am inside the module.

// The code import fs from "fs/promises" is using ES6 module syntax to import the fs/promises module from Node.js. Here’s what’s happening in detail:

// import statement:
// This is a part of ES6 JavaScript, which allows you to import functionality from other modules. It is an alternative to require() in CommonJS syntax.

// fs/promises module:
// In Node.js, the fs module is used for interacting with the file system. Normally, fs has both synchronous and asynchronous methods. However, to make the asynchronous methods return Promises (which can be used with async/await), Node.js provides the fs/promises API.

// This is a version of the fs module where all the methods return Promises instead of using callbacks. This is more suited for modern JavaScript async/await workflows.
