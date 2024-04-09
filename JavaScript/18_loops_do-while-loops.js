/* Loops : Loops are used to execute a piece of 
code again and again

4) do -while Loop
In do-while loop the condition is checked at the end. this ensures
the condition is run atleast once
*/

//while condition:

let i = 20;

while (i<=10)   {       /* here itself the condition will fail as
                        i = 20 and while condition will never 
                        have i<=10. Hence it will fail */
    console.log("Hello do-while loop");
    i++;
}


// do-while condition:

let I = 20;
do {
    console.log ("HellO");
    i++;
    console.log(i);     //This will show 21 as we did i++ 
}   while (i <= 10);








/* Print 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log("i = ", i);
}

*/



