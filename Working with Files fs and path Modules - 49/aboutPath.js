import path from "path"
import { compileFunction } from "vm";
//console.log(path); // to print the path funcitons and all about the path.

// you can do many work using this path funciton for eg if i want to known the extension name of any file so it can be done using the following way. however i am using the \\ two times to avaid escape sequence character of the string.

let mypath = "A: \\Self Study\\WEB-DEVELOPMENT\\Sigma Web Development Course by Harry Bhai\\Working with Files fs and path Modules - 49\\harry.txt" // define the name of the file which you want to know the extension name off.



console.log(path.extname(mypath)); // extension name
console.log(path.dirname(mypath)); // directory name 
console.log(path.basename(mypath)); // base name 

console.log(path.join("A:/", "programs\\harry.txt")); 
 // this is the output of using the join funciton it will auto correct the slash mistake and will return the output A:\programs\harry.txt 