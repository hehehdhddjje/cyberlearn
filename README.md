# fliptransfert

**fliptransfert** est un guide vitrine en français pour accompagner le transfert d’un fichier depuis un téléphone vers un Flipper Zero. L’interface adopte la direction artistique **Signal de poche** : blanc chaud, orange signal, graphite et repères inspirés des fiches techniques.

Le site est une expérience frontend statique construite avec React, Vite et Tailwind. Il contient un parcours en trois étapes, une section matériel, une vérification finale et une checklist copiable ou téléchargeable en `.txt`. Aucun fichier de l’utilisateur ne transite par ce site.

## Développement local

```bash
pnpm install
pnpm dev
```

La vérification TypeScript et le build de production sont disponibles avec :

```bash
pnpm check
pnpm build
```

## Publication

Le workflow `.github/workflows/deploy-pages.yml` se déclenche à chaque push sur `main` et peut aussi être lancé manuellement depuis l’onglet **Actions** de GitHub. Il construit `dist/public`, le publie comme artifact Pages puis déploie le site via GitHub Pages.

Dans les réglages GitHub du dépôt, la source Pages doit être configurée sur **GitHub Actions** lors de la première publication. Le site est ensuite accessible à l’adresse `https://<compte-github>.github.io/fliptransfert/`.

## Structure principale

- `client/src/pages/Home.tsx` : page et interactions du guide.
- `client/src/index.css` : tokens, responsive design et direction visuelle.
- `client/public/assets/` : copies autonomes des images de marque utilisées par GitHub Pages.
- `.github/workflows/deploy-pages.yml` : build et déploiement automatique.
