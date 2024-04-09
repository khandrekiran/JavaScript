/* Strings */

/* String Methods in JavaScripts


1) str.toUpperCase ()
2) str.toLowerCase ()
3) str.trim()   --> removes whites spaces

*/

let str = "Welcome to JavaScript";
let str2 = "    Welcome to JavaScript    ";
let newstr = str.toUpperCase (str);
let newstr2 = str.toLowerCase (str);
let newstr3 = str.trim (str2);
console.log(str);       // Ans: "Welcome to JavaScript"
console.log(newstr);    // Ans: WELCOME TO JAVASCRIPT
console.log(newstr2);    // Ans: welcome to javascript
console.log("str2:", str.trim(newstr3));    // Ans: "Welcome to JavaScript"


/*Here value of "str" variable will not change but new value will be
stored in "newstr" variable
*/


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





