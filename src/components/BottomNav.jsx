import Icon from './Icon';
import { RED, SUBTEXT, PANEL, BORDER } from '../theme';

const ITEMS = [
  { id: 'dashboard', label: 'Home', icon: 'flame' },
  { id: 'buildings', label: 'Buildings', icon: 'building' },
  { id: 'hazards', label: 'Hazards', icon: 'shieldAlert' },
  { id: 'team', label: 'Team', icon: 'users' },
];

export default function BottomNav({ screen, go }) {
  return (
    <div className="flex items-stretch justify-around border-t px-2 pt-2 pb-5 lg:mx-auto lg:w-full lg:max-w-5xl lg:px-6 lg:pb-3 lg:rounded-t-2xl" style={{ background: PANEL, borderColor: BORDER }}>
      {ITEMS.map((it) => {
        const activeItem =
          screen === it.id || (it.id === 'dashboard' && (screen === 'floorplan' || screen === 'navigation'));
        return (
          <button
            key={it.id}
            onClick={() => go(it.id)}
            className="flex flex-col items-center gap-1 px-3 py-1 rounded-lg"
          >
            <Icon name={it.icon} size={19} color={activeItem ? RED : SUBTEXT} strokeWidth={activeItem ? 2.4 : 2} />
            <span className="text-[10px] font-medium" style={{ color: activeItem ? RED : SUBTEXT }}>
              {it.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
