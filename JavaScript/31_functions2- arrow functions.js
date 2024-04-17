/* Arrow Functions */


hello = function () {
  console.log (`Hello World`)
};






//sum function
function sum(a,b){
    return a+b;
}
let val = sum(3,4);
console.log(val);


// Modern functions

const arrowSum = (a, b) => {
    console.log(a+b);
};


const greetings = name => {
    console.log(`Hello , ${name}`);
};

// multiplication function
const arrowMul = (a, b) => {
    console.log(a*b);
};

/*
function newgreetings(name) {
    return `Hello, ${name}!`;
  }
  
  // step 1: replace function with const
  const newgreetings(name) {
    return `Hello, ${name}!`;
  }
  
  // step 2: add = after the function name
  const newgreetings = (name) {
    return `Hello, ${name}!`;
  }
  
  // step 3: add => after the parentheses
  const newgreetings = (name) => {
    return `Hello, ${name}!`;
  }

  */


  /* 
 Q: Create a function using the "function" keyword that takes a String as an
    argument & returns the number of vowels in the string
*/

function countVowels(str) {
// using for-of loop

for (const char of str) {
    console.log(char);
}
}









/*
Q: Create an arrow function to perform the same task */ 






