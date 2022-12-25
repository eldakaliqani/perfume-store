const signupForm = document.querySelector("#signup-form");
const signupSuccessAlert = document.querySelector(".signup-submit-success");

const usernameInput = document.querySelector("#signup-username");
const emailInput = document.querySelector("#signup-email");
const passwordInput = document.querySelector("#signup-password");

const usernameError = document.querySelector(".username-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

const regexEmail =
   /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

signupForm.addEventListener("submit", function (e) {
   e.preventDefault();

   resetErrors();
   signupSuccessAlert.style.display = "none";
   signupSuccessAlert.textContent = "";

   if (validateForm()) {
      signupSuccessAlert.textContent = "Signed up successfully";
      signupSuccessAlert.style.display = "block";
   }
});

function resetErrors() {
   usernameError.textContent = "";
   emailError.textContent = "";
   passwordError.textContent = "";
}

function validateForm() {
   let isValid = true;

   if (!usernameInput.value) {
      usernameError.textContent = "Username cannot be empty";
      isValid = false;
   }
   if (usernameInput.value < 3) {
      usernameError.textContent = "Username should be at least 3 letters";
      isValid = false;
   }
   if (!regexEmail.test(emailInput.value)) {
      emailError.textContent = "Email is not valid";
      isValid = false;
   }
   if (!passwordInput || passwordInput.value.length < 6) {
      passwordError.textContent = "Password should be at least 6 letters";
      isValid = false;
   }

   return isValid;
}
