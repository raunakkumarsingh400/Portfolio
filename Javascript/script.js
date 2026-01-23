 // Automatically set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();
// Select the "View More" button and extra certifications
const viewMoreBtn = document.getElementById("viewMoreBtn");
const extraCerts = document.querySelectorAll(".extra-cert");
// Track whether extra certifications are currently visible
let expanded = false;
// Toggle extra certifications when the button is clicked
viewMoreBtn.addEventListener("click", () => {
  expanded = !expanded; // Update toggle state
  // Show or hide extra certifications
  extraCerts.forEach(cert => {
    cert.classList.toggle("hidden");
  });
  // Update button text accordingly
  viewMoreBtn.textContent = expanded ? "View Less" : "View More";
});
// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  alert("✅ Message sent successfully!"); // Show success message
  this.reset(); // Clear all form fields
});