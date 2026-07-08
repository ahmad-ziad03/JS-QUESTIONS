// ONE
console.log("TASK 1");
var arr = [1, 7, 9, 45];
var arr2 = ["Str", "alex", "moh", "the", "fox", "over", "lazy", "dog"];

// TWO
console.log("TASK2");
var fruits = ["Tomato", "Banana", "Watermelon"];
console.log(`${fruits.indexOf("Banana")}`);
console.log(`${fruits.indexOf("Tomato")}`);

// THREE
console.log("TASK 3");
var food = ["burger", "mansaf", "mlukheah", "fast food", "kabseh"];
var sports = ["football", "wrestling", "basketball"];
var movies = ["harry potter", "shutter island", "اسف على الإزعاج"];
console.log(food, sports, movies);

// FOUR
console.log("TASK 4");
function firstOfArray(arr) {
    console.log(arr[0]);
}
var array = ["burger", "mansaf", "mlukheah", "fast food", "kabseh"];
firstOfArray(array);

// FIVE
console.log("TASK 5");
function lastOfArray(arr) {
    console.log(arr[arr.length - 1]);
}
var array = ["burger", "mansaf", "mlukheah", "fast food", "kabseh"];
lastOfArray(array);

// SIX
console.log("TASK 6");
var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.push(10);
array.unshift(8);
array.unshift(6);
array.unshift(4);
array.unshift(3);
array.unshift(1);
console.log(array);

// EIGHT
console.log("TASK 8");
function middleOfArray(arr) {
    if (arr.length % 2 != 0) {
        console.log(arr[arr.length / 2 - 0.5]);
    } else {
        console.log(arr[arr.length / 2 - 1]);
        console.log(arr[arr.length / 2]);
    }
}
var array = [
    "ziad",
    "Alaa",
    "mohammed",
    "ahmad",
    "omar",
    "oday",
    "fahad",
    "osaid",
];
middleOfArray(array);

// NINE
console.log("TASK 9");
var animals = ["cat", "ele", "bird"];
animals[0] = "zebra";
animals[1] = "elephant";
animals.pop();
console.log(animals);
var nums = [1, 2, 3, 8, 9];
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;
console.log(nums);

// TEN
console.log("TASK 10");
function indexOfArray(arr, index) {
    console.log(arr[index]);
}
var array = [
    "ziad",
    "Alaa",
    "mohammed",
    "ahmad",
    "omar",
    "oday",
    "fahad",
    "osaid",
];
indexOfArray(array, 5);

// ELEVEN
console.log("TASK 11");
function arrayExceptLast(arr) {
    console.log(arr.slice(0, arr.length - 1));
}
var array = [
    "ziad",
    "Alaa",
    "mohammed",
    "ahmad",
    "omar",
    "oday",
    "fahad",
    "osaid",
];
arrayExceptLast(array);

// TWELVE
console.log("TASK 12");
function addToEnd(arr, num) {
    arr.push(num);
    console.log(arr);
}

var nums = [1, 2, 3, 8, 9];
addToEnd(nums, 55);

// THIRTEEN
console.log("TASK 13");
var nums = [1, 2, 3, 8, 9, 10];
function forsumArray(arr) {
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
forsumArray(nums);

function whilesumArray(arr) {
    var sum = arr[0];
    var i = 1;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    console.log(sum);
}
whilesumArray(nums);

// FOURTEEN
console.log("TASK 14");
var nums = [-9, 1, 2, 3, 8, 9];
function minInArrayfor(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}
minInArrayfor(nums);

function minInArraywhile(arr) {
    var min = arr[0];
    var i = 1;
    while (i < arr.length) {
        if (arr[i] < min) {
            min = arr[i];
        }
        i++;
    }
    console.log(min);
}
minInArraywhile(nums);

// FIFTEEN
console.log("TASK 15");
function removeFromArrayfor(arr, ele) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != ele) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}
var nums = [1, 2, 3, 8, 9];
removeFromArrayfor(nums, 8);

function removeFromArraywhile(arr, ele) {
    var arr2 = [];
    var i = 0;
    while (i < arr.length) {
        if (arr[i] != ele) {
            arr2.push(arr[i]);
        }
        i++;
    }
    console.log(arr2);
}
var nums = [1, 2, 3, 8, 9];
removeFromArraywhile(nums, 8);

// SIXTEEN
console.log("TASK 16");
function oddArrayfor(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}
var nums = [1, 2, 3, 8, 9];
oddArrayfor(nums);

function oddArraywhile(arr) {
    var arr2 = [];
    var i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 != 0) {
            arr2.push(arr[i]);
        }
        i++;
    }
    console.log(arr2);
}
var nums = [1, 2, 3, 8, 9];
oddArraywhile(nums);

// SEVENTEEN
console.log("TASK 17");
function aveArrayfor(arr) {
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(avg);
}
var nums = [1, 2, 3, 8, 9];
aveArrayfor(nums);

var nums2 = [1, 2, 3, 8, 9, 77];
aveArrayfor(nums2);

function aveArraywhile(arr) {
    var sum = arr[0];
    var i = 1;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    var avg = sum / arr.length;
    console.log(avg);
}

var nums = [1, 2, 3, 8, 9];
aveArraywhile(nums);

var nums2 = [1, 2, 3, 8, 9, 77];
aveArraywhile(nums2);

// EIGHTEEN
console.log("TASK 18");
function shorterInArrayfor(arr) {
    var shorter = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length < shorter.length) {
            shorter = arr[i];
        }
    }
    console.log(shorter);
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
shorterInArrayfor(strings);

function shorterInArraywhile(arr) {
    var shorter = arr[0];
    var i = 1;
    while (i < arr.length) {
        if (arr[i].length < shorter.length) {
            shorter = arr[i];
        }
        i++;
    }
    console.log(shorter);
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
shorterInArraywhile(strings);

// NINETEEN
console.log("TASK 19");
function repeatCharfor(str, char) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            counter++;
        }
    }
    console.log(counter);
}
var string = "alex mercer madrasa rashed2 emad hala";
repeatCharfor(string, "a");
repeatCharfor(string, "z");

function repeatCharwhile(str, char) {
    var counter = 0;
    var i = 0;
    while (i < str.length) {
        if (str.charAt(i) == char) {
            counter++;
        }
        i++;
    }
    console.log(counter);
}
var string = "alex mercer madrasa rashed2 emad hala";
repeatCharwhile(string, "a");
repeatCharwhile(string, "z");

// TWINY
console.log("TASK 20");
function evenIndexOddLengthfor(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i += 2) {
        if (arr[i].length % 2 != 0) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
evenIndexOddLengthfor(strings);

function evenIndexOddLengthwhile(arr) {
    var arr2 = [];
    var i = 0;
    while (i < arr.length) {
        if (arr[i].length % 2 != 0) {
            arr2.push(arr[i]);
        }
        i += 2;
    }
    console.log(arr2);
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
evenIndexOddLengthwhile(strings);

// TWINY ONE
console.log("TASK 21");
function powerElementIndexfor(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        var newNum = Math.pow(arr[i], i);
        arr2.push(newNum);
    }
    console.log(arr2);
}
var nums = [44, 5, 4, 3, 2, 10];
powerElementIndexfor(nums);

function powerElementIndexwhile(arr) {
    var arr2 = [];
    var i = 0;
    while (i < arr.length) {
        var newNum = Math.pow(arr[i], i);
        arr2.push(newNum);
        i++;
    }
    console.log(arr2);
}
var nums = [44, 5, 4, 3, 2, 10];
powerElementIndexwhile(nums);

// TWINY TWO
console.log("TASK 22");
function evenNumberEvenIndexfor(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i += 2) {
        if (arr[i] % 2 == 0) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
evenNumberEvenIndexfor(nums);

function evenNumberEvenIndexwhile(arr) {
    var arr2 = [];
    var i = 0;
    i;
    while (i < arr.length) {
        if (arr[i] % 2 == 0) {
            arr2.push(arr[i]);
        }
        i += 2;
    }
    console.log(arr2);
}
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
evenNumberEvenIndexwhile(nums);
