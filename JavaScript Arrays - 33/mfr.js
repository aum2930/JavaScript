let arr = [1,2,3,4,5,66];
// let newArr = [];
// for (let index = 0; index <arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
// }  // RETURNS THE VALUE OF THE ARRAY ELEMENTS.

/*
for (let index = 0; index <arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2) //WILL RETURN SQUARE VALUE OF ARRAY ELEMENTS.
}
console.log(arr)
console.log(newArr) */


// HOWEVER INSTEAD OF WRITING THE WHOLE LONG FOR GETTING THE SQUARE VALUE OF THE ARRAY'S ELEMENT, YOU CAN DO THIS IN VERY SIMPLE WAY WITH LESS LINE OF CODE USING "MAP()" FUNCTION.
/*
let newArr = arr.map((e, index, array)=>{
    return e**2;
})

console.log(newArr)
*/

// USING FOR FILTER IS TO SAY THAT I WANT TO RETURN ELEMENTS OR VALUES FROM MY ARRAY WHICH IS GRATER THAN 2. SO FOR LIKE THIS TYPR OF QUESTION OR FOR COMPLEX QUARIES THIS FILTER FUNCTION IS USED. this is a function with const datatype

const greaterThanTwo = ((e)=>{    
    if (e>2){
        return true;
    }
    return false;
})
console.log(arr.filter(greaterThanTwo));



// REDUCED FUNCTION IS USED WHEN WE WANT TO DO SUM OF THE VALUES OF THE ARRAY IN JUMP WAY TO RIGHT SIDE.

let arr2 = [1,2,3,4,5,6]
const red = (a , b)=>{
    return a + b;
    // return a * b;
}
console.log(arr2.reduce(red))