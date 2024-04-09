console.log("Welcome to Prompt method in JavaScript Learning");

/* Q. Get user to input a number using prompt method 
("Enter a number:"). Check if the number is a multiple of 5

*/


let num = prompt ("Enter a Number");
if (num % 5 === 0) {
    console.log (num, "is a multiple of 5");
}
else {
    console.log (num, "is NOT a multiple of 5");
}


/* Q. Write a code which can give grades to students
according to their scores:
80-100, A   70-79, B    60-69, C    50-59, D    0-49, F

*/


let score = prompt ("Enter your scores (0-100):");
let grade;

if (score >=80 && score <=100) {
    grade = "A";
} else if (score >=70 && score <= 79) {
    grade = "B";
} else if (score >=60 && score <= 69) {
    grade = "C";
} else if (score >=50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "F";
} else {
    grade = "Invalid input";
}
console.log ("Your Grade is: ", grade);