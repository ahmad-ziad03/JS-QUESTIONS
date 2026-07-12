// TASK ONE
console.log("TASK ONE");
function doubleNumbers(arr) {
    var newArr = arr.map(function (ele) {
        return ele * 2;
    });
    console.log(newArr);
}
doubleNumbers([2, 5, 100]);

// TASK TWO
console.log("TASK TWO");
function stringItUp(arr) {
    var newArr = arr.map(function (ele) {
        return ele.toString();
    });
    console.log(newArr);
}
stringItUp([2, 5, 100]);

// TASK THREE
console.log("TASK THREE");
function capitalizeNames(arr) {
    var newArr = arr.map(function (ele) {
        return ele.toUpperCase();
    });
    console.log(newArr);
}
capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);

// TASK FOUR
console.log("TASK FOUR");
function namesOnly(arr) {
    var newArr = arr.map(function (ele) {
        return ele.name;
    });
    console.log(newArr);
}
namesOnly([
    {
        name: "Angelina Jolie",
        age: 80,
    },
    {
        name: "Eric Jones",
        age: 2,
    },
    {
        name: "Paris Hilton",
        age: 5,
    },
    {
        name: "Kayne West",
        age: 16,
    },
    {
        name: "Bob Ziroll",
        age: 100,
    },
]);

// TASK FIVE
console.log("TASK FIVE");
function canGoToTheMatrix(arr) {
    var newArr = arr.map(function (ele) {
        if (ele.age >= 18) {
            return `${ele.name} can go to The Matrix`;
        } else {
            return `${ele.name} is under age`;
        }
    });
    console.log(newArr);
}
canGoToTheMatrix([
    {
        name: "Angelina Jolie",
        age: 80,
    },
    {
        name: "Eric Jones",
        age: 2,
    },
    {
        name: "Paris Hilton",
        age: 5,
    },
    {
        name: "Kayne West",
        age: 16,
    },
    {
        name: "Bob Ziroll",
        age: 100,
    },
]);

// TASK SIX
console.log("TASK SIX");
function readyToPutInTheDOM(arr) {
    var newArr = arr.map(function (ele) {
        return `<h1>${ele.name}</h1><h2>${ele.age}</h2>`;
    });
    console.log(newArr);
}
readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80,
    },
    {
        name: "Eric Jones",
        age: 2,
    },
    {
        name: "Paris Hilton",
        age: 5,
    },
    {
        name: "Kayne West",
        age: 16,
    },
    {
        name: "Bob Ziroll",
        age: 100,
    },
]);

// TASK SEVEN
console.log("TASK SEVEN");
function doubleValues(arr) {
    var newArr = arr.map(function (ele) {
        return ele * 2;
    });
    console.log(newArr);
}
doubleValues([1, 2, 3]);
doubleValues([1, -2, -3]);

// TASK EIGHT
console.log("TASK EIGHT");
function valTimesIndex(arr) {
    var newArr = arr.map(function (ele, index) {
        return ele * index;
    });
    console.log(newArr);
}
valTimesIndex([1, 2, 3]);
valTimesIndex([1, -2, -3]);

// TASK NINE
console.log("TASK NINE");
function extractKey(arr, key) {
    var newArr = arr.map(function (ele) {
        return ele[key];
    });
    console.log(newArr);
}
extractKey(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name",
);

// TASK TEN
console.log("TASK TEN");
function extractFullName(arr) {
    var newArr = arr.map(function (ele) {
        return `${ele.first} ${ele.last}`;
    });
    console.log(newArr);
}
extractFullName([
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia" },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele" },
]);
