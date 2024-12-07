const fs = require("fs")
// const fs = require("fs/promises")
// console.log(fs)
// here we install the fs module in the fs variable and print it. 

// now we will create  a file.txt besides that there will be what you want to write in the file. This will be done using the fs.writefilesync function.

console.log("starting");

//fs.writeFileSync("harry.txt", "Harry is a good boy.")

// so here what will happen is this writefilesync will create a blocking code by which it will block the main thread in this which is from staring till ending and it will make this code work like this where first starting will run then this file will be created and after this only the ending will run. However this approach is not good because the js runs in the async apporach means it will run all the task and the task which is time consumong it will let it working in the backend and let all other tasks to perform then after the time consuming part will be done it will execute it later. see the notes.txt for detailed information on this. 

fs.writeFile("harry2.txt", "Harry is a good boy2.", () => {
    console.log("filecreation done");
    fs.readFile("harry2.txt", (error, data) => {
        console.log(error, data.toString()); // to read the data tostring function is needed.
    })
})
// see the notes for more info on this. here i created the callback function to print the done part. This writefile function runs the js in async mode.  as you can see the output too that first starting is printed then ending then filecreation done. 

fs.appendFile("harry.txt", "this is an appended content.", (e, d) => {
    console.log(d);
})
console.log("ending");





// THIS WAS ALL ABOUT THE FS MODULE BUT TO AVOID THE CALLBACK HELL THERE AS WAY IN THE FS MODULE: FOR NOW CHAINGING THE TYPE TO MODULE AND CRATING A NEW MAINPROMISES.JS FILE.