/* Arrays */


let marks = [97,79, 45, 87, 75, 69, 54];
console.log (marks);
console.log(marks.length);      //this is property of an array
let heroes = [`ironman, superman, hulk, thor`]
console.log (heroes);


// changing values of a specific index in an array

marks[2] = 31;          //45 changed to 31
console.log (marks[2]);



// loops over an Array

/* for-loop over an Array

for loop should always have array starting position, array stopping position and incrementing the array till the total length of an array 
*/

let superheroes = ["captian", "thor", "hulk", "antman", "deadpool"];



for (let idx = 0; idx < superheroes.length; idx++) {        /* idx(array) = 0 is a starting position of an array, idx < superheroes.length
                                                            (arrays's length)
                                                                                        */
console.log(superheroes[idx]);
}


// for-of-loop over an Array


for(let el of superheroes){
    console.log(superheroes);
}


let cities = ["Pune", "London", "Bangalore", "Leamington Spa", "Warwick"];
for (let city of cities) {
    console.log(city);          // print all cities
    console.log(city.toUpperCase());    // print all cities in uppercase
}

