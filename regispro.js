function openRegister() {
    var card = document.getElementById("card");
    card.style.transform = "rotateY(-180deg)";
}

function openLogin() {
    var card = document.getElementById("card");
    card.style.transform = "rotateY(0deg)";
}

function displayRegisteredStudent(name, email, dob, phone) {
    var tableBody = document.getElementById("userTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.rows.length);
    
    var nameCell = newRow.insertCell(0);
    var emailCell = newRow.insertCell(1);
    var dobCell = newRow.insertCell(2);
    var phoneCell = newRow.insertCell(3);

    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    dobCell.innerHTML = dob;
    phoneCell.innerHTML = phone;

}

document.addEventListener("DOMContentLoaded", function () {
    var registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = registerForm.elements["name"].value;
        var email = registerForm.elements["email"].value;
        var dob = registerForm.elements["dob"].value;
        var phone = registerForm.elements["phone"].value;

        displayRegisteredStudent(name, email, dob, phone);
        
        registerForm.reset();
    });
});