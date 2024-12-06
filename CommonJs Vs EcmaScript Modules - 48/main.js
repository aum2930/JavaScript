// THIS IS HOW TO IMPORT MODULES IN JAVASCRIPT; USING THE IMPORT STATEMENT; SO FOR NOW I AM GOING TO REMOVE THE TYPE MODULE CODE FORM THE THE PACKAGE.JSON FILE; BUT YOU CAN ADD IT BACK IF YOU WANT; JUST TO KNOW HOW THIS IMPORT STATEMENT WORKS; AND THE LATER UNDO IT TO SEE THE CODE ABOUT HOW REQUIRE STATEMENT WORKS;  AND WHILE IN HTML THIS IS NOT REQUIRED; TO ADD THE TYPE MODULE CODE IN THE PACKAGE.JSON FILE;

// This is how to import named exports from a module;

// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d);   


// This is how to import default exports from a module; 
// so the first one is importing the default export using the name obj;
// the second one is importing the default export using any name; in default export we can use any name to import it;

// import obj from "./mymodule.js"
// console.log(obj);
// import harry from "./mymodule.js"
// console.log(harry);

//-----------------------------------------// THIS IS HOW TO IMPORT MODULES IN JAVASCRIPT; USING THE REQUIRE STATEMENT; SO FOR NOW I AM GOING TO REMOVE THE TYPE MODULE CODE FORM THE THE PACKAGE.JSON FILE; BUT YOU CAN ADD IT BACK IF YOU WANT; JUST TO KNOW HOW THIS REQUIRE STATEMENT WORKS; AND THE LATER UNDO IT TO SEE THE CODE ABOUT HOW IMPORT STATEMENT WORKS;

const a = require("./mymodule2.js")
console.log(a, __dirname, __filename);


//--------------------------------------- EXPLAINATION OF THE CODE;

// In CommonJS (which is Node.js's default module system), every file is wrapped in a special function before execution. This is often called the "module wrapper function". Here's what it looks
// (function(exports, require, module, __filename, __dirname) {
//    Your actual file code goes here
//     const a = require("./mymodule2.js")
//     console.log(a, __dirname, __filename);
// });




// This wrapper function provides:
// exports: The object to export values from the module
// require: Function to import modules
// module: Object representing the current module
// __filename: Full path to the current file
// __dirname: Directory name of the current file
// You can actually see this wrapper function by using:

// console.log(require('module').wrapper);


// This is why you can use these variables without declaring them - they're actually parameters passed to this wrapper function that Node.js automatically creates around your code.
// Here's a practical example of how it works:
// This is indeed a common interview question because it helps demonstrate understanding of:
// How CommonJS modules work under the hood
// Why these "magical" variables are available
// The difference between CommonJS and ES Modules
// Module scoping in Node.js
// The main differences from ES Modules (import/export):
// CommonJS is synchronous, ES Modules are asynchronous
// CommonJS uses the module wrapper function, ES Modules don't
// ES Modules don't have __dirname and __filename available by default
// ES Modules use import/export instead of require/module.exports