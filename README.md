# Pokemon Battle

Un jeu de combat Pokémon développé avec React et Next.js dans le cadre d'un projet scolaire. Le joueur choisit sa créature parmi 4 disponibles, puis affronte un adversaire choisi aléatoirement dans un combat au tour par tour basé sur un système de types (feu, nature, eau, foudre).

## Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- npm (installé automatiquement avec Node.js)

## Installation

Clonez le projet, puis placez-vous dans le dossier :

```bash
git clone https://github.com/BonnetRouge/jeu-de-pokemon.git
cd jeu-de-pokemon
```

Installez les dépendances :

```bash
npm install
```

## Lancer le projet

```bash
npm run dev
```

Le jeu est ensuite accessible dans le navigateur à l'adresse : http://localhost:3000

## Comment jouer

1. Sur l'écran d'accueil, cliquez sur **Start**
2. Choisissez votre Pokemon parmi les 4 proposées en cliquant sur sa carte
3. Un adversaire apparaît automatiquement de façon aléatoire pour le combat
4. Cliquez sur une des attaques disponibles pour attaquer l'adversaire
5. Le combat se déroule au tour par tour jusqu'à ce qu'un des deux combattants soit mis K.O
6. À la fin du combat, cliquez sur **Rejouer** pour retourner au menu et recommencer