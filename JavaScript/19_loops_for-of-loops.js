/* Loops : Loops are used to execute a piece of 
code again and again

5) for -of Loop

*/

//for - of loop condition:

let a  = "Welcome";
for (let val of a) {        //iterator -> characters
    console.log("a = ", val)
    
}

let str  = "For-Of-Loop";
for (let val of str) {
    console.log("val = ", val)
    
}


let size = 0
for (let val of str) {
    size++;
}
console.log("size = ", size);




/* Print 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log("i = ", i);
}

*/



