interface HpBarProps {
  name: string;
  hp: number;
  maxHp: number;
  align?: "left" | "right";
}

export default function HpBar({ name, hp, maxHp, align = "left" }: HpBarProps) {
  const percent = Math.max(0, Math.round((hp / maxHp) * 100));
  const barColor =
    percent < 25
      ? "bg-red-500"
      : percent < 50
        ? "bg-yellow-400"
        : "bg-green-500";

  return (
    <div
      className={`flex items-center gap-2 w-56 ${align === "right" ? "flex-row-reverse" : ""}`}
    >
      <span className="text-sm font-semibold min-w-[70px]">{name}</span>
      <div className="flex-1 h-2.5 bg-black/40 rounded-full overflow-hidden border border-white/10">
        <div
          className={`h-full rounded-full transition-all duration-500 ${barColor}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-xs text-zinc-400 min-w-[50px] text-right">
        {hp}/{maxHp}
      </span>
    </div>
  );
}
