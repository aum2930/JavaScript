console.log("js running...");



// delay in getting Data

// function getData(dataID) {
//     console.log("Data is", dataID);
// }
// getData(343);


// now I want delay in this process:

 function getData(dataID) {
    setTimeout(() => {
        console.log("Data is", dataID);
    }, 2000);
    }

// now If I want data 1,2,3 so I will do is..

getData(1); //2s this all will set timer of 2s and run togerther 
getData(2); //2s
getData(3); //2s
// however this will print data suddely after 2s all the data but what if I want each data with the delay of 2s. but what if i want that 1st data comes then afetr that 2nd data comes with it's own delay and so... real life eg is insta uid and pass 


// it is dicsussed in script2.js


