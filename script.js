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
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
      section.querySelectorAll(".bar div").forEach(bar => {
        bar.style.width = bar.dataset.skill + "%";
      });
    }
  });
});
