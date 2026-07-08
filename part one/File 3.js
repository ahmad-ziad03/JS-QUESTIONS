// ONE
console.log("Task 1");
function tellFortune(childrenNum, wifeName, livingPlace, job) {
    console.log(
        `You will be a ${job} in ${livingPlace} ,and married to ${wifeName} with ${childrenNum} children`,
    );
}
tellFortune(3, "sal", "iceland", "full stack developer");

// TWO
console.log("Task 2");
let humanYears = 3;
function calcDogAge(years) {
    let dogAge = years * 7;
    console.log(`Your doggie is ${dogAge} years old in dog years!"`);
}

calcDogAge(humanYears);
