const student =
{

    fullName: "Kiran Khandre",
    age: 30,
    marks: 1000,
    isPass: true,

};

const Student = 
{
    fullName :  "Kiran",
    age : 35,
    marks : 800,
    isPass : true,
};

let a = 100.01;
a = 75.89;  //this will overwrite the previous value of a from 100.01 to 75.89

console.log(student.marks);
console.log(student.age);
console.log(Student["marks"]);
console.log(a);


/* How to run this code:
Go to below tab named "terminal", below and type in => 
"node JavaScript/04_dataTypes1.js"
Hit Enter button
*/