/* Strings */

/* String Methods in JavaScripts


4) str.slice (start index , end index)  end index is non inclusive
2) str1.concat (str2)
3) str.replace (search.val, newVal)   

*/



let str = "Welcome to JavaScript";

let newstr = "Happy Learning"
let newstr2 = str.toLowerCase (str);
let res = str.concat (newstr);

console.log(str.slice(2,11));       // Ans: "lcome to"
console.log(res);    // Ans: Welcome to JavaScriptHappy Learning

let newres = str + newstr;    // Another way to concate
let newres2 = str + newstr2;
let newres3 = str + newstr + newstr2;

console.log(newres);
console.log(newres2);
console.log(newres3);




//3) str.replace (search.val, newVal)


let str4 = "Hello";

console.log (str4.replace("H", "Y"));   // Ans: Yello
console.log (str4.replace("o", "ow"));   // Ans: Hellow


// 4) str.charAt(index)


console.log(str.charAt(13));        // Ans: v
