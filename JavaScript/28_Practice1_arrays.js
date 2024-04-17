/* Arrays */


/* Q:   For a given array with marks of students [85, 97, 44, 37, 76, 60]
        Find the average marks of the entire class
*/



let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks){
    console.log (val);      //print all the values
    sum += val;             //assignment operator
}
console.log(sum);           //print value of sum = 399

let avg = sum/marks.length; //dividing the total length of array
console.log(`average marks of the class =  ${avg}`);




/* Q:   For a given array with price of 5 items -> [250, 645, 300, 900, 50]
        All items have an offer of 10% OFF on them. Change the array to 
        store final price after applying offer
*/

//using for-of-loop

let items = [250, 645, 300, 900, 50];
let i = 0;
for (let value of items) {                  //identify values of items
    console.log(`value of index ${i} = ${value}`);   //printing values of items
    let offer = value/10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}


//using for-loop
let item = [250, 645, 300, 900, 50];
for (let i =0; i< item.length; i++) {
    let offer = item[i]/10;
    item[i] -= offer;
}
console.log(items);




// loops over an Array

// for loop over an Array




/*
let cities = ["Pune", "London", "Bangalore", "Leamington Spa", "Warwick"];
for (let city of cities) {
    
    console.log(city.toUpperCase());    
}

*/