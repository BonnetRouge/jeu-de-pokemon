import { ElementType, Move } from '../types/game';

export const MOVES_BY_TYPE: Record<ElementType, Move[]> = {
  fire: [
    { name: 'Ember', power: 18 },
    { name: 'Flame Burst', power: 24 },
    { name: 'Fire Fang', power: 12 },
    { name: 'Flamethrower', power: 30 },
  ],
  grass: [
    { name: 'Vine Whip', power: 16 },
    { name: 'Razor Leaf', power: 22 },
    { name: 'Leech Seed', power: 13 },
    { name: 'Solar Beam', power: 28 },
  ],
  water: [
    { name: 'Water Gun', power: 17 },
    { name: 'Bubble Beam', power: 23 },
    { name: 'Aqua Jet', power: 12 },
    { name: 'Hydro Pump', power: 29 },
  ],
  electric: [
    { name: 'Spark', power: 19 },
    { name: 'Thunder Shock', power: 25 },
    { name: 'Quick Attack', power: 14 },
    { name: 'Thunderbolt', power: 31 },
  ],
};