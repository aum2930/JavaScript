/* Create a business name generator by combining list of adjectives and shop name and another word without using arrays.

Adjectives:
Crazy
Amazing
Fire



Shop Name:
Engine
Foods
Garments



Another Word:
Bros
Limited
Hub


*/


let Adj1 = "Crazy";
let Adj2 = "Amazing";
let Adj3 = "Fire";

let shpNme1 = "Engine";
let shpNme2 = "Foods";
let shpNme3 = "Garments";

let antWrd1 = "Bros";
let antWrd2 = "Limited";
let antWrd3 = "Hub";


function getRandomeAdj() {
    let randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber)
    if (randomNumber == 0) return Adj1;
    else if (randomNumber == 1) return Adj2;
    else return Adj3;
}
// console.log(getRandomeAdj());

function getRandomeshpNme(){
    let randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber)
    if (randomNumber == 0) return shpNme1;
    else if (randomNumber == 1) return shpNme2;
    else return shpNme3;
}
// console.log(getRandomeshpNme());


function getRandomeantWrd(){
    let randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber)
    if (randomNumber == 0) return antWrd1;
    else if (randomNumber == 1) return antWrd2;
    else return antWrd3;
}
// console.log(getRandomeantWrd());

function generateRandomeBusinessName() {
    let Adj = getRandomeAdj();
    let shpNme = getRandomeshpNme();
    let antWrd = getRandomeantWrd();
    return (`${Adj} ${shpNme} ${antWrd}`)
  
}
console.log("Your Randome Business Name is:",generateRandomeBusinessName().toLocaleUpperCase())
