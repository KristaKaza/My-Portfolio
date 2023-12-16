document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submitButton")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      const nameValid = name.length >= 5;
      const emailValid = validateEmail(email);
      const messageValid = message.length >= 10;

      document.getElementById("nameError").textContent = nameValid
        ? ""
        : "Name should be at least 5 characters";
      document.getElementById("emailError").textContent = emailValid
        ? ""
        : "Please enter a valid email address";
      document.getElementById("messageError").textContent = messageValid
        ? ""
        : "Message should be at least 10 characters";

      if (nameValid && emailValid && messageValid) {
        alert("Your form is submitted successfully!");
        document.getElementById("contactForm").reset();
      }
    });

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
