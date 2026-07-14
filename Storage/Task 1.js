var form = document.getElementById("profileForm");
var hint = document.getElementById("hint");
var cardsDiv = document.getElementById("cards");

function showCards() {
    var profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    cardsDiv.innerHTML = "";

    for (var i = 0; i < profiles.length; i++) {
        var p = profiles[i];
        cardsDiv.innerHTML +=
            "<div class='card'>" +
            "<h3>" +
            p.name +
            " (" +
            p.age +
            ", " +
            p.gender +
            ")</h3>" +
            "<p>" +
            p.description +
            "</p>" +
            "<p><b>Major/University:</b> " +
            p.major +
            "</p>" +
            "<p><b>Languages:</b> " +
            p.languages.join(", ") +
            "</p>" +
            "</div>";
    }
}

form.onsubmit = function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var genderInput = document.querySelector('input[name="gender"]:checked');
    var description = document.getElementById("dis").value;
    var major = document.getElementById("major").value;

    var checked = document.querySelectorAll('input[type="checkbox"]:checked');
    var languages = [];
    for (var i = 0; i < checked.length; i++) {
        languages.push(checked[i].value);
    }

    if (!name || !age || !genderInput || !description || !major) {
        hint.textContent = "Please fill in all fields.";
        return;
    }
    if (languages.length < 3) {
        hint.textContent = "Please select at least 3 programming languages.";
        return;
    }
    hint.textContent = "";

    var profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    profiles.push({
        name: name,
        age: age,
        gender: genderInput.value,
        description: description,
        major: major,
        languages: languages,
    });
    localStorage.setItem("profiles", JSON.stringify(profiles));

    form.reset();
    showCards();
};

showCards();
