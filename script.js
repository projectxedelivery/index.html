const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const applyForm = document.getElementById("applyForm");

const whatsappNumber = "40720567098";

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

applyForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nume = document.getElementById("nume").value.trim();
  const telefon = document.getElementById("telefon").value.trim();
  const email = document.getElementById("email").value.trim();
  const oras = document.getElementById("oras").value.trim();
  const transport = document.getElementById("transport").value;
  const platforma = document.getElementById("platforma").value;
  const experienta = document.getElementById("experienta").value;
  const mesajExtra = document.getElementById("mesaj").value.trim();

  if (!nume || !telefon || !email || !oras || !transport || !platforma || !experienta) {
    alert("Completează toate câmpurile obligatorii.");
    return;
  }

  const mesaj = `
Salut! Vreau să aplic pentru Project X Courier.

Nume: ${nume}
Telefon: ${telefon}
Email: ${email}
Oraș: ${oras}
Mijloc de transport: ${transport}
Platformă dorită: ${platforma}
Experiență livrări: ${experienta}
Mesaj: ${mesajExtra || "Nu am adăugat mesaj suplimentar."}
  `;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mesaj)}`;

  window.location.href = whatsappUrl;
});
