document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('message-status').innerText = "Thank you! We'll get back to you soon.";
  this.reset();

  // 1. Welcome alert
window.onload = function () {
  alert("Welcome to Nexa Software!");
};

// 2. Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 3. Button click function
function showMessage() {
  alert("Thank you for clicking!");
}

// 4. Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Optional: Dark mode style setup (only if CSS not ready)
document.addEventListener("DOMContentLoaded", function () {
  const darkModeBtn = document.getElementById("darkModeBtn");
  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", toggleDarkMode);
  }
});

});
