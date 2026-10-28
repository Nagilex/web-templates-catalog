/**
 * Ilustración vectorial del hero (torre de tendido y tablero eléctrico).
 * Se usa mientras no se configure una foto real en src/config/site.js (heroImage).
 */
export default function HeroIllustration() {
  const breakers = [0, 1, 2, 3].flatMap((row) =>
    [0, 1].map((col) => ({
      x: 244 + col * 100,
      y: 214 + row * 44,
      on: (row + col) % 3 !== 1,
      key: `${row}-${col}`,
    }))
  );

  return (
    <svg
      className="hero-art"
      viewBox="0 0 520 440"
      role="img"
      aria-label="Ilustración de una torre de alta tensión y un tablero eléctrico"
    >
      <defs>
        <pattern id="il-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" className="il-dot" />
        </pattern>
        <radialGradient id="il-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" className="il-glow-a" />
          <stop offset="100%" className="il-glow-b" />
        </radialGradient>
      </defs>

      <rect width="520" height="440" rx="28" className="il-bg" />
      <rect width="520" height="440" rx="28" fill="url(#il-dots)" opacity="0.55" />
      <circle cx="440" cy="132" r="110" fill="url(#il-glow)" />

      {/* Torre */}
      <g className="il-line" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M120 50 L80 400 M120 50 L160 400" />
        <path d="M60 96 H180 M72 130 H168" />
        <path d="M108.6 150 H131.4 M101.7 230 H138.3 M94.9 310 H145.1" />
        <path d="M108.6 150 L138.3 230 M131.4 150 L101.7 230" />
        <path d="M101.7 230 L145.1 310 M138.3 230 L94.9 310" />
        <path d="M94.9 310 L160 400 M145.1 310 L80 400" />
        <path d="M180 96 C 250 150, 330 70, 520 126" />
        <path d="M168 130 C 240 190, 320 110, 520 170" />
        <path d="M60 96 C 30 120, 10 120, 0 126" />
        <path d="M72 130 C 40 160, 20 160, 0 170" />
      </g>
      <g className="il-yellow-fill">
        <circle cx="60" cy="96" r="5" />
        <circle cx="180" cy="96" r="5" />
        <circle cx="72" cy="130" r="5" />
        <circle cx="168" cy="130" r="5" />
      </g>

      {/* Tablero */}
      <rect x="220" y="150" width="240" height="250" rx="16" className="il-panel" />
      <rect x="220" y="150" width="240" height="44" rx="16" className="il-panel-head" />
      <rect x="220" y="178" width="240" height="16" className="il-panel-head" />
      <text x="240" y="178" className="il-label">
        TABLERO PRINCIPAL
      </text>
      {breakers.map((b) => (
        <g key={b.key}>
          <rect x={b.x} y={b.y} width="84" height="32" rx="7" className="il-breaker" />
          <rect
            x={b.x + 30}
            y={b.y + (b.on ? 5 : 15)}
            width="24"
            height="12"
            rx="3"
            className={b.on ? "il-toggle-on" : "il-toggle-off"}
          />
        </g>
      ))}

      {/* Rayo */}
      <circle cx="440" cy="132" r="36" className="il-badge" />
      <path d="M447 106 L421 137 H438 L430 162 L459 124 H442 Z" className="il-bolt" />
    </svg>
  );
}
