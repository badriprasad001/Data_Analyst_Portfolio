// =========================
// Typing Effect with Cursor
// =========================
const roles = ["Data Analyst", "Power BI Developer", "SQL Specialist"];
let i = 0, j = 0;
const typing = document.getElementById("typing");
const cursor = document.querySelector(".cursor");

function type() {
  if (j < roles[i].length) {
    typing.textContent += roles[i][j++];
    setTimeout(type, Math.random() * 100 + 50); // random speed for realism
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

// =========================
// Scroll Reveal + Skills Animation
// =========================
const reveals = document.querySelectorAll(".reveal");
const skillBars = document.querySelectorAll(".skill div");
const skillPercents = document.querySelectorAll(".skill .percent");

function revealSections() {
  const triggerBottom = window.innerHeight - 50;

  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom && !section.classList.contains("visible")) {
      section.classList.add("visible");

      // Animate skills
      const bars = section.querySelectorAll(".bar div");
      const percents = section.querySelectorAll(".percent");

      bars.forEach((bar, idx) => {
        const target = bar.dataset.skill;
        let width = 0;
        const interval = setInterval(() => {
          if (width >= target) clearInterval(interval);
          else {
            width++;
            bar.style.width = width + "%";
            if (percents[idx]) percents[idx].textContent = width + "%";
          }
        }, 15);
      });
    }
  });
}

window.addEventListener("load", revealSections);
window.addEventListener("scroll", revealSections);

// =========================
// Scroll Progress Bar
// =========================
const progressBar = document.getElementById("progress-bar");

function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
}

window.addEventListener("scroll", updateProgressBar);

// =========================
// Back-to-top Button
// =========================
const backToTop = document.getElementById("back-to-top");
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =========================
// Mobile Menu Toggle
// =========================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scroll to section with header offset + close mobile menu
navLinks.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default jump

    const target = document.querySelector(this.getAttribute("href"));
    const headerOffset = document.querySelector("header").offsetHeight;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Close mobile menu after click
    navLinks.classList.remove("active");
  });
});


// =========================
// Update Footer Year
// =========================
document.getElementById("year").textContent = new Date().getFullYear();
