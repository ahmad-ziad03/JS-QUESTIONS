function printData() {
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var mobile = document.getElementById("mobileInput").value;

    document.getElementById("colorOutput").innerHTML =
        `<span class="name-color">${name}</span>` +
        `<span class="email-color">${email}</span>` +
        `<span class="mobile-color">${mobile}</span>`;

    document.getElementById("boxOutput").innerHTML =
        `<td>${name}</td>` + `<td>${email}</td>` + `<td>${mobile}</td>`;
}
