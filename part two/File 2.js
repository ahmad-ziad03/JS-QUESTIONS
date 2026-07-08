// Question 1
console.log("QUESTION 1");
var str1 = "Hello ";
var str2 = "World";
var str3 = str1.concat(str2);
console.log(str3);

// Question 2
console.log("QUESTION 2");
var str = "JavaScript";
console.log(str.length);

// Question 3
console.log("QUESTION 3");
var str = "Programming";
console.log(str.charAt(0));

// Question 4
console.log("QUESTION 4");
var str = "writing code is fun";
console.log(str.substring(8, 12));

// Question 5
console.log("QUESTION 5");
var str = "cat";
console.log(str.replace("a", "e"));

// Question 6
console.log("QUESTION 6");
var str = "javascript";
console.log(str.toUpperCase());

// Question 7
console.log("QUESTION 7");
var str = "apple,banana,orange";
console.log(str.split(","));

// Question 8
console.log("QUESTION 8");
var arr = ["hello", "world"];
console.log(arr.join(" "));

// Question 9
console.log("QUESTION 9");
var str = "    hello world    ";
console.log(str.trim());

// Question 10
console.log("QUESTION 10");
var str = " hello world";
console.log(str.includes("world"));

// Question 11
console.log("QUESTION 11");
var str = "hello";
var reversed = str.split("").reverse().join("");
console.log(reversed);

// Question 12
console.log("QUESTION 12");
var str = "elephant";
var counter = 0;
for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == "e") {
        counter++;
    }
}
console.log(counter);

// Question 13
console.log("QUESTION 13");
var str = "racecar";
var s = 0;
var l = str.length - 1;
var state = true;
for (l, s; s <= l; s++, l--) {
    if (str[s] != str[l]) {
        state = false;
        break;
    }
}
console.log(state);

// Question 14
console.log("QUESTION 14");
var str = "hello world";
var arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
var str2 = arr.join(" ");
console.log(str2);

// Question 15
console.log("QUESTION 15");
var num = 1234.5678;
console.log(num.toFixed(2));

// Question 16
console.log("QUESTION 16");
var str = "There are 3 apples and 2 oranges";
var arr = str.split(" ");
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        arr2.push(arr[i]);
    }
}
console.log(arr2);

// Question 17
console.log("QUESTION 17");
var str = "example@email.com";
var pattern = /[^\s@]+@email\.com$/i;
console.log(str.match(pattern));

// Question 18
console.log("QUESTION 18");
var str = "This is a bad word";
console.log(str.replace("bad", "good"));

// Question 19
console.log("QUESTION 19");
var str = "aabbc";
var arr = str.split("");
var set = new Set(arr);
console.log(set);

// Question 20
console.log("QUESTION 20");
var str = "hello";
var sorted = str.split("").sort().join("");
console.log(sorted);

// Question 21
console.log("QUESTION 21");
var str = "listen";
var str2 = "silent";
if (str.split("").sort().join("") === str2.split("").sort().join("")) {
    console.log(true);
} else console.log(false);

// Question 22
console.log("QUESTION 22");
function reverseOrder(str) {
    var arr = str.split(" ");
    var arr2 = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
        arr2.join(" ");
    }
    console.log(arr2);
}
reverseOrder("The quick brown fox");

// Question 23
console.log("QUESTION 23");
function longestWord(str) {
    var arr = str.split(" ");
    var long = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (long.length < arr[i].length) {
            long = arr[i];
        }
    }
    console.log(long);
}
longestWord("Web development is fascinating");

// Question 24
console.log("QUESTION 24");
function Palindrome(str) {
    var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
}

console.log(Palindrome("A man, a plan, a canal, Panama!"));

// Question 25
console.log("QUESTION 25");
function countChars(str) {
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}
console.log(countChars("mississippi"));

// Question 26
console.log("QUESTION 26");
var str = "Hello World";
str = str.replaceAll("a", "1");
str = str.replaceAll("e", "2");
str = str.replaceAll("i", "3");
str = str.replaceAll("o", "4");
str = str.replaceAll("u", "5");
console.log(str);
