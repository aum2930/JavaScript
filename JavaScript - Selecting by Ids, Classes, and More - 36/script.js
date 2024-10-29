console.log("Harry bhai");

// let boxes = document.body.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";


// document.getElementById("box3").style.backgroundColor =  "yellow";
// document.querySelector(".box").style.backgroundColor = "green";
// console.log(document.querySelectorAll(".box")); // RETURNS THE HTML COLLECTION.
// document.querySelectorAll(".box").style.backgroundColor = "green"; (NOT POSSIBLE RETURNS ERROR)
// HOWEVER TO DO THIS YOU HAVE TO USE FOR EACH LOOP TO SELECT EACH ELEMENTS JUST LIKE THE FOLLOWING WAY.

// document.querySelectorAll(".box").forEach(element => {
//         console.log(element)  // SEE BY THIS ONE BY ONE EVERY ELEMENT WILL BE PRINTED.  
//         element.style.backgroundColor = "green";
// });

// MATCHES CHECKS THAT JE ELEMENT IS TARRET CHE DOES THAT MACHES THE CSS SELECTOR 

e = document.body.getElementsByTagName("div")
console.log(e);
console.log(e[5].matches("#box3")); // yes then it will return true else false. here there is id of #box3 is there.

// CLOSE AND CONTAINS ARE ALSO THERE WHCHICH IS NOT EXPLAINED HERE.