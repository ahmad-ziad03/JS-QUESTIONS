var form = document.getElementById("projectForm");
var hint = document.getElementById("hint");
var cardsDiv = document.getElementById("cards");

function showCards() {
    var projects = JSON.parse(sessionStorage.getItem("projects")) || [];
    cardsDiv.innerHTML = "";

    for (var i = 0; i < projects.length; i++) {
        var p = projects[i];
        cardsDiv.innerHTML +=
            "<div class='card'>" +
            "<h3>" +
            p.subject +
            "</h3>" +
            "<p>" +
            p.description +
            "</p>" +
            "<p><b>User Types:</b> " +
            p.userTypes +
            "</p>" +
            "<p><b>Technology Used:</b> " +
            p.tech +
            "</p>" +
            "</div>";
    }
}

form.onsubmit = function (e) {
    e.preventDefault();

    var subject = document.getElementById("subject").value;
    var description = document.getElementById("description").value;
    var userTypes = document.getElementById("userTypes").value;
    var tech = document.getElementById("tech").value;

    if (!subject || !description || !userTypes || !tech) {
        hint.textContent = "Please fill in all fields.";
        return;
    }
    hint.textContent = "";

    var projects = JSON.parse(sessionStorage.getItem("projects")) || [];
    projects.push({
        subject: subject,
        description: description,
        userTypes: userTypes,
        tech: tech,
    });
    sessionStorage.setItem("projects", JSON.stringify(projects));

    form.reset();
    showCards();
};

showCards();
