let a = 2;
let b = 3;
let c = a > b ?(a-b):(b-c); // Ternary operator.
console.log(c)
 /*
 That ternary operator translates to: 
 if(a > b){
            let c = a - b;           
 }
    else{
            let c = b - c;
    }
*/
