"use client";

import { useEffect, useState } from "react";
import { Creature } from "../types/game";
import { fetchCreatures } from "../data/creatures";
import CreatureCard from "../components/CreatureCard";
import Battle from "../components/Battle";

type Screen = "menu" | "selection" | "battle";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("menu");
  const [creatures, setCreatures] = useState<Creature[]>([]);
  const [player, setPlayer] = useState<Creature | null>(null);

  useEffect(() => {
    fetchCreatures().then((result) => setCreatures(result));
  }, []);

  function handleStart() {
    setScreen("selection");
  }

  function handleSelect(creature: Creature) {
    setPlayer(creature);
    setScreen("battle");
  }

  function handleRestart() {
    setPlayer(null);
    setScreen("menu");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-700 via-zinc-900 to-blue-800 text-white flex flex-col items-center justify-center gap-8 p-8">
      {screen === "menu" && (
        <>
          <div className="w-16 h-16 rounded-full bg-white border-4 border-black relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500" />
            <div className="absolute top-1/2 left-0 w-full h-1 bg-black -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-white border-2 border-black -translate-x-1/2 -translate-y-1/2" />
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Pokemon Battle
          </h1>
          <button
            onClick={handleStart}
            className="px-8 py-3 rounded-full bg-yellow-400 text-black font-bold text-lg shadow-lg border-2 border-yellow-600 hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-transform"
          >
            Start
          </button>
        </>
      )}

      {screen === "selection" && (
        <>
          <h1 className="text-2xl font-bold text-yellow-300 drop-shadow">
            Choisis ton Pokemon
          </h1>
          <div className="grid grid-cols-2 gap-4">
            {creatures.map((creature) => (
              <CreatureCard
                key={creature.id}
                creature={creature}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </>
      )}

      {screen === "battle" && player && (
        <Battle player={player} creatures={creatures} onRestart={handleRestart} />
      )}
    </main>
  );
}