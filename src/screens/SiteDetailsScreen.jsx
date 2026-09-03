import Icon from '../components/Icon';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { Pill } from '../components/ui';
import { HAZARDS } from '../data';
import { RED, GREEN, BLUE, AMBER, PANEL2, BORDER, TEXT, SUBTEXT } from '../theme';

const COLOR = { RED, AMBER, GREEN, BLUE };

const SITE = {
  name: 'Tuas Fire Station',
  code: 'FS-42 · Tuas',
  type: 'SCDF Fire Station (Facility)',
  address: '7 Tuas Road, Singapore 638483',
  facts: [
    { label: 'Levels', value: '5' },
    { label: 'Site Area', value: '8,400 m²' },
    { label: 'Units On-Scene', value: '3' },
    { label: 'Crews Deployed', value: '3' },
  ],
};

const SYSTEMS = [
  { icon: 'box', label: 'Riser Network', value: '4 dry risers · 65 mm valves', status: 'IN SERVICE', color: GREEN },
  { icon: 'zap', label: 'Electrical Backup', value: 'Diesel generator · 400 kVA', status: 'STANDBY', color: BLUE },
  { icon: 'batteryCharging', label: 'Foam System', value: 'AFFF station · 5% premix', status: 'READY', color: GREEN },
  { icon: 'radio', label: 'Ops Comms', value: 'Watchroom link · 24 hrs', status: 'ONLINE', color: GREEN },
];

const CONTACTS = [
  { label: 'Officer in Charge', value: 'DSC Lu De Q.', icon: 'users' },
  { label: 'Watchroom', value: '+65 6865 4180', icon: 'signal' },
  { label: 'Ops Channels', value: 'Ops Ch 1 / 2 / 3', icon: 'radio' },
];

export default function SiteDetailsScreen({ go }) {
  return (
    <div className="flex flex-col h-full lg:min-h-screen">
      <Header title="Site Details" onBack={() => go('firestation')} />
      <div className="flex-1 overflow-y-auto px-4 pb-4 lg:mx-auto lg:w-full lg:max-w-3xl lg:px-8 lg:pt-2">
        {/* Summary */}
        <div className="rounded-xl px-3.5 py-3.5 mb-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <div className="text-[15px] font-bold" style={{ color: TEXT }}>{SITE.name}</div>
              <div className="text-[10.5px] mt-0.5" style={{ color: SUBTEXT }}>{SITE.type}</div>
            </div>
            <Pill color={BLUE}>{SITE.code}</Pill>
          </div>
          <div className="text-[11px] flex items-center gap-1.5 mb-3" style={{ color: SUBTEXT }}>
            <Icon name="building" size={11} color={SUBTEXT} /> {SITE.address}
          </div>
          <div className="grid grid-cols-4 gap-2 border-t pt-2.5" style={{ borderColor: BORDER }}>
            {SITE.facts.map((f) => (
              <div key={f.label}>
                <div className="text-[9.5px]" style={{ color: SUBTEXT }}>{f.label}</div>
                <div className="text-[12px] font-bold mt-0.5" style={{ color: TEXT }}>{f.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Site systems */}
        <div className="rounded-xl px-3.5 py-3 mb-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
          <div className="flex items-center gap-1.5 mb-1 text-[10px] font-bold tracking-wide" style={{ color: BLUE }}>
            <Icon name="box" size={12} color={BLUE} /> SITE SYSTEMS
          </div>
          <div className="flex flex-col">
            {SYSTEMS.map((s, i) => (
              <div
                key={s.label}
                className="flex items-center justify-between gap-2 py-2.5"
                style={{ borderBottom: i < SYSTEMS.length - 1 ? `1px solid ${BORDER}` : 'none' }}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-7 h-7 rounded-md flex items-center justify-center shrink-0" style={{ background: s.color + '22' }}>
                    <Icon name={s.icon} size={13} color={s.color} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[12px] font-semibold" style={{ color: TEXT }}>{s.label}</div>
                    <div className="text-[10px] truncate" style={{ color: SUBTEXT }}>{s.value}</div>
                  </div>
                </div>
                <Pill color={s.color}>{s.status}</Pill>
              </div>
            ))}
            <div className="pt-2 text-[10.5px] leading-relaxed" style={{ color: SUBTEXT }}>
              All life-safety systems are operational. During the current incident at the Petrol Kiosk, risers, hydrants and
              the foam system are supporting attack and exposure lines.
            </div>
          </div>
        </div>

        {/* Hazard areas */}
        <div className="rounded-xl px-3.5 py-3 mb-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
          <div className="flex items-center gap-1.5 mb-2 text-[10px] font-bold tracking-wide" style={{ color: AMBER }}>
            <Icon name="shieldAlert" size={12} color={AMBER} /> HAZARD AREAS ON SITE
          </div>
          <div className="flex flex-col gap-2">
            {HAZARDS.map((h) => (
              <div
                key={h.id}
                className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5"
                style={{ background: COLOR[h.color] + '14', border: `1px solid ${COLOR[h.color]}` }}
              >
                <div className="min-w-0">
                  <div className="text-[12px] font-semibold" style={{ color: TEXT }}>{h.name}</div>
                  <div className="text-[10px]" style={{ color: SUBTEXT }}>{h.desc} · {h.loc}</div>
                </div>
                <Pill color={COLOR[h.color]}>{h.risk}</Pill>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & comms */}
        <div className="rounded-xl px-3.5 py-3 mb-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
          <div className="flex items-center gap-1.5 mb-1 text-[10px] font-bold tracking-wide" style={{ color: GREEN }}>
            <Icon name="users" size={12} color={GREEN} /> CONTACT & COMMS
          </div>
          <div className="flex flex-col">
            {CONTACTS.map((c, i) => (
              <div
                key={c.label}
                className="flex items-center justify-between gap-3 py-2.5"
                style={{ borderBottom: i < CONTACTS.length - 1 ? `1px solid ${BORDER}` : 'none' }}
              >
                <span className="flex items-center gap-2 text-[11px]" style={{ color: SUBTEXT }}>
                  <Icon name={c.icon} size={13} color={SUBTEXT} /> {c.label}
                </span>
                <span className="text-[11.5px] font-semibold text-right" style={{ color: TEXT }}>{c.value}</span>
              </div>
            ))}
            <div className="pt-2.5 flex items-center gap-1.5 text-[10.5px]" style={{ color: SUBTEXT }}>
              <Icon name="wifi" size={12} color={SUBTEXT} /> Site data synced to HQ · last update 22:07
            </div>
          </div>
        </div>
      </div>
      <BottomNav screen="dashboard" go={go} />
    </div>
  );
}
