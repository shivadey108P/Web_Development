'use strict';

const shiva = {
    firstName: "Shiva",
    lastName: "Dey",
    birthYear: 1999,
    job: "Developer",
    friends: ["Ram", "Raj", "Nik"],
    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },
    hasDriverLicense: false,
    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()} ${this.age > 1 ? "years" : "year"} old ${this.job}, and he ${this.hasDriverLicense ? "has" : "doesn't have"} driver's license`
    }
}

console.log(shiva.getSummary());