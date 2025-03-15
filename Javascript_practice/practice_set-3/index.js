const readline = require('node:readline');


const r = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

/*
* Quiz: Write a sample program demonstrating while loop
*/

let i = 1;
while(i<5){
    console.log(i);
    i++;
}

/*
* Quiz: Write a sample program demonstrating do while loop
*/

let j = 10;
do{
    console.log(j);
    j++
}while(j<10);


/*
* Q1: Write a program to print the marks of a student in an object
* using for loop
*/
let obj = {
    harry: 98,
    rohan: 70,
    aakash: 7
}

/*
* Q2: Write the program in Q1 using for in loop
*/

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

/*
* Q3: Write a program to print 'try again' until the user enters the 
* correct numbers
*/

let guess_the_number = ()=>{
    let guessNumber = 5;
    let askQuestion = ()=>{
        r.question("Guess the number between 1 to 10: ",(num)=>{
            if(parseInt(num) === guessNumber)
            {
                console.log("Well done, you guessed it right!");
                r.close();
            }
            else{
                console.log("Try Again!");
                askQuestion();
            }
        });
    }    
    askQuestion();
}

// guess_the_number();


/*
* Q4: Write a function to find mean of 5 numbers
*/

function mean_of_5(five_num)
{
    let sum = 0;
    for (const key in five_num) {
        if (Object.prototype.hasOwnProperty.call(five_num, key)) {
            const element = five_num[key];
            sum += element;         
        }
    }
    console.log(`The mean of 5 numbers is: ${sum/5}`);
}

let numb = {
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50
}

mean_of_5(numb)
