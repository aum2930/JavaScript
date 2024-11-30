console.log("js running...");





async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

function sum(a, b, c) {
    return a+b+c;
}

//--------------------------------- IIFE  (Immediately Invoked Function Expression):
(async function main() {
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b); 
//---------------------------------- Destructuring:  
    // let [x, y, z, ...rest] = [1, 2, 3, 4, 5, 6, 7];
    // console.log(x, y, z, rest);  // rest will be the array.
//---------------------------------- same thing with the obj:
    // let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // }

    // let {a, b} = obj;
    // console.log(a, b);

//------------------------------------ spread: 
// the sum function is innitialize at up before this function.

let arr = [1,2,3];
// console.log(arr[0] + arr[1] + arr[2]);
// console.log(sum(arr[0], arr[1],  arr[2]));
// console.log(sum(...arr));  //this ... means arr array ko open kar do. and all values ka sum kardo. this is known as the speread.

const obj = {...arr}
console.log(obj); // it will return index colon value



})()
