import Icon from './Icon';
import { PANEL2, BORDER, TEXT, SUBTEXT } from '../theme';

export function Pill({ children, color }) {
  return (
    <span className="text-[10px] font-bold px-2 py-1 rounded-md" style={{ background: color + '22', color }}>
      {children}
    </span>
  );
}

export function QuickAction({ icon, title, sub, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 min-w-[45%] flex items-center justify-between gap-2 rounded-xl px-3.5 py-3 text-left"
      style={{ background: PANEL2, border: `1px solid ${BORDER}` }}
    >
      <div className="flex items-center gap-2.5">
        <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: color + '22' }}>
          <Icon name={icon} size={15} color={color} />
        </span>
        <div>
          <div className="text-[12.5px] font-semibold" style={{ color: TEXT }}>{title}</div>
          <div className="text-[10.5px]" style={{ color: SUBTEXT }}>{sub}</div>
        </div>
      </div>
      <Icon name="chevronRight" size={14} color={SUBTEXT} />
    </button>
  );
}
