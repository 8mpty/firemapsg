/* ---------------------------------------------------------------------- */
/* ICON SET — hand-built inline SVGs, zero external icon dependency        */
/* ---------------------------------------------------------------------- */
export default function Icon({ name, size = 18, color = 'currentColor', strokeWidth = 2 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  switch (name) {
    case 'flame':
      return (
        <svg {...common} fill={color} stroke="none">
          <path d="M12 2c1.2 3-1.6 4.4-1.6 7.2A3.6 3.6 0 0 0 14 12.8c0-1.6-.8-2.4-1.2-3.2 1.6 1.2 3.2 3.6 3.2 6a6 6 0 1 1-12 0c0-2.4 1.2-4 2.4-5.2C7.6 8 8.4 6 8.4 4.4 9.6 5.2 10 6.4 10 7.6 11.2 6 12 4 12 2z" />
        </svg>
      );
    case 'bell':
      return (
        <svg {...common}>
          <path d="M6 8a6 6 0 0 1 12 0c0 4.5 1.5 6 2 6.5H4C4.5 14 6 12.5 6 8Z" />
          <path d="M10 21a2 2 0 0 0 4 0" />
        </svg>
      );
    case 'chevronLeft':
      return (
        <svg {...common}>
          <polyline points="15 6 9 12 15 18" />
        </svg>
      );
    case 'chevronRight':
      return (
        <svg {...common}>
          <polyline points="9 6 15 12 9 18" />
        </svg>
      );
    case 'settings':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="8" strokeDasharray="2 3" />
        </svg>
      );
    case 'plus':
      return (
        <svg {...common}>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case 'minus':
      return (
        <svg {...common}>
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case 'box':
      return (
        <svg {...common}>
          <path d="M12 3 4 7v10l8 4 8-4V7Z" />
          <path d="M4 7l8 4 8-4" />
          <line x1="12" y1="11" x2="12" y2="21" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...common}>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      );
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      );
    case 'filter':
      return (
        <svg {...common}>
          <path d="M4 5h16l-6 7v6l-4 2v-8Z" />
        </svg>
      );
    case 'star':
      return (
        <svg {...common} fill={color} stroke="none">
          <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.6 6.8L12 16.9 5.8 20.4l1.6-6.8L2.2 9l6.9-.7Z" />
        </svg>
      );
    case 'users':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="17.5" cy="9" r="2.6" />
          <path d="M15.5 14.2c2.6.4 4.5 2.6 4.5 5.3" />
        </svg>
      );
    case 'refresh':
      return (
        <svg {...common}>
          <path d="M20 11A8 8 0 0 0 6 6.3L4 8" />
          <path d="M4 4v4h4" />
          <path d="M4 13a8 8 0 0 0 14 4.7l2-2" />
          <path d="M20 20v-4h-4" />
        </svg>
      );
    case 'fingerprint':
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 0 0-9 9c0 2 .5 3.5 1 4.5" />
          <path d="M12 3a9 9 0 0 1 9 9c0 1.5-.2 2.7-.5 3.7" />
          <path d="M8 20c-1.2-1.5-2-3.6-2-6a6 6 0 0 1 12 0c0 .8-.1 1.6-.3 2.3" />
          <path d="M12 22c-1-1-2-3-2-6a2 2 0 0 1 4 0c0 1.2.3 2.2.8 3" />
        </svg>
      );
    case 'eye':
      return (
        <svg {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'eyeOff':
      return (
        <svg {...common}>
          <path d="M3 3l18 18" />
          <path d="M10.6 5.2A10.6 10.6 0 0 1 12 5c6.5 0 10 7 10 7a15.5 15.5 0 0 1-4 4.6M6.6 6.6C4 8.3 2 12 2 12s3.5 7 10 7c1.4 0 2.6-.3 3.7-.8" />
          <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
        </svg>
      );
    case 'zap':
      return (
        <svg {...common} fill={color} stroke="none">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case 'batteryCharging':
      return (
        <svg {...common}>
          <rect x="2" y="7" width="16" height="10" rx="2" />
          <line x1="22" y1="10" x2="22" y2="14" />
          <path d="M11 9l-2.5 4H11l-2 4 4.5-5H11l1.5-3Z" fill={color} stroke="none" />
        </svg>
      );
    case 'shieldAlert':
      return (
        <svg {...common}>
          <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5Z" />
          <line x1="12" y1="8" x2="12" y2="13" />
          <circle cx="12" cy="16.3" r="0.3" fill={color} stroke="none" />
        </svg>
      );
    case 'arrowUp':
      return (
        <svg {...common}>
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="6 11 12 5 18 11" />
        </svg>
      );
    case 'cornerUpLeft':
      return (
        <svg {...common}>
          <polyline points="9 14 4 9 9 4" />
          <path d="M4 9h11a4 4 0 0 1 4 4v6" />
        </svg>
      );
    case 'logOut':
      return (
        <svg {...common}>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      );
    case 'building':
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <line x1="8" y1="7" x2="8" y2="7.01" />
          <line x1="12" y1="7" x2="12" y2="7.01" />
          <line x1="16" y1="7" x2="16" y2="7.01" />
          <line x1="8" y1="11" x2="8" y2="11.01" />
          <line x1="12" y1="11" x2="12" y2="11.01" />
          <line x1="16" y1="11" x2="16" y2="11.01" />
          <line x1="9" y1="21" x2="9" y2="17" />
          <line x1="15" y1="21" x2="15" y2="17" />
        </svg>
      );
    case 'route':
      return (
        <svg {...common}>
          <circle cx="6" cy="19" r="2" />
          <circle cx="18" cy="5" r="2" />
          <path d="M8 19h7a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3H9a3 3 0 0 1-3-3V6a3 3 0 0 1 1-2.2" />
        </svg>
      );
    case 'info':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="11" x2="12" y2="16" />
          <circle cx="12" cy="8" r="0.4" fill={color} stroke="none" />
        </svg>
      );
    case 'wifi':
      return (
        <svg {...common}>
          <path d="M2 8.5a16 16 0 0 1 20 0" />
          <path d="M5 12a11 11 0 0 1 14 0" />
          <path d="M8.5 15.5a6 6 0 0 1 7 0" />
          <circle cx="12" cy="19" r="0.6" fill={color} stroke="none" />
        </svg>
      );
    case 'signal':
      return (
        <svg {...common} fill={color} stroke="none">
          <rect x="2" y="14" width="3" height="7" rx="0.5" />
          <rect x="7.5" y="10" width="3" height="11" rx="0.5" />
          <rect x="13" y="6" width="3" height="15" rx="0.5" />
          <rect x="18.5" y="2" width="3" height="19" rx="0.5" />
        </svg>
      );
    case 'batteryFull':
      return (
        <svg {...common}>
          <rect x="2" y="7" width="18" height="10" rx="2" />
          <line x1="22" y1="10" x2="22" y2="14" />
          <rect x="4" y="9" width="14" height="6" rx="1" fill={color} stroke="none" />
        </svg>
      );
    case 'radio':
      return (
        <svg {...common}>
          <circle cx="12" cy="16" r="2.5" />
          <path d="M8 12a5.5 5.5 0 0 1 8 0" />
          <path d="M5.5 9.5a9 9 0 0 1 13 0" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
