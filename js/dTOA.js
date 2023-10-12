let a = 1;
//a will be 1
console.log(a)
let b = a++;
//b will be 2
console.log(b)
let c = ++a;
console.log(c)
//c will be 5
// what is the value of a, b, and c?

let d = "hello";
let e = false;
console.log(e++)
console.log(d++);


let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed + 2)

let price = 2.7;
price.toFixed(2);
console.log(price.toFixed(2))

// let price = "2.7";
// price.toFixed(2);
// console.log(price.tofixed(2))

isNaN(0)
//false
console.log(isNaN(0))

isNaN(1)
//false
console.log(isNaN(1))

isNaN("")
//false
console.log(isNaN(""))

isNaN("string")
//true
console.log(isNaN("string"))

isNaN("0")
//false
console.log(isNaN("0"))

isNaN("1")
//false
console.log(isNaN("1"))

isNaN("3.145")
//false
console.log(isNaN("3.145"))

isNaN(Number.MAX_VALUE)
//false
console.log(isNaN(Number.MAX_VALUE))

isNaN(Infinity)
//false
console.log(isNaN(Infinity))

isNaN("true")
//true
console.log(isNaN("true"))

isNaN(true)
//false
console.log(isNaN(true))

isNaN("false")
//true
console.log(isNaN("false"))

isNaN(false)
//false
console.log(isNaN(false))

!true
//false
console.log(!true)

!false
//true
console.log(!false)

!!true
//true
console.log(!!true)

!!false
//false
console.log(!!false)

!!0
//false
console.log(!!0)

!!-0
//false
console.log(!!-0)

!!1
//true
console.log(!!1)

!!-1
//true
console.log(!!-1)

!!0.1
//true
console.log(!!0.1)

!!"hello"
//true
console.log(!!"hello")

!!""
//false
console.log(!!"")

!!''
//false
console.log(!!'')

!!"false"
//true
console.log(!!"false")

!!"0"
//true
console.log(!!"0")

//************ Question 2 **********
let sample = "Hello Codeup";
console.log(sample.length)
//.toUpperCase makes everything uppercase
//.toLocalLowerCase makes everything lowercase
console.log(sample.toUpperCase())
// Or (sample += " Student") -- concatenation to add " Students"
console.log(sample += " Students")
//Replacing Students with Class
console.log(sample.replace("Students", "Class"))
console.log(sample.indexOf("c")) //we get back -1 because lowercase c does not exist in the sample variable
console.log(sample.indexOf("C"))
console.log(sample.indexOf("p"))
console.log((sample.substring(6, 12)))
//Another solution to this ^^
//console.log(sample.substring(sample.indexOf("C"), 1 + sample.indexOf("p")))

//********** Question 3 **********
let movie = 3
let lm = movie * 3
let bb = movie * 5
let he = movie * 1
let total = lm + bb + he
console.log(total)

let googlePerHour = 400
let amazonPerHour = 380
let facebookPerHour = 350
let googleHoursWorked = googlePerHour * 6
let amazonHoursWorked = amazonPerHour * 4
let facebookHoursWorked = facebookPerHour * 10
let totalPay = googleHoursWorked + amazonHoursWorked + facebookHoursWorked
console.log(totalPay)

//********** Question 4 **********
let username = 'codeup';
let password = 'notastrongpassword';
//The password must be atleast 5 characters
let passLength = password.length > 4
console.log(passLength);
//The password must not include the username
let notInclude = !password.includes(username)
console.log(notInclude)
//The username must be no more than 20 characters
let userLength = username.length <= 20
console.log(userLength)
//Neither the username or password can start or end with whitespace
let whiteSpace = (username.trim() == username) && (password.trim() == password)
console.log(whiteSpace)








