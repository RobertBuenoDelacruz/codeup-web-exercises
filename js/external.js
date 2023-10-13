"use strict";
console.log("Hello from external JavaScript")

alert("Welcome to my Website!");

let color = prompt("What is your favorite color?");
alert(`Great, ${color} is my favorite color too!`);

let daysWithLittleMermaid = parseInt(prompt("How many days will you have the Little Mermaid?"))
alert(`You entered ${daysWithLittleMermaid}.`)

let daysWithBrotherBear = parseInt(prompt("How many days will you have Brother Bear?"))
alert(`You entered ${daysWithBrotherBear}.`)

let daysWithHercules = parseInt(prompt("How many days will you have Hercules?"))
alert(`You entered ${daysWithHercules}.`)

let total = (daysWithHercules + daysWithBrotherBear + daysWithLittleMermaid) * 3
//toFixed will add 2 decimal places, in this case you are using money.
 alert(`Your total is: $${total.toFixed(2)}`)

//-----------Payment Logic Problem---------------
let googlePay = parseInt(prompt("How much does google pay you per hour?"))

let facebookPay = parseInt(prompt("How much does facebook pay you per hour?"))

let amazonPay = parseInt(prompt("How much does amazon pay you per hour?"))

let googleHours = parseInt(prompt("How many hours did you work for google this week?"))

let facebookHours = parseInt(prompt("How many hours did you work for facebook this week?"))

let amazonHours = parseInt(prompt("How many hours did you work for amazon this week?"))

let totalPay = (googlePay * googleHours) + (facebookPay * facebookHours) + (amazonPay * amazonHours)

alert(`Your payment for this week will be $${totalPay.toFixed(2)}`)












// let movie = 3
// let lm = movie * 3
// let bb = movie * 5
// let he = movie * 1
// let total = lm + bb + he
// console.log(total)
//
// let googlePerHour = 400
// let amazonPerHour = 380
// let facebookPerHour = 350
// let googleHoursWorked = googlePerHour * 6
// let amazonHoursWorked = amazonPerHour * 4
// let facebookHoursWorked = facebookPerHour * 10
// let totalPay = googleHoursWorked + amazonHoursWorked + facebookHoursWorked
// console.log(totalPay)