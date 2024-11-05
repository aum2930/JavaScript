console.log("js running...");


/*-----------------------------------------
// THIS IS USING CALLBACK HELL.

function getData(dataID, getNextData) {
    setTimeout(() => {
        console.log("dataID is", dataID);
        if(getNextData){
           getNextData();
        }
    }, 2000);

}

getData(1, () => {
    console.log("getting data2...");
  getData(2, () => {
    console.log("getting data3...");
    getData(3, () => {
        console.log("getting data4...");
      getData(4)
    });
  });
});     //    This code is very bad and it is known as callback hell this is nested callbacks we called back many function as a pyramid of doom. This style of programming is very difficult to manage. To solve this callback hell issues promises are used.   

// getData(2);
// getData(3);
// getData(4);

----------------------------------------------------------------*/

/*----------------------------------------------------------------
// SAME WORK ABOVE USING PROMISE CHAIN.


function getData(dataID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("dataID is", dataID);
        if(getNextData){
           getNextData();
        }
        resolve("success")
    }, 3000);
  });
}


// p1 = getData(2);
// p1.then((res)=>{
//   console.log(res);
// });


// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res)=>{
//       console.log(res);
//     });
//   });  // this is also a not good type of code insteas choose the following one.

console.log("fetching data1...");
getData(1).then((res)=>{
  console.log("fetching data2...");
  return getData(2);
}).then((res)=>{
  console.log("fetching data3...");
  return getData(3);
}).then((res)=>{
  console.log(res);
}); // this is known as acctual chaining.
---------------------------------------------------------------------------*/



// SAME WORK USING ASYNC AND AWAIT


function getData(dataID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("dataID is", dataID);
        if(getNextData){
           getNextData();
        }
        resolve("success")
    }, 3000);
  });
}

async function getAllData() {
  console.log("fetching data1...");
  await getData(1); // calling above getData() function 1st time.
  console.log("fetching data2...");
  await getData(2); // calling above getData() function 2nd time.
  console.log("fetching data3...");
  await getData(3); // calling above getData() function 3rd time.
  console.log("fetching data4...");
  await getData(4);
  console.log("fetching data5...");
  await getData(5);
  
}

getAllData();