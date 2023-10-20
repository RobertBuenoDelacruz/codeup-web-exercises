// let num = 2
//
// while(num < 70000) {
//     console.log(num)
//     num *= 2
// }
//
// let allCones = Math.floor(Math.random() * 50) + 50;
// do {
//     let soldCones = Math.floor(Math.random() * 5) + 1;
//     console.log(allCones)
//     if (soldCones <= allCones) {
//         console.log(`Number of cones sold ${soldCones}`)
//         allCones = allCones - soldCones
//     } else if (soldCones > allCones) {
//         console.log(`Not enough cones to sell ${allCones}`)
//     }
// } while(allCones !== 0);
// console.log(`Yay! I sold them all`)

//******** For loops Lecture Notes ************
// for(let i = 10; i < 20; i++) {
//     console.log(i)
//}

//num += 5 is the same as num = num + 5*****
// for(let num = 0; num < 100; num += 5) {
//     console.log(num)
// }
//
// let hello = "hello"
// for(i = 0; i <= hello.length; i++) {
//     console.log(hello.charAt(i)) //another way is noted on line 34
    //console.log(hello[i]) //another way to read this is hello @ i, hello --> h(0) e(1) l(2) l(3) o(4), each character is an index
//}
//for (/*initialization*/; /*condition*/; /*increment*/) {
//    // body
// }
//when i stops j will also stop, j has no condition, j is dependent on i
// for (let i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j= ' + j);
// }

//Break (this console.log will never be reached since it is outside of the for loop, after the break
// for(let i = 0; i < 100; i += 5) {
//     console.log(i)
//     break;
//     console.log("snippet never reached");
// }
//
// for(let i = 0; i < 100; i += 5) {
//     console.log(i)
//     if(i === 50) {
//         break;
//     }
// }
// console.log("Trying to break out of the loop")
//
// // continue
// for (let i = 1; i <= 5; i++) {
//     if(i === 3) {
//         continue;
//     }
//     console.log(i)
// }
//
// for(let i = 1; i < 100; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

let i = 10
while(i < 10) {
    console.log(i);
}