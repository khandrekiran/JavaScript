/* Arrays */


/* Q:   Create an array to store companies -> "Bloomberg, Microsoft, Uber,
        Google, IBM, Netflix"
    a. Remove first company from the array 
    b. Remove Uber and Add Ola in its place
    c.  Add Amazon at the end
*/



let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);     //prints companies names
companies.splice(0,1);
companies.splice(1, 1, "Ola");
(companies.push("Amazon"));
console.log(companies);     //prints updated companies names



/* Q:   For a given array with price of 5 items -> [250, 645, 300, 900, 50]
        All items have an offer of 10% OFF on them. Change the array to 
        store final price after applying offer
*/

