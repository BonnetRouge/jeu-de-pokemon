import { Creature } from '../types/game';

const CREATURE_NAMES = ['braisix', 'racigrom', 'aqualim', 'voltiz'];

const CREATURE_TYPES: Record<string, 'fire' | 'grass' | 'water' | 'electric'> = {
  braisix: 'fire',
  racigrom: 'grass',
  aqualim: 'water',
  voltiz: 'electric',
};

const CREATURE_DISPLAY_NAMES: Record<string, string> = {
  braisix: 'Braisix',
  racigrom: 'Racigrom',
  aqualim: 'Aqualim',
  voltiz: 'Voltiz',
};

const CREATURE_MAX_HP: Record<string, number> = {
  braisix: 100,
  racigrom: 110,
  aqualim: 105,
  voltiz: 95,
};

const CREATURE_MOVES: Record<string, { name: string; power: number }[]> = {
  braisix: [
    { name: 'Griffe ardente', power: 18 },
    { name: 'Souffre cendré', power: 24 },
    { name: 'Flammèche', power: 12 },
    { name: 'Explosion solaire', power: 30 },
  ],
  racigrom: [
    { name: 'Fouet liane', power: 16 },
    { name: 'Feuille tranchante', power: 22 },
    { name: "Piqûre d'épine", power: 13 },
    { name: 'Tempête de graines', power: 28 },
  ],
  aqualim: [
    { name: "Jet d'écume", power: 17 },
    { name: 'Hydro-vague', power: 23 },
    { name: "Bulle d'eau", power: 12 },
    { name: 'Raz-de-marée', power: 29 },
  ],
  voltiz: [
    { name: 'Étincelle', power: 19 },
    { name: 'Éclair fulgurant', power: 25 },
    { name: 'Choc électrique', power: 14 },
    { name: 'Tonnerre', power: 31 },
  ],
};

const SPRITE_SOURCE: Record<string, string> = {
  braisix: 'charmander',
  racigrom: 'bulbasaur',
  aqualim: 'squirtle',
  voltiz: 'pikachu',
};

export async function fetchCreatures() {
  const creatures: Creature[] = [];

  for (const id of CREATURE_NAMES) {
    const pokemonName = SPRITE_SOURCE[id];
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
    const data = await response.json();

    const creature = {
      id: id,
      name: CREATURE_DISPLAY_NAMES[id],
      type: CREATURE_TYPES[id],
      maxHp: CREATURE_MAX_HP[id],
      sprite: data.sprites.front_default,
      moves: CREATURE_MOVES[id],
    };

    creatures.push(creature);
  }

  return creatures;
}