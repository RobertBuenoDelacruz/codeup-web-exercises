while(true) {
    let userNumber = parseInt(prompt("Please enter an odd number between 1-50"));

    if(userNumber >= 1 && userNumber <= 50 && userNumber % 2 === 1) {
        console.log(`Number enter ${userNumber}`);

        for (let i = 1; i <= 50; i += 2) {
            if(i === userNumber) {
                console.log(("Yikes! Skipping number " + userNumber));
                continue;
            }
            console.log(`Here is an odd number ${i}`)
        }
        break;
    } else {
        alert('Invalid number, please enter an invalid number between 1 - 50.')
    }
}