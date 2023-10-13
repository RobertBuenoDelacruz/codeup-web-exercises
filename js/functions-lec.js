"use strict"

//Create a function named sum that takes in 2 numbers and returns the sum of 2 numbers;
//Defining a function is parameter and calling it is an argument

//Function Definition
function sum(num1, num2) {
    return num1 + num2
}
//Calling the function / Execute the function.
console.log(sum(5, 5));

//------- Mini Exercise -------
//Create a function named fullName that takes in two inputs, a first name and last name and returns the first name and last name concatenated together;

// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
//     //this will never run do to our return statement being executed before the console.log()
//     console.log('Function has finished!');
//}

//

//--------With Template Literal--------
// function fullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
//}

// console.log(fullName("Robert", "Bueno"));

// console.log(`Hello ${ fullName('Robert', 'Bueno')} did you know that 5 + 5 = ${sum(5, 5)}`);
//
// //Anonymous Function / Function Expression
// const decrement = function(input) {
//     return input - 1;
// }
//
// console.log(decrement(5));

//------- Longer Arrow Functions -------
// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
//      }
// const fullName = (firstName, lastName) => {
//     return firstName + " " + lastName;
//}

// console.log(fullName("Michael", "Myers"));

//------- Shorter Arrow Function -------
//The return is implied, if no curly braces are present.
const fullName = (firstName, lastName) => firstName + ' ' + lastName;

console.log(fullName('Michael', 'Myers'));

//Create a function that takes in a string and transforms the string to lowercase.

let sampleString = "HoW oN eArTh dOeS tHiS wOrK?"
//
// function lowerCaseString(str) {
//     sampleString = str.toLowerCase()
// }
// lowerCaseString(sampleString);
// console.log(sampleString)

// const lowerCaseString = (str) => {
//     sampleString = str.toLowerCase()
// }
// console.log(sampleString)
// console.log(lowerCaseString(sampleString))
// console.log(sampleString)

//-----------Default Function Parameter Values---------
function greeting(greeting = 'Howdy!') {
    return greeting;
}

console.log(greeting())
console.log(greeting("Greetings!"))

let globalVar = "Hello my name is Globie!"

function test() {
    let localVar = "Hello my name is Lola";
    console.log(localVar)
    {
        let innerVar = "Nested Var!"
        console.log(innerVar);
        console.log(localVar);
    }
    console.log(globalVar);
}







