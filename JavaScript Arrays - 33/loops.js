let a = [1, 2, 4, 4, 5];

/*
for (let index = 0; index < a.length; index++) {
    console.log(a);    
} //  will print the a 5 times as the length of a is also 5.
*/
/*
a.forEach((value, index, array)=>{
    console.log(value, index, array)
 // returing it's value then it's index then array
}) */


// For in loop is for objects:
/*
let obj = {
    a: 1,
    b: 2,
    c: 3 
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(obj, element)
    }
} */


// This loop is directly for arrays.

    // for (const element of a) {
    //     console.log(element)
    // }
    // for (const value of a) {
    //     console.log(value)
    // }  




// KISI BHI OBJECT KO ARRAY MAI CONVERT KARANA CHAHTE HO THEN YOU CAN USE ARRAY.FROM

console.log(Array.from("Harry"));

