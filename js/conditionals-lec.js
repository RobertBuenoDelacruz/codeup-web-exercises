// console.log("Hello World")

let age = 16;

// if(age >= 16) {
//     console.log("You are eligible to drive")
// }
//
// if(age < 16) {
//     console.log("You cannot drive yet.")
// }

//same example with an else condition
if(age >= 16) {
    console.log("You can drive")
} else {
    console.log("Grow up")
}

//if/else if/else statements & conditions
//Example 1
// let currentDay = prompt("What is the day today?").toLowerCase()

// if(currentDay === 'monday' ||
//     currentDay === 'tuesday' ||
//     currentDay === 'wednesday') {
//     console.log('I love ' + currentDay)
// } else {
//     console.log(currentDay + " is not a valid day")
// }
//Example 2
let letsPlay = confirm("Do you want to play?");

if(letsPlay) {
    console.log("Great let play xyz!")
} else {
    console.log("Maybe next time")
}

//Example 3
const username = "user"
const password = "password"

//prompt the user to enter a username
const userUsername = prompt("Please enter a username.")
const userPassword = prompt("Please enter a password.")
//Next I want to console.log("You are logged in") if username, userUsername && password, userPassword match

// if(username === userUsername && password === userPassword) {
//     console.log("You are logged in")
// } else if(username !== userUsername && password !== userPassword) {
//     console.log("Incorrect username and password")
// } else if (username !== userUsername) {
//     console.log("Incorrect username")
// } else if (password !== userPassword) {
//     console.log("Incorrect password")
// } else {
//     console.log("unexpected error")
// }

//Nested Conditional example
if(username === userUsername) {
    if (password === userPassword) {
        console.log("Logged in")
    } else {
        console.log("Invalid password")
    }
} else {
    console.log("Invalid username")
}

//Ternary Operators (Shorthand if/else '?' or ":")
// ? --> represents 'if' condition
// : --> represents 'else' condition
// let name = "Bob"
// let greeting = (name === "Bob") ? ("Hello " + name) : ("Hello stranger!")
// console.log(greeting)
//
// let currentCurrentDay = currentDay === 'monday' || currentDay === 'tuesday' || currentDay === 'wednesday' ? "I love " + currentDay : currentDay + " is not a valid day"
// console.log(currentCurrentDay)

//Switch statement example
let daysOfWeek = "Saturday"

switch(daysOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a week day!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a weekend day!")
        break;
    default:
        console.log("Invalid day of the week");
}
//using function in if/else
function sayHello(name) {
    if(name.length <= 20) {
        return `Hello, ${name}`
    } else {
        return "That is way to long of a name!"
    }
}

console.log(sayHello("Robert"));