/* ═══════════════════════════════════════════
   RENDU + FILTRES DES PROJETS
   Lit le tableau `projets` (js/data/projets.js)
   et génère les cartes dans #projectGrid.
   ═══════════════════════════════════════════ */

function libelleCategorie(cat) {
  if (cat === "reseaux") return "Systèmes, Réseaux & Sécurité";
  if (cat === "dev") return "Développement";
  if (cat === "gestion") return "Gestion de projet";
  return cat;
}

function creerCarteProjet(projet) {
  const card = document.createElement("div");
  card.className = "proj-card";
  card.dataset.category = projet.categorie;
  card.addEventListener("click", () => toggleProj(card));

  const stackHtml = projet.stack
    .map(tech => `<span class="stack-tag">${tech}</span>`)
    .join("");

  const lienHtml = projet.lien
    ? `<a href="${projet.lien}" target="_blank" rel="noopener" class="proj-link" onclick="event.stopPropagation()">${projet.lienLabel || "Voir sur GitHub"}</a>`
    : "";

  card.innerHTML = `
    <div class="proj-num">${projet.numero}</div>
    <span class="proj-tag">${libelleCategorie(projet.categorie)}</span>
    <h3><button type="button" class="proj-toggle" aria-expanded="false">${projet.titre}</button></h3>
    <p>${projet.resume}</p>
    <div class="proj-details">
      <p class="proj-field"><strong>Contexte</strong> ${projet.contexte}</p>
      <p class="proj-field"><strong>Objectifs</strong> ${projet.objectifs}</p>
      <div class="proj-stack">${stackHtml}</div>
      <p class="proj-field"><strong>Compétences développées</strong> ${projet.competences}</p>
      <p class="proj-field"><strong>Résultats</strong> ${projet.resultats}</p>
      ${lienHtml}
    </div>
  `;

  return card;
}

function afficherProjets(liste) {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";
  liste.forEach(projet => grid.appendChild(creerCarteProjet(projet)));
}

function toggleProj(card) {
  const isOpen = card.classList.contains("open");
  document.querySelectorAll(".proj-card").forEach(c => {
    c.classList.remove("open");
    c.querySelector(".proj-toggle").setAttribute("aria-expanded", "false");
  });
  if (!isOpen) {
    card.classList.add("open");
    card.querySelector(".proj-toggle").setAttribute("aria-expanded", "true");
  }
}

function initFiltres() {
  const boutons = document.querySelectorAll(".filter-btn");
  boutons.forEach(btn => {
    btn.addEventListener("click", () => {
      boutons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filtre = btn.dataset.filter;
      const liste = filtre === "all"
        ? projets
        : projets.filter(p => p.categorie === filtre);

      afficherProjets(liste);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  afficherProjets(projets);
  initFiltres();
});