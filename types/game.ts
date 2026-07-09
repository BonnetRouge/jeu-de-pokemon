export type ElementType = 'feu' | 'nature' | 'eau' | 'foudre';

export interface Move {
    name : string;
    power : number;
}

export interface Creature {
    id : string;
    name: string; 
    type : ElementType;
    maxHp: number;
    moves: Move [];
}

export interface BattleState {
    player: Creature;
    enemy: Creature;
    playerHp: number;
    enemyHp: number;
    isOver: boolean;
    winner: 'player' | 'enemy' | null;
}