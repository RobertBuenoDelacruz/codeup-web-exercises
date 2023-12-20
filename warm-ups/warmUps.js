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

//---------- Warm up 11/1--------------
// Objective: Create a function that takes in an array and returns an array of the names of people who know JavaScript.

    // Data Structure/Example Input:
    let developers = [
        {
            name: "Jonathan",
            languages: {
                frontend: ["HTML", "JavaScript", "CSS"],
                backend: ["Java"]
            }
        },
        {
            name: "Bonnie",
            languages: {
                frontend: ["JavaScript"],
                backend: []
            }
        },
        {
            name: "Raj",
            languages: {
                frontend: [],
                backend: ["C#", "Java", "Python"]
            }
        },
        {
            name: "Carmen",
            languages: {
                frontend: ["JavaScript", "HTML", "CSS", "React"],
                backend: ["C#", "Java", "Python", "TypeScript"]
            }
        },
    ]

// function knowsJavaScript(developers) {
//     let javascriptDevelopers = [];
//     for (let i = 0; i < developers.length; i++) {
//         if (developers[i].languages.frontend.includes("JavaScript")) {
//             javascriptDevelopers.push(developers[i].name);
//         }
//     }
//     return javascriptDevelopers;
// }
// console.log(knowsJavaScript(developers));

//*********** Arrow Function ***************
const knowsJavaScript = (arr) => {
    let javaScriptDevs = [];
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        for(let j = 0; j < arr[i].languages.frontend.length; j++) {
            console.log(arr[i].languages.frontend[j])
            if (arr[i].languages.frontend[j] === "JavaScript") {
                javaScriptDevs.push(arr[i].name)
            }
        }
    }
    return javaScriptDevs;
}
console.log(knowsJavaScript(developers))

//--------- Warm up 11/2 --------------
// Create a function that accepts three arguments (arrOfElements, bgColor, textColor), and returns the array of objects with their corresponding properties changed to the inputted values of bgColor and textColor.

let elements = [
    {
        el: "button",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Submit"
    },
    {
        el: "p",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Our company is better at doing company things than your company."
    },
    {
        el: "h2",
        style: {
            backgroundColor: "white",
            color: "black"
        },
        content: "Welcome Back!"
    }
];

function arrElements(arrOfElements, bgColor, textColor) {
    for(let i = 0; i < arrOfElements.length; i++) {
        arrOfElements[i].style.backgroundColor = bgColor;
        arrOfElements[i].style.color = textColor;
    }
    return arrOfElements;
}

console.log(arrElements(elements, "purple", "grey"))

//--------- Warm up 11/6 ------------
//FizzBuzz********
for (let i = 1; i <= 100; i++) {
    if (i % 3 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

//---------- Hacker Rank Warm Up -----------

// function diagonalDifference(arr) {
//     // Write your code here
//     const primaryDiag = arr.map ((e, i) => e[i])
//         .reduce((mem, curr) => mem + curr, 0);
//     const secondaryDig = arr
//         .map ((e, i) => {
//             let index = arr.length - i -1;
//             return e[index];
//         })
//         .reduce((mem, curr) => mem + curr, 0);
//     return Math.abs(primaryDiag - secondaryDig)
// }
//
// console.log(diagonalDifference([
//                                       [ 11, 2, 4 ],
//                                       [ 4, 5, 6 ],
//                                       [ 10, 8, -12 ]
//                                     ]))

//---------- Hacker Rank Warm Up -----------
let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
function aVeryBigSum(ar) {
    let sum = 0;
    for (let i= 0; i < ar.length; i++){
        sum += ar[i];
    }
    return sum;
}

console.log(aVeryBigSum(ar))

//---------- Hacker Rank Warm Up -----------


function birthdayCakeCandles(candles) {
    const maxHeight = Math.max(...candles);
    return candles.filter(height => height === maxHeight).length;
}

let candles = [3,2,1,3]
let result = birthdayCakeCandles(candles)
console.log(result)

//---------- Hacker Rank Warm Up -----------
// function pageCount(n, p) {
//     // Write your code here
//     let fromFront = Math.floor(p / 2);
//     let fromBack = Math.floor((n - p) / 2);
//     return Math.min(fromFront, fromBack);
// }


