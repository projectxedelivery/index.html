const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

function calculeazaVenit() {
  const zile = Number(document.getElementById("zile").value);
  const castig = Number(document.getElementById("castig").value);
  const cash = Number(document.getElementById("cash").value);
  const rezultat = document.getElementById("rezultat");

  if (zile <= 0 || castig <= 0) {
    rezultat.innerHTML = "Te rog completează zilele lucrate și câștigul pe zi.";
    return;
  }

  const saptamanal = zile * castig;
  const totalCuCash = saptamanal + cash;
  const lunar = totalCuCash * 4;

  rezultat.innerHTML = `
    Câștig săptămânal: <strong>${saptamanal} lei</strong><br>
    Cash adăugat: <strong>${cash} lei</strong><br>
    Total săptămânal: <strong>${totalCuCash} lei</strong><br>
    Estimare lunară: <strong>${lunar} lei</strong>
  `;
}
