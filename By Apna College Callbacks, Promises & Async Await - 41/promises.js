console.log("js running...");

// let idk = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     //resolve("123"); // To check the status of the promise you need to check in the console by typing the variable name in this case it is "idk" and hit enter you will see the results.
//     reject("Error occured")  
// });


/*-----------------------------
// so now when it comes to real time of getting data using API so you need to understand this how it works.


function getData(dataID, getNextData) {
return new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("dataID is", dataID);
        resolve("success"); // wheneve getdata prints return me a message of success.
        if(getNextData){
           getNextData();
        }
    }, 5000);
});
}

let promise = getData(123);
console.log(promise); //first it will show pending promise state at first.

setTimeout(() => {
    console.log(promise); // then to show the state of the promise this will run after 6s and it will display the state of the promise.
}, 6000);

// how this works is first in concole you will type the value of getdata("121") so now as set time out of 5secs it will wiat to print till then the promis status will be pending but the promise is giving us promise that after  5 secs you will get the result. 

// IN THIS PROGRAM FIRST PROMISE STATUS WILL BE PRINTED THEN AFTER 5s DATA WILL BE PRINTED AND AFTER THAT THE STATE WILL BE PRINTED AGAIN AFTER 1s  OF DATA WHICH IN TOTAL IS 6s. GET DATA IS GIVING US PROMISE THAT IT WILL GIVE YOU DATA AFTER 5s THEN WE WILL WAIT THAT DO AFTER 5s IT IS RETURNING THE DATA OR NOT IF YES THEN IT WILL RETURN SUCCESS.


---------------------------*/



/*------------------------------
// similarly when the data is not gonna print we can simply show the error message.

function getData(dataID, getNextData) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("dataID is", dataID);
        reject("error occured sorry")
        if(getNextData){
           getNextData();
        }
    }, 5000);
})
}

let promise = getData(123);
console.log(promise);
-------------------------*/



// This was all about how to create the promise now generally we will be givien the promise we need to known that how to use the promise.
// use of .then() & .catch()


const cusotmfunc = () =>{
 return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
    // reject("network error")
    });
}

// cusotmfunc()

let promise = cusotmfunc();
    promise.then((res) => {
      console.log("promise fulfilled", res);  // when promise is resolved then this will print.
    });

    promise.catch((err) => {
        console.log("promise rejected", err) // when promise is rejected this will print. however in perameters you can see the message of the promise to print that add err in catch and res means result in then and then ptint the message which we passed on the time of reject or also in relult too means in reject thing the message was "network error" and in resolve thing the message is "success" so this will be printed. result is success msg and err is network error msg.
    })
    

