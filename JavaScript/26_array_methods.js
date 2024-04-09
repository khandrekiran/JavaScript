/* Array Methods

push(): => to add an item to the end

pop(): => to delete an item from the end and return

toString(): converts Array to String

concat(): to join multiple arrays and return result

unshift(): to add an item to the start

shift(): to delete an item from the start & return

slice(): returns a specific piece of an array

splice(): changes original array (add, remove, replace)

*/

//push() method

let fooditems = ["potato", "spinach", "apple","tomato"];
console.log (fooditems);
fooditems.push("chilli", "paneer");
console.log(fooditems);


// pop() method

fooditems.pop("spinach");
console.log(fooditems);


// toString Method

console.log(fooditems.toString());      //converts Array to String

let marks = [85, 97, 44, 37, 76, 60];
console.log(marks.toString());      //converts Array to String


//concat(): to join multiple arrays and return result

let marvelheros = ["ironman", "thor", "hulk", "captainamerica"];
let dcheroes = ["superman", "batman"];
let heroes = marvelheros.concat(dcheroes);
console.log(heroes);



//unshift(): to add to the start

marvelheros.unshift("antman");      //antman is added at the start
console.log(marvelheros);

marvelheros.shift()
console.log(marvelheros);      //antman is deleted at the start



//slice(): returns a specific piece of an array

console.log(marvelheros.slice(1,2));        //Ans: ['thor']

console.log(marvelheros.slice(1,3));        //Ans: ['thor', 'hulk']



//splice(): changes original array (add, remove, replace)
/*splice(startindex, delCount, newElement).

startindex: It means, start from which index
delCount: delete how many index's
newElement: what new element you want to add */

let arr = [1,2,3,4,5,6];
console.log(arr);
arr.splice(2,2,101,102);
console.log(arr);
arr.splice(0,1,99);
console.log(arr);

