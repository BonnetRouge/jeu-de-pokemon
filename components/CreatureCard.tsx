import { Creature } from "../types/game";

const TYPE_STYLES: Record<string, { border: string; text: string; glow: string; badge: string }> = {
  fire: {
    border: "border-orange-500",
    text: "text-orange-300",
    glow: "hover:shadow-orange-500/40",
    badge: "bg-orange-500",
  },
  grass: {
    border: "border-green-500",
    text: "text-green-300",
    glow: "hover:shadow-green-500/40",
    badge: "bg-green-500",
  },
  water: {
    border: "border-sky-500",
    text: "text-sky-300",
    glow: "hover:shadow-sky-500/40",
    badge: "bg-sky-500",
  },
  electric: {
    border: "border-yellow-400",
    text: "text-yellow-200",
    glow: "hover:shadow-yellow-400/40",
    badge: "bg-yellow-400",
  },
};

interface CreatureCardProps {
  creature: Creature;
  onSelect: (creature: Creature) => void;
}

export default function CreatureCard({
  creature,
  onSelect,
}: CreatureCardProps) {
  const style = TYPE_STYLES[creature.type];

  return (
    <button
      onClick={() => onSelect(creature)}
      className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 bg-zinc-900/80 backdrop-blur shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all ${style.border} ${style.glow}`}
    >
      <img src={creature.sprite} alt={creature.name} className="w-20 h-20" />
      <span className={`text-xl font-extrabold ${style.text}`}>
        {creature.name}
      </span>
      <span
        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-black ${style.badge}`}
      >
        {creature.type}
      </span>
    </button>
  );
}