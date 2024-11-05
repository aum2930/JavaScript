console.log("js running...");

function API() {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("weather data");
            resolve(200) // in website 200 represents api get successfully. 
            }, 2000);
    });
}

async function getwhetherData() {
    await API(); //1st   // calling above API() function here.
    await API(); //2nd
}
getwhetherData()  // this function is printing the api one after another with the given time period of 2s. now see the lets do our main funcion get data one with the help of async and await. check the script2.js for this. suitable syntax for instagram eg that first the userid will check then the password will be checked. here first the weather data will be printed after 2s and then again it will printed after 2s of the first time printed weather data.  without using await it was printing both api call together after 2s.

