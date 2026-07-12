export type ElementType = 'fire' | 'grass' | 'water' | 'electric';

export interface Move {
  name: string;
  power: number;
}

export interface Creature {
  id: string;
  name: string;
  type: ElementType;
  maxHp: number;
  sprite: string;
  moves: Move[];
}

export interface BattleState {
  player: Creature;
  enemy: Creature;
  playerHp: number;
  enemyHp: number;
  isOver: boolean;
  winner: 'player' | 'enemy' | null;
}