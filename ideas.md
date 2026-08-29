# Direction artistique — fliptransfert

## Trois pistes initiales

### 1. Signal de poche
**Very Brief Intro:** Une identité éditoriale et technique inspirée des interfaces de diagnostic, avec orange signal, blanc chaud et typographie condensée. Le site donne l’impression d’un outil fiable, direct et fait pour passer à l’action.

**Probability:** 0.07

### 2. Atelier solaire
**Very Brief Intro:** Une esthétique plus douce, artisanale et lumineuse, mêlant crème, orange mandarine, papier texturé et schémas dessinés. Le ton rend le transfert accessible aux débutants.

**Probability:** 0.03

### 3. Circuit nocturne
**Very Brief Intro:** Une direction sombre et énergique, structurée par des lignes orange, des halos et une sensation de console maker. L’ensemble valorise le côté expérimental et hacker du Flipper Zero.

**Probability:** 0.09

## Approche choisie — Signal de poche

### Design Movement
Swiss International Style revisité par l’esthétique des outils techniques portables et des manuels de terrain. La rigueur de la grille est conservée, mais la composition utilise des décalages, des repères et des blocs de signalisation plutôt qu’une page parfaitement centrée.

### Core Principles
- **Lire en mouvement :** chaque section doit guider l’œil du problème vers l’action, puis vers la vérification.
- **Signal avant décoration :** l’orange sert à indiquer les actions, les connexions et les points importants ; il ne devient jamais un dégradé décoratif omniprésent.
- **Technique rendue humaine :** les mots sont concrets, les étapes courtes et les limites clairement annoncées.
- **Précision visible :** numérotation, badges d’état, repères et connecteurs visuels donnent confiance sans surcharger.

### Color Philosophy
Le blanc chaud (`#FFFDF8`) crée un espace de travail lumineux, lisible sur mobile et proche d’une fiche technique imprimée. L’orange signature (`#F36A2D`) évoque le bouton d’action, le câble actif et le signal qui circule. Le noir graphite (`#1D1E20`) porte les explications et évite l’aspect jouet ; les gris sable créent des zones de repos sans concurrence visuelle.

### Layout Paradigm
Une structure en bandes décalées : l’introduction commence par une large scène à deux axes, puis les étapes prennent la forme d’un parcours vertical avec numéros surdimensionnés et cartes légèrement offset. Les sections alternent entre pleine largeur et colonne étroite afin d’éviter la succession de blocs centrés identiques.

### Signature Elements
- Un **chemin de transfert** en pointillés orange qui relie téléphone, câble et Flipper Zero.
- Des **étiquettes de statut** en capitales condensées : PRÊT, CONNECTÉ, VÉRIFIER.
- Des **coins de fiche technique** et micro-repères de coordonnées pour donner au site une personnalité d’instrument.

### Interaction Philosophy
Les interactions doivent confirmer une action plutôt que divertir. Un clic révèle une étape ou copie une commande avec un retour immédiat. Les boutons se comportent comme des commandes physiques : légère compression au clic, déplacement court au survol et focus très visible au clavier.

### Animation
Les éléments de la première vue entrent avec un décalage de 50 ms entre eux, en translation courte et opacité, sans zoom spectaculaire. Les connecteurs orange se dessinent en 220 ms quand une étape est mise en avant. Les cartes changent seulement de bordure, d’ombre et de translation ; aucune animation ne doit déplacer le contenu de manière imprévisible. Toutes les animations non essentielles sont désactivées avec `prefers-reduced-motion`.

### Typography System
Titres en **Barlow Condensed**, poids 700 à 800, avec capitales mesurées et interlettrage légèrement négatif. Corps et interfaces en **DM Sans**, poids 400 à 700, pour une lecture confortable sur téléphone. Hiérarchie : H1 très large et compact, H2 en capitales avec petite étiquette orange au-dessus, paragraphes limités à 62 caractères par ligne, labels en 11–12 px avec espacement augmenté.

### Brand Essence
**Le guide clair pour faire passer un fichier du téléphone au Flipper Zero, sans détour ni jargon inutile.**

Personnalité : **directe, ingénieuse, rassurante**.

### Brand Voice
Les titres sont courts et actifs. Les CTA parlent comme des commandes utiles, jamais comme des promesses vagues. Les microcopies précisent l’action et le résultat attendu.

Exemples :
- « Du téléphone au Flipper. Le chemin le plus court. »
- « Vérifier le format avant d’envoyer »

### Wordmark & Logo
Le symbole est un **éclair-flèche monogramme** : deux chevrons orange reliés par un point central, évoquant un fichier qui traverse une liaison. Le mot-symbole `fliptransfert` sera composé en Barlow Condensed avec une coupe orange dans le `t`, mais le pictogramme reste autonome pour l’avatar et le favicon.

### Signature Brand Color
**Orange Signal — `#F36A2D`**. C’est la couleur propriétaire du lien actif : assez chaude pour être mémorisable, assez sombre pour rester lisible en texte et suffisamment distincte des oranges génériques d’alerte.

## Règle de décision
Avant chaque choix visuel, vérifier : « Est-ce que cette décision renforce le sentiment d’un transfert simple, lisible et maîtrisé, ou est-ce qu’elle dilue le signal ? »
