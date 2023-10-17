//Roberto Bueno
//Daily Warm-Ups
let name = "Roberto Bueno"
let year = "2013"
console.log(`My name is ${name} and I graduated high school in ${year}.`)

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
const capitalizeFirstLetter = (str) => {
    console.log(str);
    let firstLetter = str.substring(0, 1);
    let capitalizedFirstLetter = firstLetter.toUpperCase();
    let restOfWord = str.substring(1);

    return capitalizedFirstLetter + restOfWord;
}
console.log(capitalizeFirstLetter("testString"));

function largestNum(num1, num2, num3){
    return Math.max(num1, num2, num3)
}

console.log(largestNum(1, 2, 3))