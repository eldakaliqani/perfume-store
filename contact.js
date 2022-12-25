const contactForm = document.querySelector("#contact-form");
const contactSuccessAlert = document.querySelector(".contact-submit-success");

const nameInput = document.querySelector("#contact-name");
const emailInput = document.querySelector("#contact-email");
const phoneInput = document.querySelector("#contact-phone");
const descriptionInput = document.querySelector("#contact-description");

const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const phoneError = document.querySelector(".phone-error");
const descriptionError = document.querySelector(".description-error");

const regexName = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

const regexEmail =
   /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const regexDescription = /^\S.*(?:\r?\n\S.*)*$/u;

contactForm.addEventListener("submit", function (e) {
   e.preventDefault();

   resetErrors();
   contactSuccessAlert.style.display = "none";
   contactSuccessAlert.textContent = "";

   if (validateForm()) {
      contactSuccessAlert.textContent = "Form submitted successfully";
      contactSuccessAlert.style.display = "block";
   }
});

function resetErrors() {
   nameError.textContent = "";
   emailError.textContent = "";
   phoneError.textContent = "";
   descriptionError.textContent = "";
}

function validateForm() {
   let isValid = true;

   if (!regexName.test(nameInput.value)) {
      nameError.textContent = "Name is not valid";
      isValid = false;
   }
   if (!regexEmail.test(emailInput.value)) {
      emailError.textContent = "Email is not valid";
      isValid = false;
   }
   if (!regexPhone.test(phoneInput.value)) {
      phoneError.textContent = "Phone number is not valid";
      isValid = false;
   }
   if (!regexDescription.test(descriptionInput.value)) {
      descriptionError.textContent = "Description is invalid";
      isValid = false;
   }

   return isValid;
}
