/*
* 1. Use logical operators to find whether the age of a person lies
* between 10 and 20?
*/

let age = 65;

if (age <= 0) {
    console.log("Invalid age!");
}
else if (age > 0 && age < 10) {
    console.log("You're just a child!");
}
else if (age >= 10 && age <= 20) {
    console.log("You are a teenager");
}
else {
    console.log("You're an adult now!");
}

/*
* 2. Demonstrate the use of switch cases statements in JS
*/

let grade = 'E';

switch (grade) {
    case 'F':
        console.log(`You Failed!`);
        break;
    case 'O':
        console.log(`Excellent!`);
        break;
    case 'A':
        console.log(`Good!`);
        break;
    case 'B':
        console.log(`Fair!`);
        break;
    case 'C':
        console.log(`Can do Better!`);
        break;
    case 'D':
        console.log(`You need improvement!`);
        break;
    case 'E':
        console.log(`You just passed by grace marks!`);
        break;
    default:
        console.log(`Invalid grade`);
        break;
}

/*
* 3. Write a JS program to find whether a number is 
* divisible by 2 and 3
*/

let check_divisibility_by_3 = (num) => {
    let sum = 0;
    for (digits of number.toString()) {
        sum += parseInt(digits);
    }
    if (sum % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let number = 9;

if (number % 2 === 0 && check_divisibility_by_3(number)) {
    console.log("It is divisible by 2 and 3");
}
else {
    console.log("This number is not divisible by 2 and 3!");
}

/*
* 4. Write a JS program to find whether a number is 
* divisible by either 2 or 3
*/

if (number % 2 === 0 || number % 3 === 0) {
    console.log("It is divisible by either 2 or 3!");
}
else {
    console.log("This number is neither divisible by 2 or 3!");
}

/*
* 5. Print "You can Drive" or "You cannot drive"
* based on age being greater than 18 using ternary operator
*/

let my_age = 17;

my_age >= 18 ? console.log("You can driver") : console.log("You cannot drive");

// let can_driver = my_age >=18 ? true : false;

// if(can_driver)
//     console.log("You can drive");
// else
//     console.log("You cannot driver");
