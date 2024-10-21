let a = "harry"
console.log(a);
console.log(a[0]); // indexing
console.log(a[1]); // indexing
console.log(a[2]); // indexing
console.log(a[3]); // indexing
console.log(a[4]); // indexing
// console.log(a[5]) // indexing
console.log(a.length) // shows the array's length


let real_name = "Rohan"
let another_name =   "Carry"

console.log("His name is " + real_name + ", and his friend's name is " + another_name)
console.log(`His name is ${real_name}, and his friend's name is ${another_name}.`)                        
// return using template literals with back tik symbol.


 


let c = "kunalku"
console.log(c.toUpperCase())
console.log(c.toLowerCase())
console.log(c.length)
console.log(c.slice(0,4))
console.log(c.slice(1))  // 1 se leke last tak ke sare chars return kar de ga.

console.log(c.replace("ku", 11)) // always remember that only first matching chars will be changed not the back onces.
console.log(c.concat(" Sujal ", "Vihan " + 22))