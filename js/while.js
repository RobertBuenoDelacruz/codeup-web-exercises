let num = 2

while(num < 70000) {
    console.log(num)
    num *= 2
}

let allCones = Math.floor(Math.random() * 50) + 50;
do {
    let soldCones = Math.floor(Math.random() * 5) + 1;
    console.log(allCones)
    if (soldCones <= allCones) {
        console.log(`Number of cones sold ${soldCones}`)
        allCones = allCones - soldCones
    } else if (soldCones > allCones) {
        console.log(`Not enough cones to sell ${allCones}`)
    }
} while(allCones !== 0);
console.log(`Yay! I sold them all`)