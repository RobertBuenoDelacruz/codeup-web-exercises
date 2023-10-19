
// function showMultiplicationTable(num) {
//     for(let i = 1; i <= 10; ++i) {
//         console.log(`${num} * ${i} = ${num * i}`);
//     }
// }
// showMultiplicationTable(8);

for(let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 180) + 20;
    let result = randomNum % 2 === 0 ? 'even' : 'odd'
    console.log(`${randomNum} is ${result}`)
}

for(let i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}

for(let i = 100; i >= 5; i -= 5) {
    console.log(i)
}
