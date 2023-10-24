//Roberto Bueno
//Daily Warm-Ups
// let name = "Roberto Bueno"
// let year = "2013"
// console.log(`My name is ${name} and I graduated high school in ${year}.`)

// const capitalizeFirstLetter = "codeup"
// const capitalizeFirstLetter2 = (capitalizeFirstLetter.charAt(0)).toUpperCase()
// console.log(capitalizeFirstLetter2);

//Capitalizing first letter of a word
// function capitalizeFirstLetter(robert){
//     return robert.charAt(0).toUpperCase() + robert.slice(1)
// }
//
// console.log(capitalizeFirstLetter("robert"))

//Another way to do the method above ^^^
// const capitalizeFirstLetter = (str) => {
//     console.log(str);
//     let firstLetter = str.substring(0, 1);
//     let capitalizedFirstLetter = firstLetter.toUpperCase();
//     let restOfWord = str.substring(1);
//
//     return capitalizedFirstLetter + restOfWord;
// }
// console.log(capitalizeFirstLetter("testString"));
//
// function largestNum(num1, num2, num3){
//     return Math.max(num1, num2, num3)
// }
//
// console.log(largestNum(1, 2, 3))

let num = 100

while(num >= 5) {

    if (num % 2 === 0) {
        console.log(num + ' even')
    } else {
        console.log(num);
    }
    num -= 5
}

//------------------Warm up 9/20---------------------
function returnEvenNums() { //------------ function declaration
    for(let i = 1; i <= 100; i++){ //--- for loop
        if(i % 2 === 0){ //---------------------- if statement
            console.log(i);
        }
    }
}

returnEvenNums();
//--------------- Warm up 10/23------------------
let favoriteMovies = ["Interstellar", "Wolf of Wallstreet", "Endgame", "Jumper", "Far From Home"];

favoriteMovies.sort()
favoriteMovies.forEach((movies) => console.log(movies))

//------------ Warm up 10/24------------

const cars = [
    {
        make: "Honda",
        model: "Civic",
        color: "Black"
    },
    {
        make: "Nissan",
        model: "370z",
        color: "Black"
    }
];

cars.forEach(car => console.log(`${car.make} ${car.model} ${car.color}`))