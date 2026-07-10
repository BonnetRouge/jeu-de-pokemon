import { Creature } from '../types/game';

export const CREATURES: Creature[] = [
    {
        id: 'braisix',
        name: 'Braisix',
        type: 'feu',
        maxHp: 100,
        moves: [
            { name: 'Griffe ardente', power: 18 },
            { name: 'Souffre cendré', power: 24 },
            { name: 'Flammèche', power: 12 },
            { name: 'Explosion solaire', power: 30 },
        ]
    },
    {
        id: 'racigrom',
        name: 'Racigrom',
        type: 'nature',
        maxHp: 110,
        moves: [
            { name: 'Fouet liane', power: 16 },
            { name: 'Feuille tranchante', power: 22 },
            { name: 'Piqûre d\'épine', power: 13 },
            { name: 'Tempête de graines', power: 28 },
        ]
    },
    {
        id: 'aqualim',
        name: 'Aqualim',
        type: 'eau',
        maxHp: 105,
        moves: [
            { name: 'Jet d\'écume', power: 17 },
            { name: 'Hydro-vague', power: 23 },
            { name: 'Bulle d\'eau', power: 12 },
            { name: 'Raz-de-marée', power: 29 },
        ]
    },
    {
        id: 'voltiz',
        name: 'Voltiz',
        type: 'foudre',
        maxHp: 95,
        moves: [
            { name: 'Étincelle', power: 19 },
            { name: 'Éclair fulgurant', power: 25 },
            { name: 'Choc électrique', power: 14 },
            { name: 'Tonnerre', power: 31 },
        ]
    }
];