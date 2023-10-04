var submitBtn = document.getElementById("submit-btn");
var dismissBtn = document.querySelector(".dismiss-btn")
var signupForm = document.querySelector(".sign-up-form")
var thankForm = document.querySelector(".thank-form")
var userEmail = document.getElementById("user-email")


submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    dismissBtn.addEventListener("click", function () {
        signupForm.style.display = "flex";
        thankForm.style.display = "none";
    })

    const emailSubmit = document.getElementById("email-submit").value;
    const validEmail = validateEmail(emailSubmit);

    if (validEmail) {
        userEmail.textContent = emailSubmit;
        signupForm.style.display = "none";
        thankForm.style.display = "flex";
    }


});

function validateEmail(email) {
    var errorMessage = document.getElementsByClassName("error-message")[0];

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function inputStyle(error) {
        var emailInput = document.getElementById("email-submit")
        if (error = "error") {
            emailInput.style.color = "hsla(4, 100%, 67%, 1)"
            emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.15)"
            emailInput.style.outlineColor = "hsla(4, 100%, 67%, 1)"
        }
    }

    if (email === "") {
        inputStyle("error");
        errorMessage.textContent = "Email address is required";
        return false
    } else if (!emailRegex.test(email)) {
        inputStyle("error");
        errorMessage.textContent = "Valid email required";
        return false
    } else {
        errorMessage.textContent = "";
        return true
    }
};