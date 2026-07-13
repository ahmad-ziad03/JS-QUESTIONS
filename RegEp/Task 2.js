var registerBtn = document.getElementById("registerBtn");

registerBtn.onclick = function () {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var birthDate = document.getElementById("birthDate").value;
    var email = document.getElementById("email").value;
    var emailConfirm = document.getElementById("emailConfirm").value;
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("passwordConfirm").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message");

    var nameRegex = /^[A-Za-z]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    var digitRegex = /[0-9]/g;
    var mobileRegex = /^[0-9]{10}$/;

    // first name / last name has letters only
    if (!nameRegex.test(firstName)) {
        message.textContent = "First name must contain letters only.";
        return;
    }

    if (!nameRegex.test(lastName)) {
        message.textContent = "Last name must contain letters only.";
        return;
    }

    // birth date
    if (birthDate === "") {
        message.textContent = "Please enter your birth date.";
        return;
    }

    var birthDateValue = new Date(birthDate);
    var today = new Date();

    if (birthDateValue > today) {
        message.textContent = "Birth date cannot be in the future.";
        return;
    }

    var age = today.getFullYear() - birthDateValue.getFullYear();
    var monthDiff = today.getMonth() - birthDateValue.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDateValue.getDate())
    ) {
        age = age - 1;
    }

    if (age < 13) {
        message.textContent = "You must be at least 13 years old to register.";
        return;
    }

    //  email
    if (!emailRegex.test(email)) {
        message.textContent = "Email structure is invalid.";
        return;
    }

    // two emails match
    if (email !== emailConfirm) {
        message.textContent = "Email and confirmation email do not match.";
        return;
    }

    // Password
    if (password.length < 8 || password.length > 32) {
        message.textContent =
            "Password length must be between 8 and 32 characters.";
        return;
    }

    if (!/^[A-Z]/.test(password)) {
        message.textContent = "Password must start with a capital letter.";
        return;
    }

    var digitMatches = password.match(digitRegex);

    if (digitMatches === null || digitMatches.length < 2) {
        message.textContent = "Password must contain at least two numbers.";
        return;
    }

    if (!specialCharRegex.test(password)) {
        message.textContent =
            "Password must contain at least one special character.";
        return;
    }

    if (password !== passwordConfirm) {
        message.textContent =
            "Password and confirmation password do not match.";
        return;
    }

    // 6- mobile number
    if (!mobileRegex.test(mobile)) {
        message.textContent = "Mobile number must be exactly 10 digits.";
        return;
    }

    // All Good
    localStorage.setItem(email + "_firstName", firstName);
    localStorage.setItem(email + "_lastName", lastName);
    localStorage.setItem(email + "_birthDate", birthDate);
    localStorage.setItem(email + "_password", password);
    localStorage.setItem(email + "_mobile", mobile);

    message.style.color = "green";
    message.textContent = "Registration successful! You can now log in.";
};
