export default function MandalaSVG({
  size = 600,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id="mandalaGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#ff7d0a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ff7d0a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff9b2e" stopOpacity="0.4" />
        </radialGradient>
      </defs>

      {/* Outermost ring */}
      <g
        style={{
          transformOrigin: `${cx}px ${cy}px`,
          animation: "spin 60s linear infinite",
        }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={cx + (size * 0.48) * Math.cos((i * 15 * Math.PI) / 180)}
            y2={cy + (size * 0.48) * Math.sin((i * 15 * Math.PI) / 180)}
            stroke="#fcd34d"
            strokeWidth="0.5"
            strokeOpacity="0.15"
          />
        ))}
        <circle cx={cx} cy={cy} r={size * 0.47} fill="none" stroke="#fcd34d" strokeWidth="0.8" strokeOpacity="0.12" />
      </g>

      {/* Ring 2 */}
      <g
        style={{
          transformOrigin: `${cx}px ${cy}px`,
          animation: "spin 40s linear infinite reverse",
        }}
      >
        <circle cx={cx} cy={cy} r={size * 0.38} fill="none" stroke="#ff9b2e" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="4 8" />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 22.5 * Math.PI) / 180;
          const r = size * 0.38;
          return (
            <polygon
              key={i}
              points={`
                ${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}
                ${cx + (r - 12) * Math.cos(angle + 0.1)},${cy + (r - 12) * Math.sin(angle + 0.1)}
                ${cx + (r - 12) * Math.cos(angle - 0.1)},${cy + (r - 12) * Math.sin(angle - 0.1)}
              `}
              fill="#ff9b2e"
              fillOpacity="0.25"
            />
          );
        })}
      </g>

      {/* Ring 3 */}
      <g
        style={{
          transformOrigin: `${cx}px ${cy}px`,
          animation: "spin 25s linear infinite",
        }}
      >
        <circle cx={cx} cy={cy} r={size * 0.28} fill="none" stroke="#fcd34d" strokeWidth="1" strokeOpacity="0.25" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const r = size * 0.28;
          return (
            <ellipse
              key={i}
              cx={cx + r * Math.cos(angle)}
              cy={cy + r * Math.sin(angle)}
              rx="6"
              ry="14"
              transform={`rotate(${i * 30 + 90}, ${cx + r * Math.cos(angle)}, ${cy + r * Math.sin(angle)})`}
              fill="#fcd34d"
              fillOpacity="0.3"
            />
          );
        })}
      </g>

      {/* Inner ring */}
      <g
        style={{
          transformOrigin: `${cx}px ${cy}px`,
          animation: "spin 15s linear infinite reverse",
        }}
      >
        <circle cx={cx} cy={cy} r={size * 0.18} fill="none" stroke="#ff7d0a" strokeWidth="1.2" strokeOpacity="0.35" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const r = size * 0.18;
          return (
            <polygon
              key={i}
              points={`
                ${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}
                ${cx + (r - 16) * Math.cos(angle + 0.2)},${cy + (r - 16) * Math.sin(angle + 0.2)}
                ${cx + (r - 8) * Math.cos(angle)},${cy + (r - 8) * Math.sin(angle)}
                ${cx + (r - 16) * Math.cos(angle - 0.2)},${cy + (r - 16) * Math.sin(angle - 0.2)}
              `}
              fill="#ff9b2e"
              fillOpacity="0.5"
            />
          );
        })}
      </g>

      {/* Center glow */}
      <circle cx={cx} cy={cy} r={size * 0.06} fill="url(#centerGrad)" />
      <circle cx={cx} cy={cy} r={size * 0.03} fill="#fcd34d" fillOpacity="0.8" />
    </svg>
  );
}