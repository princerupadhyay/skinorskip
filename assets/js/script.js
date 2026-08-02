document.addEventListener('DOMContentLoaded', function () {
  // Newsletter form (static — no backend yet, just friendly confirmation)
  var form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-msg');
      if (msg) msg.textContent = "You're on the list. We'll email you the next pick.";
      form.reset();
    });
  }
});
