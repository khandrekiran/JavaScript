/* Loops : Loops are used to execute a piece of 
code again and again */


//Q1: Print all the even numbers from 0 to 100

for (let num=0; num<=30; num++){
    console.log("number = ", num);

}



//Q2: Print all the even numbers from 0 to 100

/* the logical thinking is that when we have odd number then dont 
print when we have even numbers then print 

    Hence use loop conditional statements

Loop --> 
if(num %2 == 0) then print
      
*/


for (let nam = 0; nam <= 50; nam++) {
    if(nam %2 ===0) {              // i.e. even number
    console.log("Number = ", nam);
    }
} 


/* Q2: Print all the odd numbers from 0 to 100

*/

for (let Num = 0; Num <=50; Num++) {
    if(Num %2 != 0) {
        console.log("Number is: ", Num);
    }
}



/* Q3: Create a game where you start with any random number. Ask the
user to keep guessing the game number until the user enters correct 
Value
*/


let gameNum = 25;
let userNum = prompt("Guess the game number : ");
console.log(userNum);

while(userNum != gameNum) {
   userNum = prompt("You entered wrong number. Guess again");
}
console.log("Congrats, you entered right number");



