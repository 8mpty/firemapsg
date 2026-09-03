import { PANEL2, BORDER, BLUE, GREEN, AMBER, RED } from '../theme';
import { TEAMS as TEAM_DATA } from '../data';

// Map color-key -> actual value
const COLOR_FN = {
  RED,
  BLUE,
  GREEN,
  AMBER,
};

export default function FloorMap({ variant = 'full', onFireClick }) {
  const rooms = [
    [8, 8, 34, 30],
    [46, 8, 22, 20],
    [72, 8, 20, 24],
    [8, 42, 22, 24],
    [34, 40, 22, 26],
    [60, 40, 32, 26],
    [8, 70, 40, 22],
    [52, 70, 40, 22],
  ];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect x="2" y="2" width="96" height="96" rx="3" fill={PANEL2} stroke={BORDER} strokeWidth="0.6" />
      {rooms.map((r, i) => (
        <rect key={i} x={r[0]} y={r[1]} width={r[2]} height={r[3]} fill="none" stroke="#2C3346" strokeWidth="0.6" />
      ))}
      <path d="M 20 82 L 20 55 L 40 55 L 40 30" fill="none" stroke={BLUE} strokeWidth="1.3" strokeDasharray="2.4 2" />
      <g>
        <rect x="14" y="76" width="10" height="10" rx="2" fill={BLUE} />
        <text x="19" y="83.2" fontSize="6" fontWeight="700" fill="#fff" textAnchor="middle">S</text>
      </g>
      {[
        [30, 12],
        [90, 16],
        [78, 55],
      ].map((p, i) => (
        <g key={i}>
          <rect x={p[0] - 5} y={p[1] - 5} width="10" height="10" rx="2" fill={GREEN} />
          <text x={p[0]} y={p[1] + 2.2} fontSize="6" fontWeight="700" fill="#fff" textAnchor="middle">R</text>
        </g>
      ))}
      <g>
        <polygon points="86,58 90,66 82,66" fill={AMBER} />
        <text x="86" y="64.5" fontSize="5" fontWeight="700" fill="#241900" textAnchor="middle">!</text>
      </g>
      <g onClick={onFireClick} style={{ cursor: onFireClick ? 'pointer' : 'default' }}>
        <circle cx="40" cy="24" r="9" fill={RED} opacity="0.22" />
        <circle cx="40" cy="24" r="5.2" fill={RED} />
        <path d="M40 20.5c1 1.4 2.2 2 2.2 3.6a2.2 2.2 0 1 1-4.4 0c0-.9.5-1.4 1-1.9.4.5.8.8 1.2.3z" fill="#fff" />
      </g>
      {variant === 'team' &&
        TEAM_DATA.map((t) => (
          <g key={t.id}>
            <circle cx={t.x} cy={t.y} r="4" fill={COLOR_FN[t.color]} />
            <circle cx={t.x} cy={t.y} r="7" fill={COLOR_FN[t.color]} opacity="0.25" />
          </g>
        ))}
    </svg>
  );
}
