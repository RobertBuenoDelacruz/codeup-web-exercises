// // alert("You have entered my practice webpage!")
// // let name = prompt("What is you name?")
// // alert(name + " sounds like a cool name!")
// //
// // let myAge = prompt(`How old are you ${name}?`)
// // alert(`${myAge}, wow that's old!`)
//
// function sayHello(){
//     console.log("Hello World!")
// }
//
// sayHello()
//
// //testing for self practice
//
// //The Fortune Teller
// function tellFortune(numOfChildren, partnersName, geographicLocation, jobTitle) {
//     return `I will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numOfChildren} children.`
// }
//
// console.log(tellFortune(3, 'Julie', 'London', 'Web Developer'))
//
// //The Puppy Age Calculator
// function calculateDogAge(age)  {
//     let dogYears = 7 * age
//     console.log("Your dog is " + dogYears + " years old in dog years!")
// }
// calculateDogAge(2)
//-----------Weekly Workouts-----------
let workOuts = {
    Monday: "Shoulders and Arms",
    Tuesday: "Legs",
    Wednesday: "Chest and Tri",
    Thursday: "Legs and Shoulders",
    Friday: "Back and Bi",
    monday: "Shoulders and Arms",
    tuesday: "Legs",
    wednesday: "Chest and Tri",
    thursday: "Legs and Shoulders",
    friday: "Back and Bi"
}

function weeklyWorkouts(arrDayOfTheWeek) {
    return workOuts[arrDayOfTheWeek] || "There are no workouts scheduled for today."
}
let day = "tuesday";
let result = weeklyWorkouts(day);
console.log(result);