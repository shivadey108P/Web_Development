/*
* Q1: What will the following print in Javascript?
* console.log("har\"".length)
*/

console.log("har\"".length);

/*
* Q2: Explore the includes, startsWith & endsWith functions of a string
*/

let string1 = "I'm a hardworking person";
console.log(string1.includes('hard'));
console.log(string1.includes('lazy'));

console.log(string1.startsWith("I'm"));
console.log(string1.startsWith("I am"));

console.log(string1.endsWith('son'));
console.log(string1.endsWith('people.'));

/*
* Q3: Write a program to convert a given string to lowercase
*/

function to_lower_case(str)
{
    return str.toLowerCase();
}

console.log(to_lower_case("I can Do ANYTHING!"));

string2 = "i Can Do ANYTHING!";

string3 = string2.charAt(0).toUpperCase()+string2.slice(1,).toLowerCase();

console.log(string2);
console.log(string3);


/*
* Q4: Extract the amount out of this string
* "Please give Rs 1000"
*/

let sentence = "Please give Rs 1000";
let amount = parseInt((sentence.split('Rs')[1]).trim());
console.log(amount);


/*
* Q5: Try to change the 4th character of a given string 
* Were you able to do it?
*/

let given_string = "I will complete sigma web development course soon!"
console.log(given_string.replace('l', 't'));
console.log(given_string);