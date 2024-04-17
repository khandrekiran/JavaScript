//Change value of a variable under an object

const student =
{

    fullName: "Kiran Khandre",
    age: 30,
    marks: 1000,
    isPass: true,

};

student["age"] = student["age"] + 10;   //previously the age was 30, with this code the age is changed to 40

student["age"] = 50;   //previously the age was 30, with this code the age is changed to 50

student["marks"] = 1100;    //marks are changed to 1100


const Student = 
{
    fullName :  "Kiran",
    age : 35,
    marks : 800,
    isPass : true,
};

Student["fullName"] = "Kiran S Khandre";    //fullName is changed with this code

Student["marks"] = Student["marks"] + 100;  //marks are increased by 100

let a = 100.01;
a = 75.89;  //this will overwrite the previous value of a from 100.01 to 75.89

console.log(student.marks);
console.log(student.age);
console.log(Student["marks"]);
console.log(a);
console.log(Student.fullName);
