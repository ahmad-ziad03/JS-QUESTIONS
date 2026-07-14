var form = document.getElementById("loginForm");
var message = document.getElementById("message");

form.onsubmit = function (e) {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!email || !password) {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var matchedUser = null;

    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            matchedUser = users[i];
        }
    }

    if (matchedUser) {
        message.style.color = "green";
        message.textContent =
            "Welcome back, " +
            matchedUser.firstName +
            " " +
            matchedUser.lastName +
            "!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid email or password.";
    }
};
