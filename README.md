# CyberLearn

**CyberLearn** est une plateforme web française pour apprendre la cybersécurité par petits parcours, notions claires et exercices responsables. L’interface propose un tableau de bord, des cours filtrables par niveau, une mission du jour avec mini-quiz et une exploration de plusieurs domaines : fondamentaux, réseaux, sécurité web, défense, cryptographie et OSINT responsable.

Le projet est une expérience frontend statique construite avec React, Vite et Tailwind. La progression et les réponses du quiz sont démontrées localement dans le navigateur ; aucun compte n’est requis et aucun fichier utilisateur n’est envoyé.

## Développement local

```bash
pnpm install
pnpm dev
```

Pour vérifier le projet et préparer une version de production :

```bash
pnpm check
pnpm build
```

## Publication automatique

Le workflow `.github/workflows/deploy-pages.yml` se déclenche à chaque push sur `main` et peut aussi être lancé manuellement depuis l’onglet **Actions** de GitHub. Il construit `dist/public`, dépose l’artifact Pages puis publie le site avec GitHub Pages.

Le site public est destiné à être accessible à l’adresse `https://hehehdhddjje.github.io/cyberlearn/` une fois le dépôt renommé en `cyberlearn` et le workflow exécuté.

## Structure principale

- `client/src/pages/Home.tsx` : tableau de bord, cours, filtres et mini-quiz.
- `client/src/index.css` : direction visuelle Terminal pédagogique et responsive design.
- `client/public/assets/` : assets WebP autonomes pour GitHub Pages.
- `.github/workflows/deploy-pages.yml` : construction et déploiement automatique.
- `ideas.md` : positionnement, architecture pédagogique et décisions de design.
