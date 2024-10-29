console.log("js is running...");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log("Your random number is", a, "should be < 0.5 to see the execution of the setTimeout function after 3s.");
    if (a < 0.5) {
        reject("No random number was supporting you");
    } else {
        setTimeout(() => {
            console.log("yes I am done");
            resolve("Harry")
        }, 3000);
    }
    

});

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log("Your random number is", a, "should be < 0.5 to see the execution of the setTimeout function after 3s. (2)");
    if (a < 0.5) {
        reject("No random number was supporting you (2)");
    } else {
        setTimeout(() => {
            console.log("yes I am done (2)");
            resolve("Harry (2)")
        }, 3000);
    }
    

});

/*
let p3 = Promise.all([prom1, prom2]);
p3.then((a) => {
    console.log(a); // this will print when the promise is resolved if both promises will be resolved it will display both resolve values.
}).catch((err) => {
    console.log(err);
}) */

let p3 = Promise.allSettled([prom1, prom2]);// in .allSetteled chahe resolve ho ya reject ho you will get the status of the both of the promises if it will not resolved then in the status you will see an error message. you will get both ststus and value if fullfilled or if reject then it will return the status and reason .
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);  // this will return the reject value as a reason for the reject.
})


// prom1.then((a)=> {
//   console.log(a)
// }).catch((err) => {
//   console.log(err) // web-site is under maintainance.
// })


