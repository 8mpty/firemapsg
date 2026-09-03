import Icon from '../components/Icon';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import FireStationFloorMap from '../components/FireStationFloorMap';
import { Pill } from '../components/ui';
import { RED, GREEN, PANEL2, BORDER, TEXT, SUBTEXT } from '../theme';

/* ------------------------------------------------------------------ */
/* MOCK DATA – riser / fire main info                                  */
/* ------------------------------------------------------------------ */
const RISER = {
  name: 'Riser 1 – Driveway (Petrol Kiosk)',
  type: 'Dry Riser · 65 mm Landing Valve',
  location: 'Driveway, immediately left of Petrol Kiosk',
  distance: '8 m from fire origin',
  status: 'IN SERVICE',
  flow: '900 L/min',
  pressure: '10 bar',
  outlets: '2 outlets',
};

const RISER_LOCATIONS = [
  { id: 1, label: 'Riser 1', where: 'Driveway – beside Petrol Kiosk', distance: '8 m', nearest: true },
  { id: 2, label: 'Riser 2', where: 'Driveway – lower, near Foam Bay access', distance: '12 m', nearest: false },
  { id: 3, label: 'Riser 3', where: 'Main Engine Bay – back wall', distance: '22 m', nearest: false },
  { id: 4, label: 'Riser 4', where: 'Main Engine Bay – near Foam Bay', distance: '41 m', nearest: false },
];

const RISER_STEPS = [
  'Park the appliance clear of the bay doors and chock the wheels.',
  'Run hose from the landing valve towards the fire origin.',
  'Have the pump operator charge the riser and confirm pressure.',
  'Open the landing valve slowly and advance on the fire.',
];

export default function RiserScreen({ go }) {
  return (
    <div className="flex flex-col h-full lg:min-h-screen">
      <Header title="Nearest Riser" onBack={() => go('floorplan')} right={<Icon name="info" size={18} color={TEXT} />} />
      <div className="flex-1 overflow-y-auto px-4 pb-4 lg:mx-auto lg:w-full lg:max-w-3xl lg:px-8 lg:pt-2">
        {/* Map with the riser enlarged */}
        <div className="relative rounded-xl overflow-hidden mb-3 w-full aspect-[16/9] max-h-72 lg:aspect-video lg:max-h-none" style={{ border: `1px solid ${GREEN}` }}>
          <FireStationFloorMap focusRiser />
        </div>

        {/* Riser status */}
        <div className="rounded-xl px-3.5 py-3 mb-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: GREEN + '22' }}>
                <Icon name="box" size={15} color={GREEN} />
              </span>
              <div>
                <div className="text-[13px] font-bold" style={{ color: TEXT }}>{RISER.name}</div>
                <div className="text-[10.5px]" style={{ color: SUBTEXT }}>{RISER.type}</div>
              </div>
            </div>
            <Pill color={GREEN}>{RISER.status}</Pill>
          </div>
          <div className="text-[11px] flex items-center gap-1.5 mb-2.5" style={{ color: SUBTEXT }}>
            <Icon name="building" size={11} color={SUBTEXT} /> {RISER.location}
          </div>
          <div className="grid grid-cols-4 gap-2 border-t pt-2.5" style={{ borderColor: BORDER }}>
            {[
              { label: 'Distance', value: '8 m' },
              { label: 'Flow', value: RISER.flow },
              { label: 'Pressure', value: RISER.pressure },
              { label: 'Outlets', value: RISER.outlets },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[9.5px]" style={{ color: SUBTEXT }}>{s.label}</div>
                <div className="text-[11.5px] font-bold mt-0.5" style={{ color: TEXT }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* About this riser */}
        <div className="rounded-xl px-3.5 py-3 mb-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
          <div className="flex items-center gap-1.5 mb-2 text-[10px] font-bold tracking-wide" style={{ color: GREEN }}>
            <Icon name="info" size={12} color={GREEN} /> ABOUT THIS RISER
          </div>
          <div className="text-[12px] leading-relaxed" style={{ color: TEXT }}>
            Riser 1 sits in the driveway immediately left of the Petrol Kiosk, making it the closest outlet to the{' '}
            <span style={{ color: RED }}>Petrol Kiosk fire origin</span> — only about 8 m of hose run. It is fed from the fire
            appliance parked on the driveway and, once charged, delivers a steady 900 L/min at 10 bar for attack and exposure
            lines. Two further risers line the back wall of the main engine bay for coverage deeper in the building.
          </div>
        </div>

        {/* All riser locations */}
        <div className="rounded-xl px-3.5 py-3 mb-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
          <div className="text-[10px] font-bold tracking-wide mb-2" style={{ color: SUBTEXT }}>RISER LOCATIONS</div>
          <div className="flex flex-col gap-2">
            {RISER_LOCATIONS.map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between rounded-lg px-3 py-2.5"
                style={{ background: r.nearest ? GREEN + '14' : 'transparent', border: `1px solid ${r.nearest ? GREEN : BORDER}` }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-7 h-7 rounded-[6px] flex items-center justify-center text-[11px] font-bold shrink-0"
                    style={{ background: r.nearest ? GREEN : PANEL2, color: '#fff' }}
                  >
                    R
                  </span>
                  <div>
                    <div className="text-[12px] font-bold flex items-center gap-1.5" style={{ color: TEXT }}>
                      {r.label}
                      {r.nearest && <span className="text-[9px] font-bold px-1.5 py-px rounded" style={{ background: GREEN, color: '#fff' }}>NEAREST</span>}
                    </div>
                    <div className="text-[10.5px]" style={{ color: SUBTEXT }}>{r.where}</div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold shrink-0" style={{ color: r.nearest ? GREEN : SUBTEXT }}>{r.distance}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How to use */}
        <div className="rounded-xl px-3.5 py-3 mb-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
          <div className="text-[10px] font-bold tracking-wide mb-2" style={{ color: SUBTEXT }}>HOW TO CONNECT</div>
          <div className="flex flex-col gap-2">
            {RISER_STEPS.map((step, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0" style={{ background: GREEN + '22', color: GREEN }}>
                  {i + 1}
                </span>
                <span className="text-[11.5px] leading-snug pt-px" style={{ color: TEXT }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav screen="dashboard" go={go} />
    </div>
  );
}
