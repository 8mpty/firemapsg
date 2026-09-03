import { useState } from 'react';
import Icon from '../components/Icon';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { Pill } from '../components/ui';
import { HAZARDS } from '../data';
import { RED, AMBER, GREEN, PANEL2, BORDER, TEXT, SUBTEXT } from '../theme';

const RISK_COLOR = {
  'HIGH RISK': RED,
  'MEDIUM RISK': AMBER,
  'LOW RISK': GREEN,
};

const TYPE_COLOR = { RED, AMBER, GREEN };

/* Mock on-site guidance per hazard zone */
const HAZARD_DETAILS = {
  1: {
    lookout: [
      'Escaping fuel vapours / strong fuel odour',
      'Flames or heat coming from fuel pumps and dispensers',
      'Leaking or damaged fuel lines beneath the dispensers',
      'Smouldering debris near drains or roof vents',
    ],
    risks: [
      'Running pumps can re-ignite – isolate kiosk power early',
      'Fuel in underground tanks may flash over if heated',
      'Parked apparatus can trap crews – keep clear escape routes',
      'Static discharge / ignition sources across the forecourt',
    ],
  },
  2: {
    lookout: [
      'Leaking or bulging AFFF concentrate drums',
      'Slippery foam spillage on the bay floor',
      'Unstable drums / racks near the wash bay entrance',
      'Heat or radiant exposure from the adjacent engine bay',
    ],
    risks: [
      'Concentrated foam solution can irritate skin and eyes – wear gloves',
      'Runoff entering drains may contaminate the site',
      'Damaged containers can pressurise and burst under heat',
      'Restricted ventilation at the rear of the bay',
    ],
  },
  3: {
    lookout: [
      'Hot exhaust surfaces and engine casing',
      'Diesel fuel / oil leaks on the generator floor',
      'Energised electrical panels and cabling',
      'Loud running machinery – muffled hearing / voice comms',
    ],
    risks: [
      'Electrical shock from live panels – isolate before entry',
      'Fuel oil spill can ignite near hot surfaces',
      'Poor ventilation may cause fume build-up',
      'Confined space – do not enter alone',
    ],
  },
};

export default function HazardsScreen({ go }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="flex flex-col h-full lg:min-h-screen">
      <Header title="Hazard Zones – Ground Floor" />
      <div className="flex-1 overflow-y-auto px-4 pb-4 pt-1 flex flex-col gap-2.5 lg:mx-auto lg:w-full lg:max-w-3xl lg:px-8">
        {HAZARDS.map((h) => {
          const color = TYPE_COLOR[h.color] || SUBTEXT;
          const d = HAZARD_DETAILS[h.id];
          const open = openId === h.id;
          return (
            <div key={h.id} className="rounded-xl overflow-hidden" style={{ background: PANEL2, border: `1px solid ${open ? color : BORDER}` }}>
              <button
                onClick={() => setOpenId(open ? null : h.id)}
                className="w-full flex items-center justify-between gap-3 px-3.5 py-3 text-left"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: color + '22' }}>
                    <Icon name={h.icon} size={16} color={color} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[13px] font-bold" style={{ color: TEXT }}>{h.name}</div>
                    <div className="text-[11px] truncate" style={{ color: SUBTEXT }}>{h.desc}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <Pill color={RISK_COLOR[h.risk] || SUBTEXT}>{h.risk}</Pill>
                  <span className="flex items-center gap-0.5 text-[10px]" style={{ color: SUBTEXT }}>
                    {h.loc}
                    <span
                      className="inline-flex transition-transform duration-200"
                      style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    >
                      <Icon name="chevronRight" size={11} color={SUBTEXT} />
                    </span>
                  </span>
                </div>
              </button>

              {open && d && (
                <div className="border-t px-3.5 py-3 flex flex-col gap-3" style={{ borderColor: BORDER, background: '#10141D' }}>
                  <div>
                    <div className="flex items-center gap-1.5 mb-2 text-[10px] font-bold tracking-wide" style={{ color }}>
                      <Icon name="eye" size={12} color={color} /> WHAT TO LOOK OUT FOR
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {d.lookout.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11.5px] leading-snug" style={{ color: TEXT }}>
                          <span className="mt-[5px] w-1 h-1 rounded-full shrink-0" style={{ background: color }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-2 text-[10px] font-bold tracking-wide" style={{ color: AMBER }}>
                      <Icon name="shieldAlert" size={12} color={AMBER} /> RISKS IN / AROUND AREA
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {d.risks.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11.5px] leading-snug" style={{ color: TEXT }}>
                          <span className="mt-[5px] w-1 h-1 rounded-full shrink-0" style={{ background: AMBER }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <BottomNav screen="hazards" go={go} />
    </div>
  );
}
