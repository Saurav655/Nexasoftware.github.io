document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('message-status').innerText = "Thank you! We'll get back to you soon.";
  this.reset();
});
