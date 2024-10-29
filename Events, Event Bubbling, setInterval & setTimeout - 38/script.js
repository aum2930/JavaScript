console.log("js running...")
let btn = document.getElementById("btn");

// btn.addEventListener("click", ()=>{
//     // alert ("I was clicked. yay!")
// })

// btn.addEventListener("dblclick", ()=>{
//      document.querySelector(".box").innerHTML = "<b> yay the box was clicked</b>. Enjoy your click !"
// })

// btn.addEventListener("contextmenu", ()=>{
//     alert ("Don't hack us by right click please.")
// })

// document.addEventListener("keydown", (element)=>{
//     console.log(element) //    THIS ELEMENTS MEANS THAT KEYDOWN IF I DO THEN WHAT HEPPENED IN BACK END WITH ELEMENTS OR THAT ELEMENTS WILL BE DISPLAYED. TRY THIS UNCOMMENT IT AND TYPE ANYTHING ON THE KEYBOARD YOU WILL GET MY POINT. THIS DISPLAYS THE KEY AND KEY CODE AND MANY MORE INFO CHECK IT.
// })

document.addEventListener("keydown", (element)=>{
    console.log(element, element.key, element.keyCode)
})