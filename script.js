const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const calcBtn = document.getElementById("calcBtn");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

function calculeazaVenit() {
  const zile = Number(document.getElementById("zile").value);
  const castig = Number(document.getElementById("castig").value);
  const cash = Number(document.getElementById("cash").value || 0);
  const rezultat = document.getElementById("rezultat");

  if (!zile || !castig) {
    rezultat.innerText = "Completează zilele și câștigul pe zi.";
    return;
  }

  const totalFinal = zile * castig - cash;

  rezultat.innerText =
    "Estimativ primești: " + totalFinal + " lei / săptămână";
}

if (calcBtn) {
  calcBtn.addEventListener("click", calculeazaVenit);
}
