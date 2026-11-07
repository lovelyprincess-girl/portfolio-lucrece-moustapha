/* ═══════════════════════════════════════════
   NAVIGATION, SCROLL, CERTIFICATIONS
   ═══════════════════════════════════════════ */

/* Menu mobile */
function toggleMenu() {
  const ouvert = document.getElementById("main-nav").classList.toggle("open");
  document.getElementById("burger").setAttribute("aria-expanded", ouvert);
}

function closeMenu() {
  document.getElementById("main-nav").classList.remove("open");
  document.getElementById("burger").setAttribute("aria-expanded", "false");
}

/* Toggle actif compétences / expériences */
function toggleActive(card) {
  const wasActive = card.classList.contains("active");
  const siblings = card.closest("div").querySelectorAll(".skill-card, .exp-card");
  siblings.forEach(c => c.classList.remove("active"));
  if (!wasActive) card.classList.add("active");
}

/* Rendu des certifications depuis js/data/certifications.js */
function afficherCertifications() {
  const grid = document.getElementById("certGrid");
  if (!grid) return;

  grid.innerHTML = certifications.map(cert => `
    <div class="cert-card ${cert.statut === 'en-cours' ? 'en-cours' : ''}">
      <div class="cert-badge">${cert.statut === 'en-cours' ? '…' : '✓'}</div>
      <div class="cert-text">
        <h3>${cert.titre}</h3>
        <span class="cert-meta">${cert.organisme} — ${cert.annee}</span>
        ${cert.statut === 'en-cours' ? '<span class="cert-status">En cours de préparation</span>' : ''}
      </div>
    </div>
  `).join("");
}

/* Fade-in au scroll */
function initFadeIn() {
  const fades = document.querySelectorAll(".fade");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  }, { threshold: 0.1 });

  fades.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  afficherCertifications();
  initFadeIn();
});