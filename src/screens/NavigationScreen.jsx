import { useState } from 'react';
import Icon from '../components/Icon';
import Header from '../components/Header';
import { STEPS } from '../data';
import { RED, RED_DIM, GREEN, PANEL2, BORDER, TEXT, SUBTEXT } from '../theme';

const ETA_START = 45;

export default function NavigationScreen({ go }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [eta, setEta] = useState(ETA_START);
  const [done, setDone] = useState(false);

  // Count the ETA down each second until it reaches zero (setup once on mount)
  const [intervalId, setIntervalId] = useState(null);
  if (intervalId === null && !done && typeof window !== 'undefined') {
    const id = window.setInterval(() => {
      setEta((prev) => {
        if (prev <= 1) {
          window.clearInterval(id);
          setDone(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setIntervalId(id);
  }

  const advance = () => {
    const next = currentIndex + 1;
    setCurrentIndex(next);
    if (next >= STEPS.length - 1) {
      setDone(true);
      setEta(0);
    }
  };

  const finished = done || currentIndex >= STEPS.length - 1;
  const pad = (n) => String(n).padStart(2, '0');
  const progress = Math.min(100, ((currentIndex + 1) / STEPS.length) * 100);
  const currentDistance = Math.max(0, 32 - currentIndex * 6);

  return (
    <div className="flex flex-col h-full lg:min-h-screen">
      <Header title="Navigation Mode" onBack={() => go('floorplan')} right={<Icon name="settings" size={18} color={TEXT} />} />

      <div className="flex-1 overflow-y-auto px-4 pb-4 lg:mx-auto lg:w-full lg:max-w-2xl lg:px-8 lg:pt-4">
        <div className="rounded-xl px-3.5 py-3 mb-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
          <div className="flex items-center gap-2 mb-1">
            <Icon name="flame" size={13} color={RED} />
            <span className="text-[10px]" style={{ color: SUBTEXT }}>Destination</span>
          </div>

          <div className="text-[14px] font-bold mb-2.5" style={{ color: TEXT }}>Fire Location – Petrol Kiosk</div>          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <div>
                <div className="text-[10px]" style={{ color: SUBTEXT }}>ETA</div>
                <div className="text-[13px] font-bold" style={{ color: finished ? GREEN : TEXT }}>
                  {finished ? 'Arrived ✓' : `00:${pad(eta)}`}
                </div>
              </div>
              <div>
                <div className="text-[10px]" style={{ color: SUBTEXT }}>Distance</div>
                <div className="text-[13px] font-bold" style={{ color: TEXT }}>{currentDistance} m</div>
              </div>
            </div>
            {/* <Icon name="chevronRight" size={14} color={SUBTEXT} /> */}
          </div>
          <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: '#10141D' }}>
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%`, background: finished ? GREEN : RED }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          {STEPS.map((s, i) => {
            const isActive = i === currentIndex && !finished;
            const isPast = i < currentIndex;
            const isFinal = s.final;
            return (
              <button
                key={s.id}
                onClick={() => {
                  if (i === currentIndex && !finished) advance();
                  else if (i > currentIndex) {
                    setCurrentIndex(i);
                    if (i >= STEPS.length - 1) {
                      setDone(true);
                      setEta(0);
                    }
                  }
                }}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left"
                style={{
                  background: isActive ? RED : PANEL2,
                  border: isActive ? 'none' : `1px solid ${BORDER}`,
                  opacity: isPast ? 0.55 : 1,
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-bold shrink-0"
                    style={{
                      background: isPast || (finished && isFinal) ? GREEN : isActive ? 'rgba(255,255,255,0.2)' : isFinal ? RED_DIM : GREEN,
                      color: '#fff',
                    }}
                  >
                    {isPast && !isFinal ? (
                      <Icon name="zap" size={13} color="#fff" />
                    ) : isFinal && finished ? (
                      <Icon name="star" size={13} color="#fff" />
                    ) : s.icon === 'R' ? (
                      'R'
                    ) : (
                      <Icon name={s.icon} size={14} color="#fff" />
                    )}
                  </span>
                  <div>
                    <div className="text-[13px] font-semibold" style={{ color: isActive || isPast || finished ? '#fff' : TEXT }}>
                      {s.label}
                    </div>
                    {s.final && <div className="text-[11px] text-white/70">{finished ? 'Arrived – Fire Location' : s.meta}</div>}
                    {isPast && !isFinal && <div className="text-[10px]" style={{ color: SUBTEXT }}>Done ✓</div>}
                  </div>
                </div>
                {!s.final && (
                  <span className="text-[12px] font-semibold" style={{ color: isPast && !finished ? SUBTEXT : isActive ? '#fff' : SUBTEXT }}>
                    {isPast && !finished ? '✓' : s.meta}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {finished ? (
          <div className="rounded-xl px-3.5 py-3 mb-3 flex items-center gap-2" style={{ background: 'rgba(31,174,92,0.15)', border: '1px solid #1FAE5C' }}>
            <Icon name="building" size={15} color="#1FAE5C" />
            <span className="text-[12px] font-bold" style={{ color: '#1FAE5C' }}>
              You've reached the fire location. Riser is on your right.
            </span>
          </div>
        ) : (
          <button onClick={advance} className="w-full py-3.5 rounded-xl font-bold text-[14px]" style={{ background: RED, color: '#fff' }}>
            NEXT STEP
          </button>
        )}
        <button
          onClick={() => go('dashboard')}
          className="w-full mt-2 py-3 rounded-xl font-semibold text-[13px]"
          style={{ background: PANEL2, border: `1px solid ${BORDER}`, color: SUBTEXT }}
        >
          END NAVIGATION
        </button>
      </div>
    </div>
  );
}
