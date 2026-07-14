var form = document.getElementById("registerForm");
var message = document.getElementById("message");

form.onsubmit = function (e) {
    e.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!firstName || !lastName || !email || !password) {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var emailExists = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            emailExists = true;
        }
    }
    if (emailExists) {
        message.style.color = "red";
        message.textContent = "An account with this email already exists.";
        return;
    }

    users.push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    });
    localStorage.setItem("users", JSON.stringify(users));

    message.style.color = "green";
    message.textContent = "Registration successful! You can now log in.";
    form.reset();
};
