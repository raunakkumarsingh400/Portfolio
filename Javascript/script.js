// Automatically set the current year in the footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Toggle extra certifications ("View More / View Less")
const viewMoreBtn = document.getElementById("viewMoreBtn");
const extraCerts = document.querySelectorAll(".extra-cert");
let expanded = false;
if (viewMoreBtn && extraCerts.length > 0) {
  viewMoreBtn.addEventListener("click", () => {
    expanded = !expanded;
    extraCerts.forEach(cert => cert.classList.toggle("hidden"));
    viewMoreBtn.textContent = expanded ? "View Less" : "View More";
  });
}

// Contact Form Submission via FormSubmit with popup only
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("❌ Network error. Please try again later.");
    }
  });
}
