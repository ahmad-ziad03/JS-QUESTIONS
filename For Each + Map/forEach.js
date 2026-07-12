// TASK ONE
console.log("TASK ONE");
function doubleValues(arr) {
    var newArr = [];
    arr.forEach(function (num) {
        var newNum = num * 2;
        newArr.push(newNum);
    });
    console.log(newArr);
}

var arr1 = [1, 2, 3];
var arr2 = [5, 1, 2, 3, 10];
doubleValues(arr1);
doubleValues(arr2);

// TASK TWO
console.log("TASK TWO");
function onlyEvenValues(arr) {
    var newArr = [];
    arr.forEach(function (num) {
        if (num % 2 == 0) {
            newArr.push(num);
        }
    });
    console.log(newArr);
}

var arr1 = [1, 2, 3];
var arr2 = [5, 1, 2, 3, 10];
onlyEvenValues(arr1);
onlyEvenValues(arr2);

// TASK THREE
console.log("TASK THREE");
function showFirstAndLast(arr) {
    var newArr = [];
    arr.forEach(function (str) {
        var newStr = str[0] + str[str.length - 1];
        newArr.push(newStr);
    });
    console.log(newArr);
}

var str1 = ["colt", "matt", "tim", "udemy"];
var str2 = ["hi", "goodbye", "smile"];
showFirstAndLast(str1);
showFirstAndLast(str2);

// TASK FOUR
console.log("TASK FOUR");
function addKeyAndValue(arr, key, value) {
    arr.forEach(function (element, index, array) {
        element[key] = value;
    });
    console.log(arr);
}
var arr = [
    { name: "Elie" },
    { name: "Tim" },
    { name: "Matt" },
    { name: "Colt" },
];
addKeyAndValue(arr, "title", "instructor");

// TASK FIVE
console.log("TASK FIVE");
function vowelCount(str) {
    var arr = str.toLowerCase().split("");
    var ob = {};
    arr.forEach(function (ele) {
        if (
            ele == "a" ||
            ele == "e" ||
            ele == "i" ||
            ele == "o" ||
            ele == "u"
        ) {
            if (ob[ele] == null) {
                ob[ele] = 1;
            } else {
                ob[ele] = ob[ele] + 1;
            }
        }
    });
    console.log(ob);
}
var str = "Elie";
vowelCount(str);
var str = "Tim";
vowelCount(str);
var str = "Matt";
vowelCount(str);
var str = "hmmm";
vowelCount(str);
var str = "I Am awesome and so are you')";
vowelCount(str);
