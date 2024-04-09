/* Strings */

/* Practice Questions

Q1) Prompt the user to enter their full name. Generate a username for
the based on the input. Start username with @, followed by their
ful name and ending with the fullname length.

eg: user name = "kirankhandre", username should be "@kirankhandre12"

*/


let str1firstname = prompt("Enter your firstname: ");
let str2lastname = prompt("Enter your lastname: ");
//let strUserName = "@"+str1firstname.concat(str2lastname);
let strUserName = "@"+str1firstname+str2lastname;
let strUserNameNew = strUserName.toLowerCase();
console.log("Your username is:", strUserNameNew,strUserNameNew.length);

// Replace the first occurrence of 'k' with '@k'
//console.log(strUserNameNew.replace("k", "@k"));


//console.log(strUserNameNew,strUserNameNew.length);



