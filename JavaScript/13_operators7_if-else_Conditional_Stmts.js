//Conditional Statements


// if -else condition

let Mode = "blue";
let Colour;

if (Mode === "dard-mode") {
    Colour = "black";
}
else {
    Colour = "white";
}
console.log(Colour);

/*
let Age = 25;

if (Age >= 18) {
    
}
*/

let minage = 116;

if (minage >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}





let Age = 16;
let country = 'UK';

if (age >= 16 && country === 'UK') {
  console.log('You can get a driving license in UK.');
} else {
  console.log('You are not eligible to get a driving license in UK.');
}



let marks = 80;

if(marks > 100); {
    console.log ("You are Passed");
}



let num = 11;

if (num % 2 === 0 ) {
    console.log (num, "Is Even Number");
} else {
    console.log (num, "Is Odd Number");
}




// odd or even comparison

let Num = 11;

if(Num%2 === 0) {
console.log("even");
}
else {
  console.log("odd");
}







/*
const calcy = () =>{
    let sb1 = document.getElementById('sb1').value;
    let sb2 = document.getElementById('sb2').value;
    let sb3 = document.getElementById('sb3').value;
    let sb4 = document.getElementById('sb4').value;
    let sb5 = document.getElementById('sb5').value;
    let grades = "";
  
    let totalGrades = parseFloat(sb1) + parseFloat(sb2) + parseFloat(sb3) + parseFloat(sb4) + parseFloat(sb5);
  
    let perc = (totalGrades/500*100).toFixed(2);

    let gp = (perc/9.5).toFixed(1);

  
    if(perc <= 100  && perc >= 95){
       grades = ("10 & Grade is A1");
    }else if(perc <= 95  && perc >= 91){
       grades = gp.concat(" & Grade is A1");
    }else if(perc <= 90  && perc >= 81){
       grades = gp.concat(" & Grade is A2");
    }else if(perc <= 80  && perc >= 71){
       grades = gp.concat(" & Grade is B1");
    }else if(perc <= 70  && perc >= 61){
       grades = gp.concat(" & Grade is B2")
    }else if(perc <= 60  && perc >= 51){
       grades = gp.concat(" & Grade is C1");
    }else if(perc <= 50  && perc >= 41){
       grades = gp.concat(" & Grade is C2");
    }else if(perc <= 40  && perc >= 33){
       grades = gp.concat(" & Grade is D");
    }else if(perc <= 32  && perc >= 21){
       grades = gp.concat(" & Grade is E1");
    }else if(perc <= 20  && perc >= 00){
       grades = gp.concat(" & Grade is E2");
    }
  

    if(perc <= 100  && perc >= 91){
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade point is ${grades}, You are Pass. `
    }
    else if (perc <= 90  && perc >= 81){
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade point is ${grades}. You are Pass. `
    }
    else if (perc <= 80  && perc >= 71){
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade point is ${grades}. You are Pass. `
    }
    else if (perc <= 70  && perc >= 61){
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade point is ${grades}. You are Pass. `
    }
    else if (perc <= 60  && perc >= 51){
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade point is ${grades}. You are Pass. `
    }
    else if (perc <= 50  && perc >= 41){
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade point is ${grades}. You are Pass. `
    }
    else if (perc <= 40  && perc >= 33){
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade point is ${grades}. You are Pass. `
    }
    else if (perc <= 32  && perc >= 21){
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade point is ${grades}. You are Fail. `
    }
    else if(perc <= 20  && perc >= 00)
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade point is ${grades}. You are Fail. `
    }

    */