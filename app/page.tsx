"use client";

import { useState } from "react";
import { Creature } from "../types/game";
import { CREATURES } from "../data/creatures";
import CreatureCard from "../components/CreatureCard";
import Battle from "../components/Battle";

export default function Home() {
  const [player, setPlayer] = useState<Creature | null>(null);

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center gap-8 p-8">
      {!player ? (
        <>
          <h1 className="text-2xl font-bold">Choisis ta créature</h1>
          <div className="grid grid-cols-2 gap-4">
            {CREATURES.map((creature) => (
              <CreatureCard
                key={creature.id}
                creature={creature}
                onSelect={setPlayer}
              />
            ))}
          </div>
        </>
      ) : (
        <Battle player={player} onRestart={() => setPlayer(null)} />
      )}
    </main>
  );
}