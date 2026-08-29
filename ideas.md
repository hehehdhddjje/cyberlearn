# CyberLearn — Direction artistique et pédagogique

## Positionnement

CyberLearn est une plateforme d’apprentissage accessible pour comprendre la cybersécurité par la pratique. Elle s’adresse aux débutants curieux, aux étudiants et aux profils techniques qui veulent progresser par petits modules, sans jargon gratuit ni promesse de piratage irréaliste.

## Architecture pédagogique

| Parcours | Promesse | Modules de démonstration |
|---|---|---|
| Fondamentaux | Comprendre les menaces et les bons réflexes | Menaces courantes, mots de passe, authentification |
| Réseaux | Lire les échanges et repérer les anomalies | IP, DNS, HTTP, analyse de trafic |
| Défense | Réagir à un incident de façon méthodique | Journalisation, triage, réponse à incident |
| Sécurité web | Identifier les erreurs d’une application | OWASP, sessions, validation des entrées |
| Cryptographie | Comprendre ce qui protège réellement les données | Hachage, chiffrement, clés publiques |
| OSINT responsable | Chercher des informations sans franchir la ligne | Sources ouvertes, vérification, éthique |

Les cours de démonstration sont présentés comme une interface produit fonctionnelle : progression locale dans le navigateur, filtres par niveau, cartes de cours, mini-quiz avec feedback immédiat et panneau de cours actif. Le site ne prétend pas remplacer une formation certifiante et rappelle l’importance d’un environnement légal de test.

## Direction retenue — Terminal pédagogique

### Design Movement
Une rencontre entre le Swiss Style, les interfaces de centres d’opérations de sécurité et les manuels de laboratoire. La plateforme utilise une structure de tableau de bord, mais garde beaucoup d’espace, des titres éditoriaux et des zones pédagogiques calmes pour éviter l’effet « écran de hacker » caricatural.

### Core Principles
- **Comprendre avant d’exécuter :** chaque action est introduite par une notion, un contexte et une conséquence.
- **Progression visible :** niveaux, pourcentages, séries de cours et états terminés rendent l’apprentissage tangible.
- **Contraste maîtrisé :** le graphite sert à la concentration, le blanc cassé à la lecture et le vert signal à l’état de réussite ; aucune lueur décorative excessive.
- **Éthique intégrée :** les exercices sont orientés défense, observation et environnements autorisés.

### Color Philosophy
Le fond principal graphite `#101315` évoque un espace de travail calme et concentré. Le blanc cassé `#F5F3EE` porte les surfaces de lecture. Le vert signal `#B7F36B` indique une progression validée, tandis que le corail `#FF775C` signale un point d’attention sans devenir une alerte anxiogène. Le bleu brume `#98A9C7` est réservé aux informations secondaires.

### Layout Paradigm
Une navigation latérale compacte organise les domaines, tandis que la zone principale alterne une bande de progression, une grille irrégulière de cours et un module de « mission du jour ». Sur mobile, la navigation devient une barre supérieure et les cartes passent en empilement vertical. L’interface conserve un fil d’Ariane clair et une action de retour sur les vues de cours.

### Signature Elements
- Une **ligne de trace réseau** fine, utilisée comme séparateur et indicateur d’avancement.
- Des **badges d’état** en capitales : EN COURS, VALIDÉ, À DÉCOUVRIR.
- Un **motif de grille de laboratoire** très discret derrière les zones hero et les cartes d’exercice.

### Interaction Philosophy
Les interactions doivent aider à apprendre : filtrer change réellement les cours visibles, cliquer sur une carte ouvre son résumé, et répondre à un quiz donne une explication avant le score. La progression est enregistrée localement, sans compte ni collecte de fichier. Les boutons ont un feedback rapide, les états actifs sont lisibles au clavier et les actions destructives sont absentes de la démonstration.

### Animation
Les transitions restent courtes et utiles : entrée progressive du tableau de bord, barre de progression qui s’anime une seule fois, cartes qui se soulèvent de 2 px au survol et quiz qui révèle son explication en fondu. Les animations sont désactivées avec `prefers-reduced-motion`.

### Typography System
Titres en **Space Grotesk**, poids 600–700, pour une signature contemporaine et technique. Corps en **DM Sans**, poids 400–600, pour une lecture confortable. Les chiffres de progression utilisent Space Grotesk avec des tabulations lisibles ; les labels système utilisent DM Sans en capitales, 10–11 px, avec espacement augmenté.

### Brand Essence
**Apprendre la cybersécurité par des notions claires, des parcours courts et des réflexes responsables.**

Personnalité : **curieuse, structurée, responsable**.

### Brand Voice
Les titres sont précis et encourageants. Les CTA décrivent l’action d’apprentissage plutôt qu’une promesse vague. Le site dit ce que l’utilisateur va comprendre, pas ce qu’il devrait ressentir.

Exemples :
- « Comprendre le signal avant de suivre la trace. »
- « Reprendre le cours là où tu t’es arrêté. »

### Wordmark & Logo
Le symbole CyberLearn est un **bouclier ouvert traversé par un curseur**, construit en formes géométriques simples. L’ouverture signifie que la sécurité se partage par la connaissance ; le curseur évoque l’apprentissage interactif. Le mot-symbole combine `Cyber` en blanc cassé et `Learn` en vert signal.

### Signature Brand Color
**Green Signal — `#B7F36B`**, la couleur de l’acquisition de compétence : elle s’allume quand une notion est comprise et reste assez douce pour ne pas fatiguer les yeux sur un fond sombre.

## Règle de décision
Chaque composant doit répondre à la question : « Est-ce que cette décision rend la prochaine notion plus claire, la progression plus visible ou le comportement plus responsable ? »


## Style Decisions

- Le symbole CyberLearn — bouclier ouvert traversé par un curseur — reste la marque principale du header et sert aussi de repère de validation dans les cartes.
- La ligne de trace réseau devient un motif structurel : elle relie le hero, la progression et la mission du jour, au lieu d’être seulement décorative.
- Les états pédagogiques `EN COURS`, `VALIDÉ` et `À DÉCOUVRIR` sont affichés de façon cohérente sur les cours et les domaines.
- La voix privilégie `comprendre`, `observer`, `protéger`, `vérifier` et `répondre`, en évitant les formulations qui glorifient l’attaque ou la transgression.
