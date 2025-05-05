// alert('Hello');

// let name_value = "Shiva";
// console.log(typeof name_value);

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const isBMIMarkGreater = BMIMark>BMIJohn;

console.log(BMIMark, BMIJohn, isBMIMarkGreater);



const currentYear = new Date().getFullYear()

// console.log(currentYear)


const firstName = "Shiva"
const lastName = "Dey"
const birthYear = 1999
const currentJob = "QA"

const myDesc = `Hi All! I'm ${firstName} ${lastName}, a ${currentYear-birthYear} year old ${currentJob}!`
console.log(myDesc)



const hasDriversLicense = prompt("Does Sarah has driving license?").toLocaleLowerCase() === 'true';
const hasGoodVision = prompt("Does Sarah has good vision?").toLocaleLowerCase() === 'true';
const isTired = prompt("Is Sarah tired?").toLocaleLowerCase() ==='true';


if (hasDriversLicense && hasGoodVision && !isTired){
    alert("Sarah can drive the car 🚗")
}
else{
    alert("Someone else needs to drive the car!")
}

// const hasDriversLicense = true
// const hasGoodVision = true
// const isTired = true

// if (hasDriversLicense && hasGoodVision && !isTired){
//     console.log("Sarah can drive the car 🚗")
// }
// else{
//     console.log("Someone else needs to drive the car!")
// }


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);


if(BMIMark>BMIJohn){
    console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`)
}
else{
    console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`)
}




const scoreDolphins = (110+108+101)/3;
const scoreKoalas = (98+101+116)/3;

console.log(scoreDolphins, scoreKoalas)

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy");
}
else if(scoreKoalas>scoreDolphins && scoreKoalas>= 100){
    console.log("Koalas win the trophy")
}
else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas>=100) {
    console.log("Both win the trophy")
}
else{
    console.log("No one has won any trophies")
}


const day_of_week = 'tuesday';

// switch(day_of_week){
//     case 'monday':
//         console.log("Prepare course structure");
//         console.log("Go to coding meetups");
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("Write code examples!");
//         break;
//     case 'friday':
//         console.log("Record Videos");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Enjoy your weekend :D");
//         break;
//     default:
//         console.log("Not a valid day!");
//         break;        
// }

if(day_of_week === 'monday'){
    console.log("Prepare course structure");
    console.log("Go to coding meetups");
}
else if(day_of_week === 'tuesday'){
    console.log('Prepare theory videos');
}
else if (day_of_week === 'wednesday' || day_of_week === 'thursday'){
    console.log("Write code examples!");
}
else if(day_of_week === 'firday'){
    console.log("Record Videos");
}
else if(day_of_week === 'saturday' || day_of_week === 'sunday'){
    console.log("Enjoy your weekend :D");
}
else{
    console.log("Not a valid day!");
}

*/

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)  