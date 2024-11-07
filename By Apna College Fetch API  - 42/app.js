console.log("js running...");


const URL = "https://catfact.ninja/facts";
let pera = document.querySelector("#pera");
let btn = document.querySelector("#btn")


const getFacts = async () => {
  console.log("getting facts...");
  let response = await fetch(URL);
  console.log(response);  // resopnse is an object which has many different values. This resopnse is in JSON fomat.
  console.log(response.status);
  let data = await response.json(); // this method converts data into usable form, from json to the javascript object form. and we use await cuz it will return the promise and it takes time to load that's why.
  //console.log(data.data[0].fact); // data>data>0>fact this was the acctual data that we acctually required from the api.
  pera.innerText = data.data[3].fact;
}

btn.addEventListener("click", getFacts);
