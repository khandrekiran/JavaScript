

/* Logical Operators

Logical Operators are:
Logical AND &&
Logical Or !!
Logical NOT !

*/

// Logical AND &&


let a = 6;
let b = 5;

let cond1 = a > b;      //false
let cond2 = a === 6;     //true
console.log("cond1 && cond2 = ", cond1 && cond2);   //true


let c = 6;
let d = 5;

let cond3 = c < d;      //false
let cond4 = c === 6;     //true
console.log("cond3 && cond4 = ", cond3 && cond4);   //false



// Logical OR !!

let e = 6;
let f = 5;

console.log("cond5 && cond6 = ", e < f || e === 6);   //true




// Logical NOT !


let g = 6;
let h = 5;

console.log("!(6<5) = ", !(g < h) );    //true