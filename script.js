// Mobile menu
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Close mobile menu after clicking a menu link
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

// Appointment form opens WhatsApp with the patient's details
const appointmentForm = document.getElementById("appointment-form");

appointmentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value || "Not specified";
  const time = document.getElementById("time").value || "Not specified";
  const reason = document.getElementById("reason").value;

  const message =
    "Hello Infinity Eye Centre, I would like to book an appointment.%0A%0A" +
    "Name: " + name + "%0A" +
    "Phone: " + phone + "%0A" +
    "Preferred date: " + date + "%0A" +
    "Preferred time: " + time + "%0A" +
    "Reason for visit: " + reason;

  window.open(
    "https://wa.me/233531326723?text=" + message,
    "_blank"
  );
});