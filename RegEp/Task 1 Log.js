var loginBtn = document.getElementById("loginBtn");

loginBtn.onclick = function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    var storedFirstName = localStorage.getItem(email + "_firstName");
    var storedLastName = localStorage.getItem(email + "_lastName");
    var storedEmail = localStorage.getItem(email + "email");
    var storedPassword = localStorage.getItem(email + "_password");

    if (storedPassword === null || ) {
        message.textContent = "No account found with this email.";
    } else {
        if (storedPassword === password) {
            message.textContent =
                "Welcome back, " + storedFirstName + " " + storedLastName + "!";
        } else {
            message.textContent = "Incorrect password.";
        }
    }
};
