import { Creature } from '../types/game';

const CREATURE_NAMES = ['charmander', 'bulbasaur', 'squirtle', 'pikachu'];

const CREATURE_FRENCH_NAMES: Record<string, string> = {
  charmander: 'Salamèche',
  bulbasaur: 'Bulbizarre',
  squirtle: 'Carapuce',
  pikachu: 'Pikachu',
};

const CREATURE_TYPES: Record<string, 'fire' | 'grass' | 'water' | 'electric'> = {
  charmander: 'fire',
  bulbasaur: 'grass',
  squirtle: 'water',
  pikachu: 'electric',
};

const CREATURE_MAX_HP: Record<string, number> = {
  charmander: 100,
  bulbasaur: 110,
  squirtle: 105,
  pikachu: 95,
};

const CREATURE_MOVES: Record<string, { name: string; power: number }[]> = {
  charmander: [
    { name: 'Scratch', power: 12 },
    { name: 'Ember', power: 18 },
    { name: 'Fire Fang', power: 24 },
    { name: 'Flamethrower', power: 30 },
  ],
  bulbasaur: [
    { name: 'Tackle', power: 12 },
    { name: 'Vine Whip', power: 18 },
    { name: 'Razor Leaf', power: 24 },
    { name: 'Solar Beam', power: 30 },
  ],
  squirtle: [
    { name: 'Tackle', power: 12 },
    { name: 'Water Gun', power: 18 },
    { name: 'Bubble Beam', power: 24 },
    { name: 'Hydro Pump', power: 30 },
  ],
  pikachu: [
    { name: 'Quick Attack', power: 12 },
    { name: 'Spark', power: 18 },
    { name: 'Thunder Shock', power: 24 },
    { name: 'Thunderbolt', power: 30 },
  ],
};

export async function fetchCreatures() {
  const creatures: Creature[] = [];

  for (const id of CREATURE_NAMES) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
    const data = await response.json();

    const creature = {
      id: id,
      name: CREATURE_FRENCH_NAMES[id],
      type: CREATURE_TYPES[id],
      maxHp: CREATURE_MAX_HP[id],
      sprite: data.sprites.front_default,
      moves: CREATURE_MOVES[id],
    };

    creatures.push(creature);
  }

  return creatures;
}