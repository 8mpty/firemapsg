import { useState } from 'react';
import Icon from '../components/Icon';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import FireStationFloorMap from '../components/FireStationFloorMap';
import { Pill } from '../components/ui';
import { RED, BLUE, GREEN, AMBER, PANEL2, BORDER, TEXT, SUBTEXT } from '../theme';

/* ------------------------------------------------------------------ */
/* MOCK DATA – fire call at Tuas Fire Station, Ground Floor           */
/* ------------------------------------------------------------------ */
const INCIDENT = {
  title: 'Fire – Petrol Kiosk',
  location: 'Tuas Fire Station · Ground Floor',
  reported: '22:07',
  phase: 'Fire Attack In Progress',
  hazard: 'Flammable fuel · HIGH RISK',
  units: 3,
};

const TEAMS = [
  {
    id: 'ALPHA',
    name: 'Section 1',
    role: 'Fire Attack',
    status: 'Advancing on Petrol Kiosk',
    color: RED,
    location: 'Petrol Kiosk',
    markerStyle: { left: '22%', top: '25%' },
  },
  {
    id: 'BRAVO',
    name: 'Section 2',
    role: 'Foam & Water Supply',
    status: 'Supplying from Foam Bay',
    color: BLUE,
    location: 'Foam Bay',
    markerStyle: { left: '60%', top: '25%' },
  },
  {
    id: 'CHARLIE',
    name: 'Section 3',
    role: 'Search & Standby',
    status: 'Standing by — Admin Office',
    color: GREEN,
    location: 'Admin / Main Bay',
    riser: true,
    markerStyle: { left: '57%', top: '58%' },
  },
];

const TABS = ['ALL TEAMS', ...TEAMS.map((t) => t.id)];

const TEAM_BRIEFS = {
  ALPHA: {
    oic: 'LTA M. Tan',
    crew: ['LTA M. Tan', 'LTA N. Lim', 'SC K. Raj', 'SC D. Wong'],
    radio: 'Ops Ch 1',
    checkIn: '22:09',
    eta: 'On scene',
    objective:
      'Advance the primary attack line to the Petrol Kiosk and knock down the fire at origin before it spreads to the fuel pumps.',
    updates: [
      { time: '22:09', text: 'First attack line deployed at front bay' },
      { time: '22:11', text: 'Knockdown in progress – fuel pumps being cooled' },
    ],
  },
  BRAVO: {
    oic: 'LTA S. Kumar',
    crew: ['LTA S. Kumar', 'LTA R. Ali', 'SC P. Chen', 'SC F. Hadi'],
    radio: 'Ops Ch 2',
    checkIn: '22:08',
    eta: 'On scene',
    objective:
      'Establish foam and hydrant supply from Foam Bay to back up Section 1 and protect the flammable storage area from exposure.',
    updates: [
      { time: '22:08', text: 'Foam tender connected to hydrant' },
      { time: '22:10', text: 'Foam line charged and ready at Back Engine Bay' },
    ],
  },
  CHARLIE: {
    oic: 'LTA J. Ong',
    crew: ['LTA J. Ong', 'MAJ L. Ho', 'SC V. Menon', 'SC A. Lee'],
    radio: 'Ops Ch 3',
    checkIn: '22:07',
    eta: 'Standby / RIT',
    objective:
      'Stage at the Admin Office, conduct a secondary search of the back bay and act as the rapid intervention crew (RIT) in reserve.',
    updates: [
      { time: '22:07', text: 'Staged at Admin Office – RIT ready' },
      { time: '22:10', text: 'Secondary search of back bay in progress' },
    ],
  },
};

function OverviewCard() {
  return (
    <div className="rounded-xl overflow-hidden mb-3" style={{ border: `1px solid ${RED}` }}>
      <div className="flex items-center justify-between px-3.5 py-2" style={{ background: RED }}>
        <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
          <Icon name="flame" size={13} color="#fff" /> ACTIVE INCIDENT
        </span>
        <span className="text-[11px] text-white/90 font-semibold">{INCIDENT.reported}</span>
      </div>
      <div className="px-3.5 py-3" style={{ background: PANEL2 }}>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[13.5px] font-bold" style={{ color: TEXT }}>{INCIDENT.title}</span>
          <Pill color={RED}>{INCIDENT.phase}</Pill>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10.5px]" style={{ color: SUBTEXT }}>
          <span className="flex items-center gap-1"><Icon name="building" size={11} color={SUBTEXT} /> {INCIDENT.location}</span>
          <span className="flex items-center gap-1"><Icon name="shieldAlert" size={11} color={AMBER} /> {INCIDENT.hazard}</span>
          <span className="flex items-center gap-1"><Icon name="users" size={11} color={SUBTEXT} /> {INCIDENT.units} units</span>
        </div>
      </div>
    </div>
  );
}

function TeamBrief({ team }) {
  if (!team) return null;
  const b = TEAM_BRIEFS[team.id];
  const color = team.color;
  const rows = [
    { label: 'Officer in Charge', value: b.oic },
    { label: 'Radio Channel', value: b.radio },
    { label: 'Last Check-in', value: b.checkIn },
    { label: 'Status', value: b.eta },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2 rounded-xl px-3.5 py-3" style={{ background: color + '1a', border: `1px solid ${color}` }}>
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: color }}>
            <Icon name="users" size={15} color="#fff" />
          </span>
          <div>
            <div className="text-[13px] font-bold" style={{ color: TEXT }}>{team.name}</div>
            <div className="text-[10.5px]" style={{ color: SUBTEXT }}>{team.status}</div>
          </div>
        </div>
        <Pill color={color}>{team.role}</Pill>
      </div>

      <div className="rounded-xl px-3.5 py-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
        <div className="text-[10px] font-bold tracking-wide mb-2" style={{ color: SUBTEXT }}>ASSIGNMENT</div>
        <div className="text-[12px] leading-relaxed" style={{ color: TEXT }}>{b.objective}</div>
      </div>

      <div className="rounded-xl px-3.5 py-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
        <div className="text-[10px] font-bold tracking-wide mb-2" style={{ color: SUBTEXT }}>CREW & COMMS</div>
        <div className="flex flex-col gap-1.5">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between gap-3">
              <span className="text-[11px]" style={{ color: SUBTEXT }}>{r.label}</span>
              <span className="text-[11.5px] font-semibold text-right" style={{ color: TEXT }}>{r.value}</span>
            </div>
          ))}
        </div>
        <div className="border-t mt-2 pt-2 text-[11px]" style={{ borderColor: BORDER }}>
          <span className="text-[10px] font-bold tracking-wide" style={{ color: SUBTEXT }}>CREW MEMBERS&nbsp;&nbsp;</span>
          <span style={{ color: TEXT }}>{b.crew.join(' · ')}</span>
        </div>
      </div>

      <div className="rounded-xl px-3.5 py-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
        <div className="text-[10px] font-bold tracking-wide mb-2" style={{ color: SUBTEXT }}>LATEST UPDATES</div>
        <div className="flex flex-col gap-2">
          {b.updates.map((u) => (
            <div key={u.time + u.text} className="flex items-start gap-2">
              <span className="text-[10px] font-bold mt-px shrink-0" style={{ color }}>{u.time}</span>
              <span className="text-[11px]" style={{ color: TEXT }}>{u.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TeamScreen({ go }) {
  const [tab, setTab] = useState('ALL TEAMS');
  const selected = TEAMS.find((t) => t.id === tab) || null;
  const visible = tab === 'ALL TEAMS' ? TEAMS : selected ? [selected] : TEAMS;

  return (
    <div className="flex flex-col h-full lg:min-h-screen">
      {/* <Header title="Team Tracking" right={<Icon name="refresh" size={17} color={TEXT} />} /> */}
      <Header title="Team Tracking" />
      <div className="px-4 flex gap-4 mb-3 text-[12px] font-semibold lg:mx-auto lg:w-full lg:max-w-3xl lg:px-8" style={{ borderBottom: `1px solid ${BORDER}` }}>
        {TABS.map((t) => {
          const team = TEAMS.find((x) => x.id === t);
          const label = team ? team.name.toUpperCase() : t;
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="pb-2"
              style={{
                color: tab === t ? RED : SUBTEXT,
                borderBottom: tab === t ? `2px solid ${RED}` : '2px solid transparent',
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4 lg:mx-auto lg:w-full lg:max-w-3xl lg:px-8">
        <OverviewCard />

        <div className="relative rounded-xl overflow-hidden mb-3 w-full aspect-[16/9] max-h-64 lg:aspect-video lg:max-h-none" style={{ border: `1px solid ${BORDER}` }}>
          <FireStationFloorMap />
          {visible.map((t) => (
            <div
              key={t.id}
              className="absolute rounded-md px-2 py-1 text-[10px] font-bold text-white flex items-start gap-1"
              style={{ background: t.color, ...t.markerStyle }}
            >
              {t.riser && (
                <span className="w-3 h-3 rounded-[3px] flex items-center justify-center text-[7px] mt-px shrink-0" style={{ background: 'rgba(255,255,255,0.25)' }}>
                  R
                </span>
              )}
              <span>
                {t.name}
                <span className="block font-normal opacity-80">{t.location}</span>
              </span>
            </div>
          ))}
        </div>

        {tab === 'ALL TEAMS' ? (
          <div className="flex flex-col gap-2">
            {visible.map((t) => (
              <div key={t.id} className="flex items-center justify-between rounded-xl px-3.5 py-2.5" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: t.color }} />
                  <div>
                    <div className="text-[12.5px] font-bold" style={{ color: TEXT }}>{t.name}</div>
                    <div className="text-[10.5px]" style={{ color: SUBTEXT }}>{t.status}</div>
                  </div>
                </div>
                <Icon name="radio" size={14} color={SUBTEXT} />
              </div>
            ))}
          </div>
        ) : (
          <TeamBrief team={selected} />
        )}
      </div>
      <BottomNav screen="team" go={go} />
    </div>
  );
}
