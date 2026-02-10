// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// CV BUTTON
document.getElementById("cvBtn").addEventListener("click", () => {
  alert("CV download feature coming soon!");
});

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const speed = 50;

    if (count < target) {
      counter.innerText = count + 1;
      setTimeout(updateCount, speed);
    }
  };
  updateCount();
});

// SOCIAL CLICK EVENT
document.querySelectorAll(".socials a").forEach(link => {
  link.addEventListener("click", () => {
    alert("Social link clicked!");
  });
});

// SCROLL EFFECT
window.addEventListener("scroll", () => {
  document.querySelectorAll(".stat-box").forEach(box => {
    const pos = box.getBoundingClientRect().top;
    if (pos < window.innerHeight - 80) {
      box.style.opacity = 1;
      box.style.transform = "translateY(0)";
    }
  });
});
