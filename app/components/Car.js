export default function Car({ body = "#ffd23f", glass = "#12042b", className = "" }) {
  return (
    <svg className={`car ${className}`} viewBox="0 0 410 190" aria-hidden="true">
      <ellipse cx="205" cy="178" rx="170" ry="8" fill="rgba(0,0,0,.28)" />
      <path d="M18 128Q18 104 50 98L100 92Q128 52 182 50L252 50Q292 54 312 92L362 100Q392 106 392 130L392 142L18 142Z" fill={body} />
      <path d="M116 90Q136 64 182 62L208 62L208 92Z" fill={glass} opacity=".88" />
      <path d="M218 62L250 62Q274 66 292 92L218 92Z" fill={glass} opacity=".88" />
      <rect x="372" y="108" width="18" height="10" rx="4" fill="#fff" />
      <rect x="20" y="110" width="14" height="9" rx="4" fill="#ff3d81" />
      <path d="M30 128h340" stroke="rgba(0,0,0,.18)" strokeWidth="3" />
      {[104, 306].map((x) => (
        <g key={x}>
          <circle cx={x} cy="144" r="30" fill="#0b0220" />
          <g className="wheel" style={{ transformOrigin: `${x}px 144px` }}>
            <circle cx={x} cy="144" r="17" fill="#d9d4ee" />
            {[0, 72, 144, 216, 288].map((a) => (
              <rect key={a} x={x - 2} y="128" width="4" height="14" rx="2" fill="#6b5f99" transform={`rotate(${a} ${x} 144)`} />
            ))}
            <circle cx={x} cy="144" r="4" fill="#0b0220" />
          </g>
        </g>
      ))}
    </svg>
  );
}
