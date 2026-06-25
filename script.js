const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const applyForm = document.getElementById("applyForm");
const langRoBtn = document.getElementById("langRo");
const langEnBtn = document.getElementById("langEn");

const whatsappNumber = "40720567098";
let currentLang = localStorage.getItem("siteLanguage") || "ro";

const translations = {
  ro: {
    nav: ["Acasă", "Ofertă", "Platforme", "Training", "Cash", "Aplicare", "Contact"],

    heroBadge: "Recrutăm curieri: București • Constanța • Baia Mare • Cluj • Brașov",
    heroTitle: "Project X Courier",
    heroText:
      "Colaborare pentru curieri pe platforme de livrare. Proces simplu, comunicare rapidă, suport pentru început și informații clare despre aplicații.",
    heroPrimary: "Aplică acum",
    heroSecondary: "Vezi oferta",

    heroCardTitle: "Start rapid",
    heroCardText:
      "Completezi formularul, iar mesajul se pregătește automat pentru WhatsApp.",
    heroList: [
      "Program flexibil",
      "Suport pentru început",
      "Training pentru aplicații",
      "Explicații despre cash",
      "Bonusuri disponibile"
    ],

    ofertaBadge: "Oferta Project X Courier",
    ofertaTitle: "Ce îți putem oferi",
    ofertaText:
      "O colaborare clară pentru curieri care vor să înceapă rapid și să primească informațiile necesare de la început.",
    ofertaCardsTitle: [
      "Comision promoțional",
      "Bonus comenzi",
      "Bonus recomandare",
      "Suport rapid"
    ],
    ofertaCardsText: [
      "Primele 3 luni ai comision promoțional de 7%, apoi comisionul revine la 10%.",
      "Bonus de 250 lei la primele 300 de comenzi finalizate, conform condițiilor discutate.",
      "Poți primi bonusuri pentru recomandarea altor curieri serioși care încep colaborarea.",
      "Primești explicații clare despre pașii de aplicare și activitatea de curierat."
    ],

    platformeBadge: "Platforme",
    platformeTitle: "Lucrează pe platforme de livrare",
    platformeText:
      "Project X Courier oferă suport pentru curieri care vor să colaboreze prin platforme cunoscute de livrare.",
    platformCardsTitle: [
      "Livrări prin Wolt",
      "Livrări prin Glovo",
      "Livrări prin Bolt"
    ],
    platformCardsText: [
      "Primești informații despre activare, aplicație, comenzi, zone de lucru și modul de predare.",
      "Te ajutăm cu explicații despre aplicație, program, comenzi, cash și comunicarea cu clientul.",
      "Primești detalii despre activitate, aplicație, metoda de plată și pașii de livrare."
    ],

    trainingBadge: "Training curieri",
    trainingTitle: "Cum lucrezi în aplicații",
    trainingText:
      "Primești explicații clare despre aplicațiile de livrare, program, acceptarea comenzilor, ridicarea produselor, comunicarea cu clientul și finalizarea corectă a livrărilor.",
    trainingLabels: ["Glovo", "Wolt", "Bolt", "Reguli"],
    trainingCardsTitle: [
      "Aplicația Glovo",
      "Aplicația Wolt",
      "Aplicația Bolt",
      "Reguli importante"
    ],
    trainingCardsText: [
      "La Glovo trebuie să fii atent la program. În funcție de oraș și disponibilitate, poate fi nevoie să îți prinzi orele sau sesiunile de lucru în aplicație. După ce ești activ, urmărești comenzile, ridici produsele și finalizezi livrarea după pașii afișați.",
      "La Wolt urmărești comenzile disponibile, restaurantul, adresa clientului și detaliile speciale ale livrării. Este important să verifici traseul, timpul estimat și instrucțiunile înainte să pleci spre client.",
      "La Bolt trebuie să fii atent la comenzile primite, timpul de ridicare, adresa clientului și metoda de plată. Dacă apare comandă cash, suma încasată trebuie verificată corect înainte de finalizare.",
      "Verifici mereu detaliile comenzii înainte să pleci, păstrezi produsele în geanta termică, comunici politicos cu clientul și anunți rapid dacă apare o problemă la restaurant, pe drum sau la predare."
    ],

    cashBadge: "Depunere Cash",
    cashTitle: "Cum se gestionează cash-ul pe fiecare platformă",
    cashText:
      "Banii încasați numerar trebuie verificați, păstrați separat și predați sau depuși doar conform instrucțiunilor primite în aplicație, de la flotă sau de la persoana de contact.",
    cashCardTitles: ["Cash Glovo", "Cash Wolt", "Cash Bolt"],
    cashLists: [
      [
        "Verifici în aplicație dacă ai comenzi cash și urmărești suma care apare în zona de sold, wallet sau balanță cash.",
        "Dacă încasezi bani de la client, păstrezi suma separat și nu o amesteci cu banii personali.",
        "Dacă aplicația sau flota îți cere depunere, urmezi exact metoda comunicată: transfer, depunere sau predare către persoana responsabilă.",
        "După depunere sau predare, păstrezi dovada și trimiți confirmarea, dacă ți se cere."
      ],
      [
        "La o comandă cash, verifici suma afișată în aplicație înainte să predai comanda clientului.",
        "Încasezi exact suma indicată și oferi restul corect, dacă este cazul.",
        "Nu finalizezi comanda dacă clientul nu are bani suficienți. În situația asta, contactezi suportul sau persoana de contact.",
        "Dacă ai cash de predat, îl păstrezi separat și îl predai conform instrucțiunilor primite de la flotă sau suport."
      ],
      [
        "Verifici metoda de plată înainte de predarea comenzii. Dacă este cash, încasezi suma de la client.",
        "Introduci sau confirmi în platformă suma cash primită, acolo unde aplicația îți cere acest lucru.",
        "Păstrezi banii separat până la reglarea soldului, predare sau depunere.",
        "Dacă primești notificare de sold negativ sau sumă de plată, urmezi instrucțiunile oficiale din aplicație sau de la flotă."
      ]
    ],
    cashNotes: [
      "Important: la Glovo, cash-ul poate apărea ca sold în aplicație. Dacă soldul este mare sau apare diferență, anunți imediat persoana de contact.",
      "Important: la Wolt, comanda cash se consideră în regulă doar după ce ai colectat suma afișată și ai predat comanda corect.",
      "Important: la Bolt, sumele cash pot influența balanța contului. Verifică mereu suma introdusă, ca să nu apară diferențe."
    ],
    cashGuideTitle: "Regula generală pentru orice platformă",
    cashGuideList: [
      "Nu amesteca banii cash încasați cu banii personali.",
      "Verifică mereu suma din aplicație înainte să finalizezi comanda.",
      "Nu depune bani într-un cont necunoscut sau neverificat.",
      "Păstrează dovada depunerii sau predării.",
      "Dacă apare diferență la bani, anunță imediat persoana de contact."
    ],
    cashImportant: "Important:",
    cashImportantText:
      "Metoda exactă de depunere poate fi diferită în funcție de platformă, oraș, flotă sau cont. Curierul trebuie să urmeze doar instrucțiunile primite oficial în aplicație sau de la persoana responsabilă.",

    applyBadge: "Aplicare rapidă",
    applyTitle: "Aplică direct pe WhatsApp",
    applyText:
      "Completează datele, iar după trimitere se deschide WhatsApp cu mesajul pregătit.",
    infoTitle: "Notă",
    infoText:
      "Formularul nu salvează datele pe site. Informațiile se trimit direct prin WhatsApp.",

    formLabels: [
      "Nume complet",
      "Telefon",
      "Email",
      "Oraș",
      "Mijloc de transport",
      "Platformă dorită",
      "Ai mai livrat?",
      "Mesaj opțional"
    ],
    formPlaceholders: [
      "Ex: Andrei Ionescu",
      "Ex: 0712 345 678",
      "Ex: nume@email.com",
      "Ex: București",
      "Scrie aici dacă ai întrebări sau alte detalii."
    ],
    transportOptions: ["Alege o variantă", "Bicicletă", "Scuter", "Mașină"],
    platformOptions: ["Alege platforma", "Wolt", "Glovo", "Bolt"],
    experienceOptions: ["Alege o variantă", "Da", "Nu"],
    submitButton: "Trimite aplicarea pe WhatsApp",

    contactBadge: "Contact",
    contactTitle: "Project X Courier",
    contactText:
      "Pentru aplicări și informații, folosește formularul de mai sus sau contactează-ne direct.",
    contactPhone: "Telefon:",
    contactEmail: "Email:",
    whatsappButton: "Scrie-ne pe WhatsApp",

    footerText:
      "© 2026 Project X Courier. Toate drepturile rezervate.",
    footerSmall:
      "Wolt, Glovo și Bolt sunt mărci ale deținătorilor lor. Project X Courier oferă suport pentru curieri și colaboratori."
  },

  en: {
    nav: ["Home", "Offer", "Platforms", "Training", "Cash", "Apply", "Contact"],

    heroBadge: "We are hiring couriers: Bucharest • Constanța • Baia Mare • Cluj • Brașov",
    heroTitle: "Project X Courier",
    heroText:
      "Courier collaboration for delivery platforms. Simple process, fast communication, onboarding support and clear information about the apps.",
    heroPrimary: "Apply now",
    heroSecondary: "View offer",

    heroCardTitle: "Quick start",
    heroCardText:
      "Fill in the form and the message will be prepared automatically for WhatsApp.",
    heroList: [
      "Flexible schedule",
      "Onboarding support",
      "App training",
      "Cash payment guidance",
      "Available bonuses"
    ],

    ofertaBadge: "Project X Courier offer",
    ofertaTitle: "What we can offer",
    ofertaText:
      "A clear collaboration for couriers who want to start quickly and receive the right information from the beginning.",
    ofertaCardsTitle: [
      "Promotional commission",
      "Order bonus",
      "Referral bonus",
      "Fast support"
    ],
    ofertaCardsText: [
      "For the first 3 months, you have a promotional commission of 7%, then the commission returns to 10%.",
      "250 RON bonus after the first 300 completed orders, according to the agreed conditions.",
      "You can receive bonuses for recommending serious couriers who start collaborating with us.",
      "You receive clear explanations about the application steps and courier activity."
    ],

    platformeBadge: "Platforms",
    platformeTitle: "Work on delivery platforms",
    platformeText:
      "Project X Courier offers support for couriers who want to collaborate through well-known delivery platforms.",
    platformCardsTitle: [
      "Deliveries through Wolt",
      "Deliveries through Glovo",
      "Deliveries through Bolt"
    ],
    platformCardsText: [
      "You receive information about activation, the app, orders, working areas and handover process.",
      "We help you with explanations about the app, schedule, orders, cash and customer communication.",
      "You receive details about activity, the app, payment method and delivery steps."
    ],

    trainingBadge: "Courier training",
    trainingTitle: "How to work in the apps",
    trainingText:
      "You receive clear explanations about delivery apps, schedule, accepting orders, picking up products, customer communication and completing deliveries correctly.",
    trainingLabels: ["Glovo", "Wolt", "Bolt", "Rules"],
    trainingCardsTitle: [
      "Glovo app",
      "Wolt app",
      "Bolt app",
      "Important rules"
    ],
    trainingCardsText: [
      "With Glovo, you need to pay attention to the schedule. Depending on the city and availability, you may need to book your working hours or sessions in the app. Once active, you follow the orders, pick up the products and complete the delivery according to the app steps.",
      "With Wolt, you follow available orders, the restaurant, the customer's address and the delivery details. It is important to check the route, estimated time and instructions before going to the customer.",
      "With Bolt, you need to pay attention to received orders, pickup time, customer address and payment method. If a cash order appears, the collected amount must be checked correctly before completing the order.",
      "Always check the order details before leaving, keep products in the thermal bag, communicate politely with the customer and report quickly if a problem appears at the restaurant, on the road or at delivery."
    ],

    cashBadge: "Cash deposit",
    cashTitle: "How cash is handled on each platform",
    cashText:
      "Cash collected from customers must be checked, kept separately and handed over or deposited only according to the instructions received in the app, from the fleet or from the contact person.",
    cashCardTitles: ["Glovo cash", "Wolt cash", "Bolt cash"],
    cashLists: [
      [
        "Check in the app if you have cash orders and follow the amount shown in the balance, wallet or cash balance area.",
        "If you collect money from the customer, keep the amount separately and do not mix it with personal money.",
        "If the app or fleet asks you to deposit money, follow the exact method communicated: transfer, deposit or handover to the responsible person.",
        "After deposit or handover, keep the proof and send confirmation if requested."
      ],
      [
        "For a cash order, check the amount shown in the app before handing the order to the customer.",
        "Collect the exact amount shown and give correct change if needed.",
        "Do not complete the order if the customer does not have enough money. In this case, contact support or the contact person.",
        "If you have cash to hand over, keep it separately and hand it over according to the instructions received from the fleet or support."
      ],
      [
        "Check the payment method before handing over the order. If it is cash, collect the amount from the customer.",
        "Enter or confirm in the platform the cash amount received, where the app asks you to do so.",
        "Keep the money separately until balance adjustment, handover or deposit.",
        "If you receive a notification about negative balance or payment amount, follow the official instructions from the app or the fleet."
      ]
    ],
    cashNotes: [
      "Important: with Glovo, cash may appear as a balance in the app. If the balance is high or there is a difference, contact the responsible person immediately.",
      "Important: with Wolt, a cash order is correct only after you collect the displayed amount and hand over the order properly.",
      "Important: with Bolt, cash amounts can influence the account balance. Always check the entered amount to avoid differences."
    ],
    cashGuideTitle: "General rule for every platform",
    cashGuideList: [
      "Do not mix collected cash with personal money.",
      "Always check the amount in the app before completing the order.",
      "Do not deposit money into an unknown or unverified account.",
      "Keep proof of deposit or handover.",
      "If a money difference appears, contact the responsible person immediately."
    ],
    cashImportant: "Important:",
    cashImportantText:
      "The exact deposit method may differ depending on the platform, city, fleet or account. The courier must follow only the official instructions received in the app or from the responsible person.",

    applyBadge: "Quick application",
    applyTitle: "Apply directly on WhatsApp",
    applyText:
      "Fill in your details and after submitting, WhatsApp will open with the prepared message.",
    infoTitle: "Note",
    infoText:
      "The form does not save your data on the website. The information is sent directly through WhatsApp.",

    formLabels: [
      "Full name",
      "Phone number",
      "Email",
      "City",
      "Transport type",
      "Preferred platform",
      "Have you delivered before?",
      "Optional message"
    ],
    formPlaceholders: [
      "Ex: Andrei Ionescu",
      "Ex: 0712 345 678",
      "Ex: name@email.com",
      "Ex: Bucharest",
      "Write here if you have questions or extra details."
    ],
    transportOptions: ["Choose an option", "Bike", "Scooter", "Car"],
    platformOptions: ["Choose platform", "Wolt", "Glovo", "Bolt"],
    experienceOptions: ["Choose an option", "Yes", "No"],
    submitButton: "Send application on WhatsApp",

    contactBadge: "Contact",
    contactTitle: "Project X Courier",
    contactText:
      "For applications and information, use the form above or contact us directly.",
    contactPhone: "Phone:",
    contactEmail: "Email:",
    whatsappButton: "Message us on WhatsApp",

    footerText:
      "© 2026 Project X Courier. All rights reserved.",
    footerSmall:
      "Wolt, Glovo and Bolt are trademarks of their owners. Project X Courier offers support for couriers and collaborators."
  }
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function setAllText(selector, values) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (values[index]) {
      element.textContent = values[index];
    }
  });
}

function setPlaceholder(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.placeholder = value;
  }
}

function setOptionTexts(selector, values) {
  const select = document.querySelector(selector);
  if (!select) return;

  const options = select.querySelectorAll("option");
  options.forEach((option, index) => {
    if (values[index]) {
      option.textContent = values[index];
    }
  });
}

function applyLanguage(lang) {
  const t = translations[lang];
  currentLang = lang;

  localStorage.setItem("siteLanguage", lang);
  document.documentElement.lang = lang;

  setAllText(".nav > a", t.nav);

  setText(".hero-text .badge", t.heroBadge);
  setText(".hero-text h1", t.heroTitle);
  setText(".hero-text p", t.heroText);
  setText("#acasa .btn-primary", t.heroPrimary);
  setText("#acasa .btn-secondary", t.heroSecondary);

  setText(".hero-card h2", t.heroCardTitle);
  setText(".hero-card p", t.heroCardText);
  setAllText(".hero-card li", t.heroList);

  setText("#oferta .section-title .badge", t.ofertaBadge);
  setText("#oferta .section-title h2", t.ofertaTitle);
  setText("#oferta .section-title p", t.ofertaText);
  setAllText("#oferta .card h3", t.ofertaCardsTitle);
  setAllText("#oferta .card p", t.ofertaCardsText);

  setText("#platforme .section-title .badge", t.platformeBadge);
  setText("#platforme .section-title h2", t.platformeTitle);
  setText("#platforme .section-title p", t.platformeText);
  setAllText("#platforme .platform-card h3", t.platformCardsTitle);
  setAllText("#platforme .platform-card p", t.platformCardsText);

  setText("#training .section-title .badge", t.trainingBadge);
  setText("#training .section-title h2", t.trainingTitle);
  setText("#training .section-title p", t.trainingText);
  setAllText("#training .training-label", t.trainingLabels);
  setAllText("#training .training-card h3", t.trainingCardsTitle);
  setAllText("#training .training-card p", t.trainingCardsText);

  setText("#cash .section-title .badge", t.cashBadge);
  setText("#cash .section-title h2", t.cashTitle);
  setText("#cash .section-title p", t.cashText);

  document.querySelectorAll("#cash .cash-platform-card").forEach((card, cardIndex) => {
    const title = card.querySelector("h3");
    if (title) title.textContent = t.cashCardTitles[cardIndex];

    const listItems = card.querySelectorAll("ol li");
    listItems.forEach((item, itemIndex) => {
      if (t.cashLists[cardIndex] && t.cashLists[cardIndex][itemIndex]) {
        item.textContent = t.cashLists[cardIndex][itemIndex];
      }
    });

    const note = card.querySelector(".cash-small-note");
    if (note) note.textContent = t.cashNotes[cardIndex];
  });

  setText(".cash-guide h3", t.cashGuideTitle);
  setAllText(".cash-guide li", t.cashGuideList);
  setText(".cash-note strong", t.cashImportant);
  setText(".cash-note span", t.cashImportantText);

  setText("#aplicare .apply-text .badge", t.applyBadge);
  setText("#aplicare .apply-text h2", t.applyTitle);
  setText("#aplicare .apply-text p", t.applyText);
  setText(".info-box strong", t.infoTitle);
  setText(".info-box span", t.infoText);

  setText('label[for="nume"]', t.formLabels[0]);
  setText('label[for="telefon"]', t.formLabels[1]);
  setText('label[for="email"]', t.formLabels[2]);
  setText('label[for="oras"]', t.formLabels[3]);
  setText('label[for="transport"]', t.formLabels[4]);
  setText('label[for="platforma"]', t.formLabels[5]);
  setText('label[for="experienta"]', t.formLabels[6]);
  setText('label[for="mesaj"]', t.formLabels[7]);

  setPlaceholder("#nume", t.formPlaceholders[0]);
  setPlaceholder("#telefon", t.formPlaceholders[1]);
  setPlaceholder("#email", t.formPlaceholders[2]);
  setPlaceholder("#oras", t.formPlaceholders[3]);
  setPlaceholder("#mesaj", t.formPlaceholders[4]);

  setOptionTexts("#transport", t.transportOptions);
  setOptionTexts("#platforma", t.platformOptions);
  setOptionTexts("#experienta", t.experienceOptions);

  setText(".apply-form button", t.submitButton);

  setText("#contact .badge", t.contactBadge);
  setText("#contact h2", t.contactTitle);
  setText("#contact .contact-grid > div:first-child p", t.contactText);

  const contactParagraphs = document.querySelectorAll(".contact-card p");
  if (contactParagraphs[0]) {
    contactParagraphs[0].innerHTML = `<strong>${t.contactPhone}</strong> 0720 567 098`;
  }
  if (contactParagraphs[1]) {
    contactParagraphs[1].innerHTML = `<strong>${t.contactEmail}</strong> projectxedelivery@gmail.com`;
  }

  setText(".whatsapp-contact-btn", t.whatsappButton);

  const footerParagraphs = document.querySelectorAll(".footer p");
  if (footerParagraphs[0]) footerParagraphs[0].textContent = t.footerText;
  if (footerParagraphs[1]) footerParagraphs[1].textContent = t.footerSmall;

  if (langRoBtn && langEnBtn) {
    langRoBtn.classList.toggle("active", lang === "ro");
    langEnBtn.classList.toggle("active", lang === "en");
  }
}

function getSelectedText(id) {
  const select = document.getElementById(id);
  if (!select || !select.selectedOptions[0]) return "";
  return select.selectedOptions[0].textContent;
}

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

if (langRoBtn) {
  langRoBtn.addEventListener("click", () => {
    applyLanguage("ro");
  });
}

if (langEnBtn) {
  langEnBtn.addEventListener("click", () => {
    applyLanguage("en");
  });
}

if (applyForm) {
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
      alert(currentLang === "ro" ? "Completează toate câmpurile obligatorii." : "Please complete all required fields.");
      return;
    }

    let mesaj;

    if (currentLang === "en") {
      mesaj = `
Hello! I would like to apply for Project X Courier.

Name: ${nume}
Phone: ${telefon}
Email: ${email}
City: ${oras}
Transport type: ${getSelectedText("transport")}
Preferred platform: ${getSelectedText("platforma")}
Delivery experience: ${getSelectedText("experienta")}
Message: ${mesajExtra || "No additional message added."}
      `;
    } else {
      mesaj = `
Salut! Vreau să aplic pentru Project X Courier.

Nume: ${nume}
Telefon: ${telefon}
Email: ${email}
Oraș: ${oras}
Mijloc de transport: ${getSelectedText("transport")}
Platformă dorită: ${getSelectedText("platforma")}
Experiență livrări: ${getSelectedText("experienta")}
Mesaj: ${mesajExtra || "Nu am adăugat mesaj suplimentar."}
      `;
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mesaj)}`;

    window.location.href = whatsappUrl;
  });
}

applyLanguage(currentLang);
