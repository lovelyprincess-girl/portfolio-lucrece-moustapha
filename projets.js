/* ═══════════════════════════════════════════
   DONNÉES PROJETS
   Pour ajouter un projet : copiez un objet, changez les valeurs.
   categorie doit être : "reseaux", "dev" ou "gestion"
   Champs optionnels : lienLabel (texte du lien)
   ═══════════════════════════════════════════ */

const projets = [

  {
    id: 1,
    numero: "01",
    categorie: "reseaux",
    titre: "Reconditionnement et déploiement Windows",
    resume: "Création d'un master Windows 11 et déploiement automatisé avec FOG Project sur un parc informatique.",
    contexte: "Projet réalisé dans le cadre de ma formation Technicien Informatique : créer un poste Windows 11 de référence pour faciliter le déploiement de plusieurs ordinateurs dans un environnement de type cybercafé.",
    objectifs: "Installer et configurer Windows 11, préparer une machine master, automatiser l'installation des logiciels, généraliser le système avec Sysprep, puis capturer et déployer l'image via FOG Project.",
    stack: ["Windows 11", "Debian Linux", "FOG Project", "VirtualBox", "Chocolatey", "Sysprep"],
    competences: "Administration système Windows, virtualisation, préparation de master avec Sysprep, déploiement d'images avec FOG Project, automatisation avec Chocolatey, administration Linux Debian, notions Active Directory.",
    resultats: "Une image master Windows 11 capturée et prête au déploiement, permettant une installation plus rapide et une configuration identique sur plusieurs machines.",
    lien: "https://github.com/lovelyprincess-girl/reconditionnement-deploiement-windows"
  },

  {
    id: 2,
    numero: "02",
    categorie: "reseaux",
    titre: "Déploiement d'un réseau local",
    resume: "Conception du réseau d'une médiathèque : adressage IP, DHCP, DNS, RADIUS, segmentation VLAN et sécurité des switchs Cisco 2960, validés sur une maquette Packet Tracer.",
    contexte: "Projet OpenClassrooms (Technicien Informatique) : configurer le nouveau réseau d'une médiathèque, avec un réseau pour le personnel et un réseau pour les visiteurs.",
    objectifs: "Définir le plan d'adressage (réseau 192.168.10.0/24, IP fixes pour les serveurs et imprimantes, étendue DHCP dédiée), configurer les services DHCP/DNS, prévoir l'authentification RADIUS, segmenter le réseau avec des VLAN et sécuriser les équipements Cisco.",
    stack: ["Cisco 2960", "Cisco Packet Tracer", "DHCP", "DNS", "RADIUS", "VLAN", "Wi-Fi WPA2"],
    competences: "Plan d'adressage IP, segmentation réseau, configuration de switchs Cisco, services réseau (DHCP/DNS), authentification RADIUS, sécurisation d'équipements actifs, rédaction d'une documentation technique.",
    resultats: "Une maquette Packet Tracer et une documentation technique décrivant l'adressage, la configuration DHCP et les réseaux Wi-Fi (personnel et visiteurs).",
    lien: "https://github.com/lovelyprincess-girl/D-ployement-d-un-reseau-local"
  },

  {
    id: 3,
    numero: "03",
    categorie: "reseaux",
    titre: "Projet MDT/WDS — PC Repair",
    resume: "Déploiement automatisé de Windows 11 avec Microsoft Deployment Toolkit (MDT) et Windows Deployment Services (WDS).",
    contexte: "Mettre en place une solution de déploiement automatisé pour équiper rapidement plusieurs postes avec une configuration standardisée.",
    objectifs: "Installer et configurer MDT, importer Windows 11, créer une Task Sequence, configurer WDS et valider le déploiement automatique sur un poste cible.",
    stack: ["Windows Server", "MDT", "WDS", "PXE Boot", "VirtualBox"],
    competences: "Déploiement d'images système, configuration de services Windows Server, démarrage réseau PXE, automatisation de l'installation d'applications.",
    resultats: "Un poste déployé automatiquement avec Windows 11, les applications nécessaires et une configuration prête pour l'utilisateur final.",
    lien: "https://github.com/lovelyprincess-girl/Projet-MDT-WDS-PC-Repair"
  },

  {
    id: 4,
    numero: "04",
    categorie: "reseaux",
    titre: "CyberScanner",
    resume: "Outil Python de scan réseau pédagogique : détection de ports ouverts/fermés et génération de rapports.",
    contexte: "Projet personnel réalisé pour approfondir mes bases en Python et découvrir les fondamentaux de la cybersécurité offensive.",
    objectifs: "Développer un scanner de ports capable de récupérer l'IP d'un nom de domaine, tester les ports courants (21, 22, 25, 53, 80, 110, 143, 443, 3306, 3389) et générer un rapport automatique.",
    stack: ["Python 3", "Socket", "Programmation orientée objet", "Git"],
    competences: "Programmation réseau en Python (sockets), programmation orientée objet, organisation d'un projet en plusieurs modules, gestion des erreurs.",
    resultats: "Un scanner fonctionnel générant des rapports .txt avec comptage des ports ouverts/fermés, code organisé en modules réutilisables.",
    lien: "https://github.com/lovelyprincess-girl/CyberScanner"
  },

  {
    id: 5,
    numero: "05",
    categorie: "reseaux",
    titre: "Mini Coffre-Fort Chiffré",
    resume: "Application Python en ligne de commande pour stocker des textes chiffrés, protégée par un mot de passe haché.",
    contexte: "Premier projet orienté cybersécurité, réalisé pour mettre en pratique le chiffrement de données en vue de ma préparation au Bachelor Cybersécurité & Réseaux.",
    objectifs: "Permettre l'ajout, la lecture et la suppression de contenus chiffrés, protéger l'accès par mot de passe avec verrouillage après trois tentatives incorrectes, journaliser les accès et ne publier aucun secret dans le dépôt.",
    stack: ["Python 3", "cryptography (Fernet)", "PBKDF2-SHA256", "Git"],
    competences: "Chiffrement et déchiffrement symétrique, stockage d'un mot de passe sous forme d'empreinte avec sel, gestion des secrets (clé et mot de passe exclus du dépôt), manipulation de fichiers en Python, gestion des erreurs, journalisation des accès.",
    resultats: "Un coffre-fort fonctionnel : contenus chiffrés, mot de passe créé au premier lancement et stocké haché, verrouillage après trois essais. Limites connues et pistes d'amélioration documentées dans le README.",
    lien: "https://github.com/lovelyprincess-girl/MiniCoffreFort"
  },

  {
    id: 6,
    numero: "06",
    categorie: "dev",
    titre: "Portfolio architecte — Sophie Bluel",
    resume: "Site portfolio dynamique en JavaScript pur, avec authentification et mode édition en temps réel.",
    contexte: "Projet réalisé dans le cadre du parcours OpenClassrooms « Créez une page web dynamique avec JavaScript » pour une architecte d'intérieur fictive.",
    objectifs: "Afficher les travaux depuis une API, filtrer par catégorie, authentifier l'utilisatrice, et permettre l'ajout ou la suppression de travaux en mode édition.",
    stack: ["JavaScript (vanilla)", "HTML", "CSS", "API REST", "Node.js (back-end fourni)"],
    competences: "Manipulation du DOM, appels API avec fetch, gestion de l'authentification par token, organisation modulaire du code JavaScript (auth, api, dom, events).",
    resultats: "Un site fonctionnel avec affichage dynamique des projets, filtres par catégorie et mode édition complet pour l'utilisatrice connectée.",
    lien: "https://github.com/lovelyprincess-girl/portfolio-architecte-sophie-bluel"
  },

  {
    id: 7,
    numero: "07",
    categorie: "dev",
    titre: "Nina Carducci",
    resume: "Optimisation d'un site de photographe : performances, SEO et accessibilité, mesurées avec Lighthouse.",
    contexte: "Projet OpenClassrooms : auditer un site existant et corriger ses défauts en respectant les standards web actuels.",
    objectifs: "Optimiser les performances, mettre en place le référencement local avec des données structurées Schema.org, ajouter les balises pour les réseaux sociaux (Open Graph, Twitter) et corriger les problèmes d'accessibilité (contraste, textes alternatifs, étiquettes ARIA).",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Schema.org", "Lighthouse"],
    competences: "Audit de performance web, optimisation SEO technique, données structurées, accessibilité, chargement différé des images et des scripts (lazy loading, defer), minification.",
    resultats: "Audit Lighthouse (Desktop) avant → après : Performance 69 → 97, Accessibilité 68 → 100, SEO 73 → 100, Bonnes pratiques 100 → 100. Temps d'affichage de l'image principale (LCP) : 16,1 s → 1,1 s. Dernière mesure : 6 septembre 2026.",
    lien: "https://github.com/lovelyprincess-girl/Nina-Carducci"
  },

  {
    id: 8,
    numero: "08",
    categorie: "dev",
    titre: "Mon Vieux Grimoire — API back-end",
    resume: "API Node.js/Express/MongoDB pour un site de notation de livres, avec authentification JWT et optimisation d'images.",
    contexte: "Mission freelance simulée : développement du back-end d'un site de notation de livres en collaboration avec un développeur front-end React, à partir d'un cahier des charges client.",
    objectifs: "Mettre en place une API REST pour la gestion des livres et des notations, sécuriser les routes avec JWT, et optimiser automatiquement les images envoyées par les utilisateurs dans une logique Green Code.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "Sharp"],
    competences: "Conception d'API REST, authentification par token JWT, modélisation de base de données MongoDB, optimisation d'images côté serveur, travail à partir d'un cahier des charges technique.",
    resultats: "Une API back-end complète et fonctionnelle, prête à être connectée au front-end React développé en parallèle.",
    lien: "https://github.com/lovelyprincess-girl/mon-vieux-grimoire-backend"
  },

  {
    id: 9,
    numero: "09",
    categorie: "dev",
    titre: "Kasa",
    resume: "Application front-end React de location immobilière, avec routage et composants réutilisables.",
    contexte: "Projet front-end permettant de présenter des logements à louer façon plateforme de location courte durée.",
    objectifs: "Construire une application React avec Vite, mettre en place le routage entre les pages, et développer des composants réutilisables pour l'affichage des logements.",
    stack: ["React", "Vite", "SCSS", "React Router"],
    competences: "Développement de composants React, gestion du routage côté client, structuration de projet avec Vite, stylisation avec SCSS.",
    resultats: "Une application fonctionnelle avec navigation fluide entre les pages de logements, interface responsive et code componentisé.",
    lien: "https://github.com/lovelyprincess-girl/Kasa"
  },

  {
    id: 10,
    numero: "10",
    categorie: "dev",
    titre: "La Folie Sucrée",
    resume: "Boutique en ligne de pâtisseries créée sans code avec WordPress et WooCommerce, pour découvrir un CMS et la publication d'un site.",
    contexte: "Projet personnel de découverte : créer un site e-commerce avec un CMS, en dehors du cadre de la formation. Le site était hébergé gratuitement (InfinityFree) puis l'hébergement a été supprimé après une longue inactivité ; les captures d'écran sont conservées dans le dépôt.",
    objectifs: "Installer et configurer WordPress et WooCommerce, créer un catalogue de pâtisseries organisé par catégories, mettre en place le panier, la recherche et les avis, puis publier le site avec un hébergeur et un nom de domaine gratuit.",
    stack: ["WordPress", "WooCommerce", "CSS (personnalisation)", "InfinityFree"],
    competences: "Installation et configuration de WordPress, gestion d'un catalogue produits avec WooCommerce, catégories et panier, personnalisation par CSS, notions d'hébergement et de nom de domaine, publication d'un site.",
    resultats: "Une boutique avec accueil, catalogue, fiches produits, recherche, avis et ajout au panier. Le paiement en ligne n'a pas été mis en place (non prévu dans l'objectif). Site hors ligne, captures d'écran disponibles sur GitHub.",
    lien: "https://github.com/lovelyprincess-girl/la-folie-sucree",
    lienLabel: "Voir les captures sur GitHub"
  },

  {
    id: 11,
    numero: "11",
    categorie: "gestion",
    titre: "Menu Maker by Qwenta — planification technique",
    resume: "Plan de développement complet d'un outil web pour restaurateurs : spécifications techniques, Kanban, veille et présentation. Aucun code écrit : le travail porte sur la décision et l'organisation.",
    contexte: "Projet de formation en développement web. Qwenta, un imprimeur qui se diversifie vers le numérique, veut proposer aux restaurateurs un outil pour créer, personnaliser, diffuser et imprimer leur menu. J'ai joué le rôle de développeuse front-end chargée de planifier le développement, de la lecture du cahier des charges jusqu'à la présentation au responsable technique.",
    objectifs: "Transformer un cahier des charges fonctionnel et 16 User Stories en un plan de développement que d'autres développeurs peuvent suivre sans moi : choix techniques justifiés, tâches estimées et sprints ordonnés.",
    stack: ["Notion (Kanban)", "Agile / Scrum", "Feedly (veille)", "Figma (maquette fournie)", "React · Node.js · PostgreSQL (stack préconisée)"],
    competences: "Rédaction de spécifications techniques, découpage de User Stories en tâches estimées (24 tâches, 101 story points), planification en 4 sprints de 2 semaines, veille technologique sur 16 sources, présentation d'une solution technique à un interlocuteur technique.",
    resultats: "Spécifications techniques de 6 pages, tableau Kanban de 24 tâches avec critères de succès vérifiables, veille organisée en deux axes et présentation de 19 slides. Les estimations restent à recaler avec une équipe réelle.",
    lien: "",
    lienLabel: ""
  }

];