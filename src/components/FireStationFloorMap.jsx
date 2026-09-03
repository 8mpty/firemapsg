import { PANEL2, BORDER, RED, GREEN, BLUE, AMBER, TEXT, SUBTEXT } from '../theme';

// Tuas Fire Station ground floor plan, restyled to match the app's floor-plan theme
// (dark background, thin outlined rooms, coloured accents for fire/riser/stair/route).
// When `focusRiser` is true, riser markers are drawn enlarged & highlighted for the
// "Nearest Riser" view; all other usages keep the compact markers.
export default function FireStationFloorMap({ onPetrolClick, focusRiser }) {
  return (
    <svg viewBox="0 0 1000 600" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Yard background */}
      <rect x="0" y="0" width="1000" height="600" fill={PANEL2} stroke={BORDER} strokeWidth="1.5" rx="3" />

      {/* Driveway / Walkway */}
      <rect x="40" y="40" width="100" height="520" fill="none" stroke={BORDER} strokeWidth="1.2" strokeDasharray="8 6" />
      <text x="90" y="300" fill={SUBTEXT} fontSize="22" fontWeight="bold" textAnchor="middle" transform="rotate(-90 90 300)" opacity="0.8">
        DRIVEWAY
      </text>

      {/* Petrol Kiosk - HIGH RISK fire origin */}
      <rect x="160" y="40" width="200" height="150" fill="none" stroke={RED} strokeWidth="2.5" onClick={onPetrolClick}
        style={{ cursor: onPetrolClick ? 'pointer' : 'default' }} />
      <text x="260" y="120" fill={TEXT} fontSize="24" fontWeight="bold" textAnchor="middle">PETROL KIOSK</text>
      {/* High-risk fire marker */}
      <g onClick={onPetrolClick} style={{ cursor: onPetrolClick ? 'pointer' : 'default' }}>
        <circle cx="210" cy="95" r="26" fill={RED} opacity="0.25" />
        <circle cx="210" cy="95" r="15" fill={RED} />
        <path d="M210 84.5c3 4.2 6.6 6 6.6 10.8a6.6 6.6 0 1 1-13.2 0c0-2.7 1.5-4.2 3-5.7 1.2 1.5 2.4 2.4 3.6.9z" fill="#fff" />
      </g>
      <text x="210" y="78" fontSize="14" fontWeight="bold" fill={RED} textAnchor="middle">HIGH RISK</text>

      {/* Back Engine Bay */}
      <rect x="360" y="40" width="240" height="150" fill="none" stroke={BORDER} strokeWidth="1.2" />
      <text x="480" y="118" fill={TEXT} fontSize="24" fontWeight="bold" textAnchor="middle">BACK ENGINE BAY</text>

      {/* Foam Bay */}
      <rect x="600" y="40" width="180" height="150" fill="none" stroke={BORDER} strokeWidth="1.2" />
      <text x="690" y="118" fill={TEXT} fontSize="22" fontWeight="bold" textAnchor="middle">FOAM BAY</text>

      {/* Hose Tower / Washing Bay */}
      <rect x="790" y="40" width="170" height="230" fill="none" stroke={BORDER} strokeWidth="1.2" />
      <text x="875" y="140" fill={TEXT} fontSize="20" fontWeight="bold" textAnchor="middle">HOSE TOWER</text>
      <text x="875" y="164" fill={TEXT} fontSize="20" fontWeight="bold" textAnchor="middle">WASHING BAY</text>

      {/* Main Engine Bay + Watchroom */}


      <rect x="160" y="320" width="460" height="240" fill="none" stroke={BORDER} strokeWidth="1.2" />
      <text x="390" y="425" fill={TEXT} fontSize="26" fontWeight="bold" textAnchor="middle">MAIN ENGINE BAY</text>
      <rect x="490" y="460" width="120" height="88" fill="none" stroke={BORDER} strokeWidth="1" strokeDasharray="5 3" />
      <text x="550" y="502" fill={SUBTEXT} fontSize="17" fontWeight="bold" textAnchor="middle">WATCHROOM</text>
      <text x="550" y="522" fill={SUBTEXT} fontSize="17" fontWeight="bold" textAnchor="middle">RECEPTION</text>

      {/* Admin Office */}


      <rect x="630" y="320" width="330" height="240" fill="none" stroke={BORDER} strokeWidth="1.2" />
      <text x="795" y="445" fill={TEXT} fontSize="26" fontWeight="bold" textAnchor="middle">ADMIN OFFICE</text>

      {/* Riser markers (green) — 2 in the driveway beside Petrol Kiosk + 2 in Main Engine Bay */}
      {focusRiser ? (
        <g>
          {/* Nearest riser (driveway, beside Petrol Kiosk) – enlarged highlight */}
          <circle cx="138" cy="48" r="34" fill={GREEN} opacity="0.15" />
          <rect x="122" y="32" width="32" height="32" rx="7" fill={GREEN} />
          <rect x="122" y="32" width="32" height="32" rx="7" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.75" />
          <text x="138" y="54" fontSize="17" fontWeight="800" fill="#fff" textAnchor="middle">R</text>
          <text x="138" y="24" fontSize="11" fontWeight="800" fill={GREEN} textAnchor="middle">NEAREST RISER</text>
          <text x="138" y="88" fontSize="11" fontWeight="600" fill={TEXT} textAnchor="middle" opacity="0.85">8 m from fire origin</text>
          {/* Other risers – compact */}
          <rect x="122" y="230" width="16" height="16" rx="3" fill={GREEN} opacity="0.85" />
          <text x="130" y="241" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">R</text>
          <rect x="200" y="480" width="16" height="16" rx="3" fill={GREEN} opacity="0.85" />
          <text x="208" y="491" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">R</text>
          <rect x="560" y="480" width="16" height="16" rx="3" fill={GREEN} opacity="0.85" />
          <text x="568" y="491" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">R</text>
        </g>
      ) : (
        <g>
          <rect x="130" y="40" width="16" height="16" rx="3" fill={GREEN} />
          <text x="138" y="51" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">R</text>
          <rect x="122" y="230" width="16" height="16" rx="3" fill={GREEN} />
          <text x="130" y="241" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">R</text>
          <rect x="200" y="480" width="16" height="16" rx="3" fill={GREEN} />
          <text x="208" y="491" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">R</text>
          <rect x="560" y="480" width="16" height="16" rx="3" fill={GREEN} />
          <text x="568" y="491" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">R</text>
        </g>
      )}

      {/* Recommended access route (blue dashed, matching the main map route) */}
      <path d="M 52 300 L 200 300 L 200 115" fill="none" stroke={BLUE} strokeWidth="2.5" strokeDasharray="8 6" />

      {/* Drill yard label */}

      <text x="420" y="272" fill={SUBTEXT} fontSize="22" letterSpacing="6" textAnchor="middle" opacity="0.7">OPEN AREA / DRILL YARD</text>

      {/* AMBER hazard badge on the petrol kiosk */}
      <g transform="translate(312, 60)">
        <polygon points="0,0 16,0 16,16 0,16" fill={AMBER} opacity="0.9" />
        <text x="8" y="12" textAnchor="middle" fontSize="11" fontWeight="700" fill="#241900">!</text>
      </g>
    </svg>
  );
}
