// ONE;
console.log("TASK 1");
let month = window.prompt("Enter the Number Of The Month you were born");
switch (month) {
    case "1":
        console.log("January");
        break;
    case "2":
        console.log("February");
        break;
    case "3":
        console.log("March");
        break;
    case "4":
        console.log("April");
        break;
    case "5":
        console.log("May");
        break;
    case "6":
        console.log("June");
        break;
    case "7":
        console.log("July");
        break;
    case "8":
        console.log("August");
        break;
    case "9":
        console.log("September");
        break;
    case "10":
        console.log("October");
        break;
    case "11":
        console.log("November");
        break;
    case "12":
        console.log("December");
        break;
}

// TWO;
console.log("TASK 2");
let num = 1;
for (let row = 1; row <= 4; row++) {
    let sum = "";
    for (let printedNums = 1; printedNums <= row; printedNums++) {
        sum += num + " ";
        num++;
    }
    console.log(sum);
}

// THREE;
console.log("TASK 3");
for (let i = 1; i <= 1000; i++) {
    if (i % 13 == 0) {
        console.log(i);
    }
}

// FOUR;
console.log("TASK 4");
let num1 = Number(window.prompt("Enter First Number For Task 4"));
let num2 = Number(window.prompt("Enter Second Number For Task 4"));
let sum = 0;
function multiplication2(first, sec) {
    for (let i = 1; i <= sec; i++) {
        sum += first;
    }
    console.log(sum);
}
multiplication2(num1, num2);

// FIVE;
console.log("TASK 5");
let hi = Number(window.prompt("Enter the hight for the triangle"));
let base = Number(window.prompt("Enter the base for the triangle"));
function area(hight, base) {
    let area = 0.5 * hight * base;
    return area;
}
console.log(area(hi, base));

// SIX;
console.log("TASK 6");
function isPandigital(num) {
    let strNum = num.toString();
    let answer =
        strNum.includes("0") &&
        strNum.includes("1") &&
        strNum.includes("2") &&
        strNum.includes("3") &&
        strNum.includes("4") &&
        strNum.includes("5") &&
        strNum.includes("6") &&
        strNum.includes("7") &&
        strNum.includes("8") &&
        strNum.includes("9");
    console.log(answer);
}
isPandigital(90864523148909);

// SEVEN;
console.log("TASK 7");
let drink = window.prompt("Enter Your Favorite Drink For Task 7");
switch (drink) {
    case "banana":
        console.log("The price of the banana drink is 20 dollars");
        break;
    case "strawberry":
        console.log("The price of the strawberry drink is 15 dollars");
        break;
    case "blueberry":
        console.log("The price of the blueberry drink is 25 dollars");
        break;
    case "avocado":
        console.log("The price of the avocado drink is 30 dollars");
        break;
}

// EIGHT;
console.log("TASK 8");
let fname = window.prompt("Enter Your First Name For Task 8");
let lname = window.prompt("Enter Your Last Name For Task 8");
function fullName(fname, lname) {
    let full = `${fname} ${lname}`;
    console.log(full);
}
fullName(fname, lname);
