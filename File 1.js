// ONE
document.write("<div>TASK 1</div>");
let op = window.prompt("Enter The sign of the operation for task ONE");
let num1 = Number(window.prompt("Enter The first number for task ONE"));
let num2 = Number(window.prompt("Enter The Second number for task ONE"));

if (op == "+") {
    console.log(num1 + num2);
    document.write(
        `<div>the operation is adding with the number ${num1} and ${num2}<br><br></div>`,
    );
} else if (op == "-") {
    console.log(num1 - num2);
    document.write(
        `<div>the operation is subtraction with the number ${num1} and ${num2}<br><br></div>`,
    );
} else if (op == "*") {
    console.log(num1 * num2);
    document.write(
        `<div>the operation is multiplication with the number ${num1} and ${num2}<br><br></div>`,
    );
} else if (op == "/") {
    console.log(num1 / num2);
    document.write(
        `<div>the operation is division with the number ${num1} and ${num2} <br><br></div>`,
    );
} else {
    document.write("<div>NOT AN OPERATION<div><br>");
}

// // TWO
document.write("<div>TASK 2</div>");
let mark = 70;
if (mark < 50) {
    document.write("<div>FAIL</div><br>>");
} else if (mark >= 50 && mark <= 59) {
    document.write("<div>D</div><br>");
} else if (mark >= 60 && mark <= 69) {
    document.write("<div>C</div><br>");
} else if (mark >= 70 && mark <= 79) {
    document.write("<div>B</div><br>");
} else if (mark >= 80 && mark <= 89) {
    document.write("<div>A</div><br>");
} else if (mark >= 90 && mark <= 100) {
    document.write("<div>A+</div><br>");
}

// THREE
document.write("<div>TASK 3</div>");
const π = 3.14;
document.write(`<div>π * 2 = ${π * 2} </div><br>`);

// FOUR
document.write("<div>TASK 4</div>");
let x = Number(window.prompt("Enter X for task FOUR"));
let y = Number(window.prompt("Enter Y for task FOUR"));

if (x > y) {
    console.log("Hello World");
    window.alert("Hello World");
    document.write("<div>Hello World</div><br>");
} else {
    console.log("Goodbye");
    window.alert("Goodbye");
    document.write("<div>Goodbye</div><br>");
}
