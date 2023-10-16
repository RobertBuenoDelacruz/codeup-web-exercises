//Roberto Bueno
//Daily Warm-Ups
let name = "Roberto Bueno"
let year = "2013"
console.log(`My name is ${name} and I graduated high school in ${year}.`)

// const capitalizeFirstLetter = "codeup"
// const capitlizeFirstLetter2 = (capitalizeFirstLetter.charAt(0)).toUpperCase()
// console.log(capitlizeFirstLetter2);

function capitalizeFirstLetter(codeup){
    return codeup.charAt(0).toUpperCase() + codeup.slice(1)
}

let codeup = capitalizeFirstLetter() + codeup
