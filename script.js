const menuBtn=document.getElementById("menuBtn");const navMenu=document.getElementById("navMenu");const applyForm=document.getElementById("applyForm");const whatsappNumber="40720567098";if(menuBtn&&navMenu){menuBtn.addEventListener("click",function(){navMenu.classList.toggle("active")})}document.querySelectorAll(".nav a").forEach(function(link){link.addEventListener("click",function(){if(navMenu){navMenu.classList.remove("active")}})});if(applyForm){applyForm.addEventListener("submit",function(event){event.preventDefault();const nume=document.getElementById("nume").value.trim();const telefon=document.getElementById("telefon").value.trim();const platforma=document.getElementById("platforma").value;const vehicul=document.getElementById("vehicul").value;const oras=document.getElementById("oras").value.trim();if(!nume||!telefon||!platforma||!vehicul||!oras){alert("Completează toate câmpurile.");return}const mesaj="Salut! Vreau să aplic prin Project X Delivery.

"+"Nume: "+nume+"
"+"Telefon: "+telefon+"
"+"Platformă dorită: "+platforma+"
"+"Vehicul: "+vehicul+"
"+"Oraș: "+oras+"

"+"Am văzut că deschideți conturile rapid și vreau mai multe detalii.";const url="https://wa.me/"+whatsappNumber+"?text="+encodeURIComponent(mesaj);window.open(url,"_blank")})}
