/* Strings */


let str = "Welcome";
let str2 = 'Kiran';
console.log(str[1]);    // Ans: e
console.log(str[3]);    // Ans: c


console.log(str2[4]);    // Ans: n
console.log(str2[5]);    // Ans: undefined as no char at 6th position
console.log(str2[2]);    // Ans: r


//Template Literals

let specialString = `this is a template literals`;
console.log (specialString);


let obj = {
    item: "pen",
    price: 10,
};

let output = `cost of ${obj.item} is ${obj.price} rupees`;
console.log("the cost of ", obj.item , ": ", obj.price);
console.log (output);


// String Inerpolation

let string =(`this is ${1+2+3}`);
console.log(string);



// Escape Character


// This is used to give a next line within a String

console.log ("Welcome\nAll");


console.log ("Welcome \tAll");


console.log ("Welcome \t\tAll");





