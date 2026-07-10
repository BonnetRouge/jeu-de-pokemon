"use client";

import { useState } from "react";
import { Creature } from "../types/game";
import { CREATURES } from "../data/creatures";
import HpBar from "./HpBar";

const CYCLE: Creature["type"][] = ["feu", "nature", "eau", "foudre"];

function getMultiplier(attacker: Creature["type"], defender: Creature["type"]) {
  const attackerIndex = CYCLE.indexOf(attacker);
  if (CYCLE[(attackerIndex + 1) % 4] === defender) return 1.5;
  if (CYCLE[(attackerIndex + 3) % 4] === defender) return 0.6;
  return 1;
}

interface BattleProps {
  player: Creature;
  onRestart: () => void;
}

export default function Battle({ player, onRestart }: BattleProps) {
  const [enemy] = useState<Creature>(() => {
    const remainingCreatures = CREATURES.filter(
      (creature) => creature.id !== player.id,
    );
    return remainingCreatures[
      Math.floor(Math.random() * remainingCreatures.length)
    ];
  });
  const [playerHp, setPlayerHp] = useState(player.maxHp);
  const [enemyHp, setEnemyHp] = useState(enemy.maxHp);
  const [log, setLog] = useState<string[]>([
    `Un ${enemy.name} sauvage apparaît face à ton ${player.name} !`,
  ]);
  const [locked, setLocked] = useState(false);
  const [winner, setWinner] = useState<"player" | "enemy" | null>(null);

  function addLog(text: string) {
    setLog((prev) => [...prev, text]);
  }

  function playerMove(power: number, name: string) {
    if (locked || winner) return;
    setLocked(true);

    const multiplier = getMultiplier(player.type, enemy.type);
    const damage = Math.max(
      1,
      Math.round(power * multiplier * (0.85 + Math.random() * 0.3)),
    );
    const newEnemyHp = Math.max(0, enemyHp - damage);
    setEnemyHp(newEnemyHp);
    addLog(
      `${player.name} utilise ${name} — ${damage} dégâts${
        multiplier > 1
          ? " (super efficace !)"
          : multiplier < 1
            ? " (peu efficace...)"
            : ""
      }`,
    );

    setTimeout(() => {
      if (newEnemyHp <= 0) {
        setWinner("player");
        addLog(`${enemy.name} est mis hors combat.`);
        return;
      }
      enemyMove();
    }, 650);
  }

  function enemyMove() {
    const move = enemy.moves[Math.floor(Math.random() * enemy.moves.length)];
    const multiplier = getMultiplier(enemy.type, player.type);
    const damage = Math.max(
      1,
      Math.round(move.power * multiplier * (0.85 + Math.random() * 0.3)),
    );
    const newPlayerHp = Math.max(0, playerHp - damage);
    setPlayerHp(newPlayerHp);
    addLog(
      `${enemy.name} riposte avec ${move.name} — ${damage} dégâts${
        multiplier > 1
          ? " (super efficace !)"
          : multiplier < 1
            ? " (peu efficace...)"
            : ""
      }`,
    );

    setTimeout(() => {
      if (newPlayerHp <= 0) {
        setWinner("enemy");
        addLog(`${player.name} est mis hors combat.`);
        return;
      }
      setLocked(false);
    }, 650);
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <HpBar name={enemy.name} hp={enemyHp} maxHp={enemy.maxHp} align="right" />
      <HpBar
        name={player.name}
        hp={playerHp}
        maxHp={player.maxHp}
        align="left"
      />

      <div className="bg-black/30 rounded-xl p-3 h-24 overflow-y-auto text-sm text-zinc-300">
        {log.map((line, index) => (
          <p
            key={index}
            className={index === log.length - 1 ? "text-white font-medium" : ""}
          >
            {line}
          </p>
        ))}
      </div>

      {winner ? (
        <div className="flex flex-col items-center gap-3 py-4">
          <p className="text-xl font-bold">
            {winner === "player" ? "Victoire !" : "Défaite..."}
          </p>
          <button
            onClick={onRestart}
            className="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold"
          >
            Rejouer
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {player.moves.map((move) => (
            <button
              key={move.name}
              disabled={locked}
              onClick={() => playerMove(move.power, move.name)}
              className="text-left p-3 rounded-xl bg-zinc-800 border border-white/10 hover:border-yellow-400 disabled:opacity-40 transition-colors"
            >
              <span className="block font-semibold text-sm">{move.name}</span>
              <span className="block text-xs text-zinc-400 mt-1">
                {player.type} · puissance {move.power}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
