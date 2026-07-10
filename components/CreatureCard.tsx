import { Creature } from "../types/game";

const TYPE_COLORS: Record<string, string> = {
  feu: "border-orange-500 text-orange-400",
  nature: "border-green-500 text-green-400",
  eau: "border-sky-500 text-sky-400",
  foudre: "border-yellow-400 text-yellow-300",
};

interface CreatureCardProps {
  creature: Creature;
  onSelect: (creature: Creature) => void;
}

export default function CreatureCard({
  creature,
  onSelect,
}: CreatureCardProps) {
  return (
    <button
      onClick={() => onSelect(creature)}
      className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 bg-zinc-900 hover:-translate-y-1 transition-transform ${TYPE_COLORS[creature.type]}`}
    >
      <span className="text-lg font-bold">{creature.name}</span>
      <span className="text-xs uppercase tracking-wide">{creature.type}</span>
    </button>
  );
}
