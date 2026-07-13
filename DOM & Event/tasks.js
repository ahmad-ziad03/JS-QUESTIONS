// TASK ONE
console.log("TASK ONE");
var div1 = document.getElementsByClassName("taskOne")[0];
div1.onmouseenter = function () {
    div1.style.backgroundColor = "yellow";
    div1.style.fontWeight = "bold";
};

// TASK TWO
console.log("TASK TWO");
var countries = document.getElementById("countries");
var div2 = document.getElementById("showFlag");

countries.onchange = function () {
    div2.style.backgroundImage = `url('${countries.value}.jpg')`;
    div2.style.backgroundSize = "cover";
};

// TASK THREE
console.log("TASK THREE");
var inputOne = document.getElementById("passOne");
var inputTwo = document.getElementById("passTwo");
var div3 = document.getElementById("result");
var div4 = document.getElementById("result2");
var btn = document.getElementById("btn");

inputOne.onblur = function () {
    if (inputOne.value.length < 6) {
        div3.style.color = "red";
        div3.innerText = "short";
    } else {
        div3.innerText = "";
    }
};

inputTwo.onblur = function () {
    if (inputOne.value !== inputTwo.value) {
        div4.style.color = "red";
        div4.innerText = "the two passwords doesn't match";
    } else {
        div4.innerText = "";
        btn.style.display = "block";
    }
};

// TASK FOUR
console.log("TASK Four");
var show = document.getElementById("show");
var txt = document.getElementById("txt");
var hide = document.getElementById("hide");

show.onclick = function () {
    txt.style.display = "block";
};

hide.onclick = function () {
    txt.style.display = "none";
};

var show2 = document.getElementById("show2");
var txt2 = document.getElementById("txt2");
var hide2 = document.getElementById("hide2");

show2.onclick = function () {
    txt2.style.display = "block";
};

hide2.onclick = function () {
    txt2.style.display = "none";
};

// TASK FIVE
console.log("TASK FIVE");
var box = document.getElementById("box");
var font = document.getElementById("font");
var size = document.getElementById("size");
var italic = document.getElementById("italic");
var bold = document.getElementById("bold");
var underline = document.getElementById("underline");

font.onchange = function () {
    box.style.fontFamily = font.value;
};

size.onchange = function () {
    box.style.fontSize = size.value;
};

italic.onchange = function () {
    if (italic.checked) {
        box.style.fontStyle = "italic";
    } else {
        box.style.fontStyle = "normal";
    }
};

bold.onchange = function () {
    if (bold.checked) {
        box.style.fontWeight = "bold";
    } else {
        box.style.fontWeight = "normal";
    }
};

underline.onchange = function () {
    if (underline.checked) {
        box.style.textDecoration = "underline";
    } else {
        box.style.textDecoration = "none";
    }
};

// TASK SIX
console.log("TASK SIX");
var six = document.getElementById("six");
six.onclick = function () {
    six.style.backgroundColor = "red";
    six.style.transition = "3s";
};
