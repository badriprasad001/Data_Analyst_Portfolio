// Typing Effect
const roles = ["Data Analyst", "Power BI Developer", "SQL Specialist"];
let i = 0, j = 0;
const typing = document.getElementById("typing");

function type() {
  if (j < roles[i].length) {
    typing.textContent += roles[i][j++];
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    typing.textContent = roles[i].substring(0, --j);
    setTimeout(erase, 40);
  } else {
    i = (i + 1) % roles.length;
    setTimeout(type, 400);
  }
}
type();

// Reveal + Skill Animation
// ===============================
// Section Visibility on Load + Scroll
// ===============================
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      section.classList.add("visible");

      // Animate skills
      section.querySelectorAll(".bar div").forEach(bar => {
        bar.style.width = bar.dataset.skill + "%";
      });
    }
  });
}

// Run on load
window.addEventListener("load", revealSections);

// Run on scroll
window.addEventListener("scroll", revealSections);

//-------------------------
// ===============================
// Mobile Menu Toggle
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
