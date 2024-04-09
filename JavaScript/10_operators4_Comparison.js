//Comparison Operators


let a = 5;
let b = 10;

console.log("a == b", a == b);      //Ans: false


let c = 5;
let d = 5;

console.log("c == d", c == d);      //Ans: true


let e = 5;
let f = 5;

console.log("e =", e, "f =", f, "And", "e != f", e != f);      //Ans: e = 5 f = 5 And e != f false


let g = 5;      //number
let h = "5";    //string

console.log("g == h", g == h);

/*Ans: true coz JS will when checks there is a number 
in a string it will convert it into number and 
then compare it */


// Strickter type of comparison Equal to & type ===

let i = 5;      //number
let j = "5";    //string

console.log("i == j", i === j);     //Ans: false

/*Ans: false coz JS will do a strick checks and consider 
a string as a string irrespective if it has number in it */




// Strickter type of comparison Not Equal to & type !==

let k = 5;      //number
let l = "5";    //string

console.log("k !== l", k !== l);     //Ans: true



// Strickter type of comparison Greater than

let m = 5;      //number
let n = 3;      //number

console.log("m  > n", m > l);     //Ans: true


// Strickter type of comparison Less than

let o = 5;      //number
let p = 3;      //number

console.log("o  > p", o < p);     //Ans: false



// Strickter type of comparison Greater Than Or Equal To

let q = 5;      //number
let r = 3;      //number

console.log("q  >= r", q >= r);     //Ans: true


// Strickter type of comparison Less than Or Equal To

let s = 5;      //number
let t = 3;      //number

console.log("s  <= t", o <= p);     //Ans: false




/* Similarly we have comparison operatiors like > , >= , < , <= */


