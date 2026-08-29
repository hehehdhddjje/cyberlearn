## Diagnostic 404 — 29 août 2026

La page GitHub Pages charge bien le HTML de fliptransfert et son titre, mais l’application React affiche son composant NotFound sur `https://hehehdhddjje.github.io/fliptransfert/`. Le premier correctif a ajouté une route dynamique basée sur `import.meta.env.BASE_URL`, puis le workflow GitHub Actions a terminé avec succès, mais le navigateur affiche encore 404. Le prochain contrôle doit lire `window.location.pathname` et la valeur de `import.meta.env.BASE_URL` dans le bundle exécuté afin de confirmer si Wouter reçoit `/fliptransfert/` ou une autre route.


Le contrôle navigateur confirme `window.location.pathname === "/fliptransfert/"` et le corps contient bien le texte 404 de l’application. La valeur de base n’a pas pu être lue directement via `import.meta` dans la console, car l’évaluation n’est pas exécutée comme module. Le correctif suivant ajoute explicitement les routes `/fliptransfert` et `/fliptransfert/`.


Après le second déploiement, GitHub Pages sert bien un nouveau bundle (`index-CFsWg_o2.js`) et la console navigateur ne montre aucune erreur JavaScript, mais la route `/fliptransfert/` rend toujours NotFound. Le problème est donc le matching de route Wouter plutôt qu’un échec de build, d’asset ou de workflow. Une stratégie plus robuste consiste à supprimer le matching dépendant du chemin et à rendre la page Home comme fallback pour toute route publique, en gardant `/404` comme seule exception explicite si nécessaire.
