var registerBtn = document.getElementById("registerBtn");

regBtn.onclick = function () {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        password === ""
    ) {
        message.textContent = "Please fill in all fields.";
    } else {
        localStorage.setItem(email + "_firstName", firstName);
        localStorage.setItem(email + "_lastName", lastName);
        localStorage.setItem(email + "_email", email);
        localStorage.setItem(email + "_password", password);
        message.textContent = "Registration successful! You can now log in.";
    }
};
