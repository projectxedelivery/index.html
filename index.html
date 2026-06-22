document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");
  const header = document.getElementById("header");
  const calcBtn = document.getElementById("calcBtn");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 40);
    }
  });

  if (calcBtn) {
    calcBtn.addEventListener("click", calculeazaVenit);
  }

  revealOnScroll();
  startCounters();
});

function calculeazaVenit() {
  const zile = Number(document.getElementById("zile").value);
  const castig = Number(document.getElementById("castig").value);
  const cash = Number(document.getElementById("cash").value || 0);
  const rezultat = document.getElementById("rezultat");

  if (!zile || !castig) {
    rezultat.innerHTML = "Completează zilele lucrate și câștigul mediu pe zi.";
    return;
  }

  const saptamanal = zile * castig;
  const totalSaptamanal = saptamanal + cash;
  const lunar = totalSaptamanal * 4;

  rezultat.innerHTML = `
    Câștig fără cash: <strong>${saptamanal} lei / săptămână</strong><br>
    Cash adăugat: <strong>${cash} lei</strong><br>
    Total estimat: <strong>${totalSaptamanal} lei / săptămână</strong><br>
    Estimare lunară: <strong>${lunar} lei</strong>
  `;
}

function revealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

const counters = document.querySelectorAll(".counter");
let countersStarted = false;

function startCounters() {
  if (countersStarted) return;

  const statsSection = document.querySelector(".stats-section");
  if (!statsSection) return;

  const sectionTop = statsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {
    countersStarted = true;

    counters.forEach((counter) => {
      const target = Number(counter.getAttribute("data-target"));
      let current = 0;
      const increment = Math.ceil(target / 100);

      const updateCounter = () => {
        current += increment;

        if (current >= target) {
          counter.innerText = target + "+";
        } else {
          counter.innerText = current;
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    });
  }
}

window.addEventListener("scroll", startCounters);
