document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  /* ========== Mobile Menu Toggle ========== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
  });

  /* ========== Close Menu on Link Click ========== */
  document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
          navMenu.classList.remove("active");
      });
  });

  /* ========== Email Form Validation ========== */
  const emailForm = document.querySelector(".get-started-form");
  const emailInput = document.querySelector(".get-started-form input");

  emailForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(emailValue)) {
          alert("Please enter a valid email address!");
      } else {
          alert("Thank you for signing up!");
          emailInput.value = ""; // Clear input after submission
      }
  });

  /* ========== Smooth Scroll Effect ========== */
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 50,
                  behavior: "smooth",
              });
          }
      });
  });

  /* ========== Scroll Animation (Optional) ========== */
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  function scrollReveal() {
      animatedElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
              el.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", scrollReveal);
  scrollReveal(); // Run once on page load
});
