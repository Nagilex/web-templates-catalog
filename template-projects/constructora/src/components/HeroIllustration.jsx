/**
 * Ilustración vectorial del hero: edificio en construcción con grúa torre.
 * Se usa mientras no se configure una foto real en src/config/site.js (heroImage).
 */
export default function HeroIllustration() {
  // Celosía de la torre de la grúa
  const levels = Array.from({ length: 13 }, (_, i) => 400 - i * 24);
  const lattice = levels.slice(0, -1).map((y, i) => {
    const up = y - 24;
    return i % 2 === 0 ? `M418 ${y} L442 ${up}` : `M442 ${y} L418 ${up}`;
  });

  return (
    <svg
      className="hero-art"
      viewBox="0 0 560 460"
      role="img"
      aria-label="Ilustración de un edificio en construcción con una grúa torre"
    >
      <defs>
        <pattern id="cr-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" className="cr-grid" fill="none" strokeWidth="1" />
        </pattern>
        <pattern id="cr-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" className="cr-hatch" strokeWidth="3" />
        </pattern>
      </defs>

      <rect width="560" height="460" className="cr-bg" />
      <rect width="560" height="460" fill="url(#cr-grid)" />

      {/* Terreno */}
      <path d="M24 400H536" className="cr-white" strokeWidth="3" />
      <g className="cr-dim" strokeWidth="2">
        {Array.from({ length: 21 }, (_, i) => (
          <path key={i} d={`M${34 + i * 25} 400 l-10 12`} />
        ))}
      </g>

      {/* Relleno de muros */}
      <rect x="70" y="320" width="80" height="80" fill="url(#cr-hatch)" />
      <rect x="150" y="240" width="80" height="80" className="cr-panel" />

      {/* Estructura del edificio */}
      <g className="cr-white" strokeWidth="7" strokeLinecap="square">
        <path d="M70 400V240M150 400V240M230 400V240M310 400V240" />
        <path d="M70 240V176M150 240V176" />
        <path d="M58 320H322M58 240H322" />
      </g>
      {/* Fierros de espera */}
      <g className="cr-line" strokeWidth="2" strokeDasharray="4 4">
        <path d="M230 240V196M310 240V196M64 176V150M76 176V150M144 176V150M156 176V150" />
      </g>

      {/* Andamio */}
      <g className="cr-line" strokeWidth="2" fill="none">
        <path d="M334 400V236M376 400V236" />
        <path d="M334 360H376M334 320H376M334 280H376M334 240H376" />
        <path d="M334 400L376 360L334 320L376 280L334 240" />
      </g>

      {/* Grúa torre */}
      <g className="cr-line" strokeWidth="2.5" fill="none">
        <path d="M418 400V88M442 400V88" />
        {levels.map((y) => (
          <path key={y} d={`M418 ${y}H442`} />
        ))}
        {lattice.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <rect x="402" y="392" width="56" height="10" className="cr-steel" />

      {/* Pluma y contrapluma */}
      <path d="M190 84H506" className="cr-white" strokeWidth="6" />
      <path d="M430 40L206 84M430 40L498 84" className="cr-line" strokeWidth="2" fill="none" />
      <path d="M430 88V40" className="cr-line" strokeWidth="2.5" />
      <rect x="466" y="88" width="34" height="26" className="cr-orange" />
      <rect x="414" y="88" width="32" height="20" className="cr-orange-line" strokeWidth="3" fill="none" />

      {/* Carga */}
      <rect x="290" y="76" width="20" height="14" className="cr-steel" />
      <path d="M300 90V166" className="cr-white" strokeWidth="2" />
      <path d="M300 166L262 192M300 166L338 192" className="cr-white" strokeWidth="2" />
      <rect x="258" y="192" width="84" height="12" className="cr-orange" />

      {/* Sol */}
      <circle cx="84" cy="74" r="24" className="cr-orange" />

      <text x="30" y="440" className="cr-label">
        VISTA FRONTAL
      </text>
    </svg>
  );
}
