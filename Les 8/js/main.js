document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Voorkomt de daadwerkelijke form submission.

    // Verberg het formulier
    document.querySelector(".contact-form").style.display = "none";

    // Toon bedankt bericht
    document.querySelector(".thank-you-message").style.display = "block";
  });
