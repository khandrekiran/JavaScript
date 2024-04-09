

let scoreA = 33;
let scoreB = "33";
let scoreC = "33abc";
let scoreD = null;
let scoreE = undefined;
let scoreF = true;
console.log("scoreA : ", typeof scoreA);    //number
console.log("scoreB : ", typeof(scoreB));   //string

let valueInNumber = Number(scoreC);
console.log("scoreC : ", typeof valueInNumber); //number
console.log(valueInNumber);         //NaN (not a number)
console.log("scoreD : ", typeof scoreD);
console.log("scoreE : ", typeof scoreE);
console.log("scoreF : ", typeof scoreF);

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

