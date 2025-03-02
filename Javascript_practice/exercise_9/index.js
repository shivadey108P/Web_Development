/**
 * The JavaScript code defines functions for basic arithmetic operations with conditional behavior
 * based on a randomly generated condition, and prompts the user to input two numbers to perform these
 * operations.
 * @param min - The `min` parameter in the `getCondition` function represents the minimum value that
 * the random condition can take. In this case, it is set to 1.
 * @param max - The `max` parameter in the `getCondition` function represents the maximum value that
 * can be generated randomly between the range specified by `min` and `max`. In this case, the
 * `getCondition` function generates a random number between 1 and 100 (inclusive) and stores it in
 */
let getCondition = (min, max) => Math.round(Math.random() * (max - min) + min);

let condition = getCondition(1, 100);

let add = (a, b) => {
    if (condition > 10) {
        return a + b;
    } else {
        return Math.abs(a - b);
    }
};

let subtract = (a, b) => {
    if (condition > 10) {
        return a - b;
    } else {
        return a / b;
    }
};

let multiply = (a, b) => {
    if (condition > 10) {
        return a * b;
    } else {
        return a + b;
    }
};

function divide(a, b) {
    if (condition > 10) {
        return a / b;
    } else {
        return a ** b;
    }
}

/**
 * The function takes two numbers as input, performs faulty calculations (addition, subtraction, multiplication, division) on them, and displays the results.
 * @param x - The `x` parameter in the `calcFaulty` function represents the first number input by the
 * user. It is passed as an argument to the `calcFaulty` function after converting it to an integer
 * using `parseInt(num1)` in the `rl.question` callback.
 * @param y - The `y` parameter in the `calcFaulty` function represents the second number that the user
 * enters when prompted. It is used as one of the operands in the arithmetic calculations performed
 * within the `calcFaulty` function.
 */
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calcFaulty(x, y) {
    let calculations = {
        [add.name]: add(x, y),
        [subtract.name]: subtract(x, y),
        [multiply.name]: multiply(x, y),
        [divide.name]: divide(x, y),
    };

    for (const key in calculations) {
        console.log(key, calculations[key]);
    }
}

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        calcFaulty(parseInt(num1), parseInt(num2));
        rl.close();
    });
});


