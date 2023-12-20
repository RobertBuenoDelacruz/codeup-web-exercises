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
//The Puppy Age Calculator
// function calculateDogAge(age)  {
//     let dogYears = 7 * age
//     console.log("Your dog is " + dogYears + " years old in dog years!")
// }
// calculateDogAge(2)
// -----------Weekly Workouts-----------
// let workouts = {
//     Monday: "Shoulders and Arms",
//     Tuesday: "Legs",
//     Wednesday: "Chest and Tri",
//     Thursday: "Legs and Shoulders",
//     Friday: "Back and Bi",
//     monday: "Shoulders and Arms",
//     tuesday: "Legs",
//     wednesday: "Chest and Tri",
//     thursday: "Legs and Shoulders",
//     friday: "Back and Bi"
// }
//
// function weeklyWorkouts(arrDayOfTheWeek) {
//
//     return workouts[arrDayOfTheWeek] || "There are no workouts scheduled for today."
// }
// let day = "monday";
// let result = weeklyWorkouts(day);
// console.log(result);

// Creating a function with a for loop

// let arr = [1,2,3,4,5]

// Hacker Rank Practice
        // Need more explanation on this
function cutTheSticks (arr) {
    let result = [];
    while(arr.length > 0) {
        result.push(arr.length);
        let minStick = Math.min(...arr);
        arr = arr.filter(stick => stick > minStick).map(stick => stick - minStick);
    }
    return result;
}

console.log(cutTheSticks([5, 6, 7]))

















