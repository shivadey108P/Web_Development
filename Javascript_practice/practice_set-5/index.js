/*
* Q1: Create an array of numbers and take input from
* the use to add numbers to this array.
*/

// let num = prompt("Enter a number: ");
// console.log(num);

let arr = []
let i = 0
while (arr[i] == 0)
{
    let p = prompt("enter the array element");
    arr.push(p);
    i++;
}


console.log(arr)
console.log(typeof arr)

/*
* Q1: Keep adding numbers to the array in 1 until 0
* is added to the array
*/