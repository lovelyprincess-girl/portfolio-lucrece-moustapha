# Portfolio — Lucrèce Moustapha

Portfolio personnel en HTML, CSS et JavaScript, sans framework. Il présente mon parcours, mes projets, mes compétences et mes certifications dans le cadre de ma recherche d'alternance.

**Site en ligne :** à compléter après la mise en ligne (hébergement OVH prévu).

## À propos du projet

Je suis étudiante en Bachelor 3 Cybersécurité & Réseaux à Paris, à la recherche d'une alternance en :

- assistante cheffe de projet IT (réseaux, systèmes, cybersécurité),
- cheffe de projet informatique junior,
- administratrice systèmes et réseaux.

Ce portfolio est le projet final de mon parcours OpenClassrooms. Il reprend un portfolio précédent que j'ai restructuré et enrichi.

## Contenu du site

- **À propos** : présentation et rôles recherchés.
- **Projets** : 11 projets en 3 catégories (Systèmes, Réseaux & Sécurité ; Développement ; Gestion de projet), avec filtres. Chaque fiche présente le contexte, les objectifs, les technologies, les compétences développées, les résultats et un lien vers le dépôt GitHub.
- **Compétences**, **Certifications**, **Formation**, **Expériences** et **Contact**.

## Technologies

- HTML5, CSS3 et JavaScript (sans framework ni bibliothèque)
- Les projets et les certifications sont stockés dans des fichiers de données (`js/data/`) et affichés dynamiquement : pour ajouter un projet, il suffit d'ajouter un objet dans `projets.js`.


## Accessibilité

- Cartes de projets utilisables au clavier (boutons avec `aria-expanded`), menu mobile en bouton avec libellé.
- Contour visible au focus, contrastes de texte vérifiés, taille de texte minimale de 12 px.
- Testé avec deux outils :

| Outil | Avant | Après |
|---|---|---|
| Lighthouse (accessibilité) | 92 | 100 |
| WAVE | 3 erreurs de contraste, 88 alertes de petit texte | 0 erreur réelle |

Le seul signalement restant de WAVE concerne mon nom en contour dans le titre : le remplissage est transparent et WAVE ne mesure pas les contours, mais le texte est très grand et son contour est contrasté.

## Référencement (SEO)

- Titre et description rédigés à partir de l'analyse de trois offres d'alternance (mots-clés récurrents : projet IT, réseaux, sécurité, documentation, suivi).
- Balises Open Graph pour l'aperçu de partage et données structurées Schema.org (type `Person`).

## Performances (Lighthouse, mesuré en local)

| Catégorie | Avant | Après |
|---|---|---|
| Performance | 78 | 99 |
| Accessibilité | 92 | 100 |
| Bonnes pratiques | 100 | 100 |
| SEO | 100 | 100 |

## Utilisation de l'IA

J'ai utilisé des assistants IA (Claude, ChatGPT) comme outil d'accompagnement pour structurer le code, relire, corriger des erreurs et documenter. L'IA ne remplace pas mon travail : je relis, je teste et je comprends ce que je publie, et le contenu (parcours, projets, résultats) provient de mes propres projets.

## Lancer le projet en local

Aucune installation n'est nécessaire : ouvrir `index.html` dans un navigateur. Avec Visual Studio Code, l'extension Live Server permet de recharger la page automatiquement.

## Contact

- Email : moustaphantoufath@gmail.com
- GitHub : [lovelyprincess-girl](https://github.com/lovelyprincess-girl)
- LinkedIn : [lucrece-m-54b7503ba](https://www.linkedin.com/in/lucrece-m-54b7503ba/)
