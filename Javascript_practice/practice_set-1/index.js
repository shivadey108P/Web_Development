/*
* 1. Create a variable of type string and try to
* to add a number to it!
*/

let str = "Shiva Dey";

console.log(str);

let new_variable = str + 123;
console.log(new_variable);

/*
* 2. Use typeof of operator and try to find the datatype
* of the string in last question Ans: it converts int to string variable
*/

console.log(typeof new_variable);

/*
* 3. Create a const object in javascript! Can you change it
* to hold a number later? Ans: No
*/

const details = {
    first_name: 'Shiva',
    last_name: 'Dey',
    middle_name: 'Narayan',
}

// details = {
//     name: "Shiva Dey",
//     age: 25
// };

// console.log(details);

/*
* 4. Try to add a new key to the const object in problem-3
* were you able to do it? Ans: Yes
*/

console.log(details);

details.age = 25;

console.log(details);

details.age = 26;

console.log(details);



let personal_details = {
    first_name: 'Shiva',
    last_name: 'Dey',
    middle_name: 'Narayan',
}

personal_details = {
    name: "Shiva Dey",
    age: 25
};

console.log(personal_details);


/*
* 5. Write a  JS program to create a  word-meaning 
* dictionary of 5 words.
*/

let word_meaning =
{
    Ubiquitous: "Means existing everywhere or omnipresent. For example, \"There were no ubiquitous advertising campaigns promoting sports brands and fast food restaurants.\"",
    Incandescent: "Means emitting a glowing light due to being heated.",
    Bibliopole: "Means a person who buys and sells books, especially rare ones.",
    Defenestration: "Means the act of throwing someone out of a window.",
    Umbra: "Means the fully shaded inner region of a shadow cast by an object."
};

for(key in word_meaning){
    console.log(`${key}: ${word_meaning[key]}`);
}
