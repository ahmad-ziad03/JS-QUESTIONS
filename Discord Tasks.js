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

// THREE
console.log("Task 3");
function calculateSupply(age, amountPerDay) {
    let remaining = 100 - age;
    let sup = 365 * remaining * amountPerDay;
    console.log(
        `You will need ${sup} cups of tea to last you until the ripe old age of 100`,
    );
}

calculateSupply(22, 3);

// Four
console.log("Task 4");
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("ahmad");

// FIVE
console.log("Task 5");
console.log(`in the first one it used a var without that is unknown
    in the second one it sets a number as a parameter and used a var without that is unknown
    in the third one it sets a string as a parameter used a var without that is unknown`);

// SIX
console.log("Task 6");
function double1(x) {
    return 2 * x;
}

function double2(x) {
    return 2 * x;
}

function double3(x) {
    return 2 * x;
}

// SEVEN
console.log("Task 7");
function cube(num) {
    console.log(num * num * num);
}
cube(2);

// EIGHT
console.log("Task 8");
function multi(num1, num2) {
    console.log(num1 * num2);
}
multi(2, 2);

// NINE
console.log("Task 9");
function canIGetADrivingLicense(age) {
    if (age >= 20) {
        console.log("Yes You Can");
    } else {
        console.log(`please come back after ${20 - age} years to get one`);
    }
}
canIGetADrivingLicense(2);

// TEN
console.log("Task 10");
function sameLength(firstWord, secondWord) {
    if (firstWord.toString().length == secondWord.toString().length) {
        console.log(true);
    } else {
        console.log(false);
    }
}

sameLength("ahmad", 12345);

// ELEVEN
// console.log("Task 11");
function largerNubmer(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else return num2;
}

console.log(largerNubmer(11, 2));

// TWELVE
console.log("Task 12");
function smallerNubmer(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(smallerNubmer(110, 20, 5));

// THIRTEEN
console.log("Task 13");
function shorterString(str1, str2, str3, str4, str5) {
    let arr = [str1, str2, str3, str4, str5];

    let shortest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
    }

    console.log(shortest);
}

shorterString("ahmad", "ziad", "hassan", "abu", "serdaneh");

// FOURTEEN
console.log("Task 14");
function longerString(str1, str2, str3, str4, str5) {
    let arr = [str1, str2, str3, str4, str5];

    let longest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    console.log(longest);
}

longerString("ahmad", "ziad", "hassan", "abu", "serdaneh");

// FIFTEEN
console.log("Task 15");
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(9));

// SIXTEEN
console.log("Task 16");
function isOdd(num) {
    if (num % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isOdd(8));

// SEVENTEEN;
console.log("Task 17");
function positive(num) {
    return Math.abs(num);
}
console.log(positive(-10));

// EIGHTEEN
console.log("Task 18");
function fullName(fname, lname) {
    let full = `${fname} ${lname}`;
    console.log(full);
}
fullName("Ahmad", "Ziad");

// NINETEEN
console.log("Task 19");
function average(num1, num2, num3, num4, num5) {
    let avg = (num1 + num2 + num3 + num4 + num5) / 5;
    console.log(avg);
}

average(7, 9, 3, 5, 5);

// TWINY
console.log("Task 20");
function randomNumber() {
    let num = Math.random();
    console.log(num);
}
randomNumber();

// TWINY ONE
console.log("Task 21");
function randomBetweenNumbers(parOne, parTwo) {
    let num = Math.random() * parTwo + parOne;
    console.log(num);
}
randomBetweenNumbers(5, 7);

// TWINY TWO
console.log("Task 22");
function scoreInUniversty(one) {
    if (one < 50) {
        console.log("F");
    } else if (one >= 50 && one <= 69) {
        console.log("D");
    } else if (one >= 70 && one <= 84) {
        console.log("C");
    } else if (one >= 84 && one <= 94) {
        console.log("B");
    } else if (one >= 95 && one <= 100) {
        console.log("A");
    }
}
scoreInUniversty(57);

// TWINY THREE
console.log("Task 23");
let count = 0;

function counter() {
    count++;
    return count;
}
console.log(counter());
console.log(counter());
console.log(counter());

// TWINY FOUR
console.log("Task 24");
function resetCounter() {
    let oldCount = count;
    count = 0;
    return oldCount + " and the counter reset now";
}

console.log(resetCounter());
console.log(counter());
