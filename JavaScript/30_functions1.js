/* Functions */

function myFunction(){          // myFunction is a function
    console.log("Welcome");
    console.log("I am Learning");
}

myFunction();       // this will give as "undefined" coz the variable "msg" 
                    // doesnt have any value 

function myMessage(msg){        // the input variable ("msg")= parameter 
    console.log(msg);
}

myMessage("I love JS");     //I love JS this is argument 



/* when we type a variable in a function defination [myFunction(msg)] is called
as parameter and when we write/pass a value in a variable in a call function
[myMessage("I love JS")] is called as an argument   */


function myName(){
    console.log("Hello World");
    console.log(`How are you?`);
    console.log(`Kiran`);
}
myName();



function loginUserMessage (username){
    if(username === undefined){
        console.log(`please enter a username`);
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());    //Ans: undefined just logged in coz no value was passed
console.log(loginUserMessage(`kiran`));



//Q: Create a Function to calculate sum of 2 numbers


function sum(x, y){
console.log(x+y);
}


function add(a, b) {
    s = a+b;                // s = variable, a,b = values of a variable
    return s;           // returns a value of s, means values of a and b
}

let val = add(3, 4);
console.log("value of add: ", val);



// multiplication function


