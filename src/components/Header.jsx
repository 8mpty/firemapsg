import Icon from './Icon';
import { TEXT } from '../theme';

export default function Header({ title, onBack, right }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3">
        {onBack ? (
          <button onClick={onBack} className="text-white/90">
            {/* <Icon name="chevronLeft" size={22} color={TEXT} /> */}
          </button>
        ) : (
          <Icon name="menu" size={20} color={TEXT} />
        )}
        <span className="text-[17px] font-semibold" style={{ color: TEXT }}>{title}</span>
      </div>
      {right}
    </div>
  );
}
