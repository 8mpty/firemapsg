import React, { useState } from 'react';

const FireStationFloorPlan = () => {
  const [activeZone, setActiveZone] = useState(null);

  // Zone details for hover / click interactions
  const zones = [
    { id: 'yellow', name: 'Main Engine Bay & Watchroom', color: '#FACC15', text: '#000' },
    { id: 'purple', name: 'Admin Office', color: '#C084FC', text: '#000' },
    { id: 'green', name: 'Hose Tower / Washing Bay', color: '#4ADE80', text: '#000' },
    { id: 'red', name: 'Petrol Kiosk', color: '#F87171', text: '#000' },
    { id: 'blue', name: 'Back Engine Bay', color: '#60A5FA', text: '#000' },
    { id: 'black', name: 'Foam Bay', color: '#374151', text: '#FFF' },
    { id: 'white', name: 'Driveway / Walkway', color: '#E5E7EB', text: '#000' },
  ];

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>Tuas Fire Station - Ground Floor Plan</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '16px' }}>
        {activeZone ? `Selected: ${activeZone}` : 'Hover over a zone to inspect'}
      </p>

      {/* Floor Plan SVG Container */}
      <div style={{ border: '2px solid #333', borderRadius: '8px', overflow: 'hidden', background: '#F9FAFB' }}>
        <svg viewBox="0 0 1000 600" width="100%" height="100%">
          {/* Background Grid / Yard Area */}
          <rect x="0" y="0" width="1000" height="600" fill="#F3F4F6" />

          {/* 1. Driveway / Walkway (White Area) */}
          <rect
            x="40" y="40" width="100" height="520"
            fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="6 4"
            onMouseEnter={() => setActiveZone('Driveway / Walkway')}
            onMouseLeave={() => setActiveZone(null)}
          />
          <text x="90" y="300" fill="#4B5563" fontSize="14" fontWeight="bold" textAnchor="middle" transform="rotate(-90 90 300)">
            DRIVEWAY / WALKWAY
          </text>

          {/* 2. Top Continuous Structure (Petrol Kiosk, Back Engine Bay, Foam Bay) */}
          <g id="top-open-bay">
            {/* Red: Petrol Kiosk */}
            <rect
              x="160" y="40" width="200" height="150"
              fill="#F87171" stroke="#1F2937" strokeWidth="2"
              onMouseEnter={() => setActiveZone('Petrol Kiosk')}
              onMouseLeave={() => setActiveZone(null)}
            />
            <text x="260" y="120" fill="#000" fontSize="14" fontWeight="bold" textAnchor="middle">PETROL KIOSK</text>

            {/* Blue: Back Engine Bay */}
            <rect
              x="360" y="40" width="240" height="150"
              fill="#60A5FA" stroke="#1F2937" strokeWidth="2"
              onMouseEnter={() => setActiveZone('Back Engine Bay')}
              onMouseLeave={() => setActiveZone(null)}
            />
            <text x="480" y="120" fill="#000" fontSize="14" fontWeight="bold" textAnchor="middle">BACK ENGINE BAY</text>

            {/* Black: Foam Bay */}
            <rect
              x="600" y="40" width="180" height="150"
              fill="#374151" stroke="#1F2937" strokeWidth="2"
              onMouseEnter={() => setActiveZone('Foam Bay')}
              onMouseLeave={() => setActiveZone(null)}
            />
            <text x="690" y="120" fill="#FFF" fontSize="14" fontWeight="bold" textAnchor="middle">FOAM BAY</text>
          </g>

          {/* 3. Green: Hose Tower / Washing Bay */}
          <g id="hose-tower">
            <rect
              x="790" y="40" width="170" height="230"
              fill="#4ADE80" stroke="#1F2937" strokeWidth="2"
              onMouseEnter={() => setActiveZone('Hose Tower / Washing Bay')}
              onMouseLeave={() => setActiveZone(null)}
            />
            <text x="875" y="140" fill="#000" fontSize="13" fontWeight="bold" textAnchor="middle">
              HOSE TOWER /
            </text>
            <text x="875" y="160" fill="#000" fontSize="13" fontWeight="bold" textAnchor="middle">
              WASHING BAY
            </text>
          </g>

          {/* 4. Main Front Building (Yellow: Main Engine Bay + Watchroom) */}
          <g id="main-engine-bay">
            <rect
              x="160" y="320" width="460" height="240"
              fill="#FACC15" stroke="#1F2937" strokeWidth="2"
              onMouseEnter={() => setActiveZone('Main Engine Bay & Watchroom')}
              onMouseLeave={() => setActiveZone(null)}
            />
            <text x="390" y="420" fill="#000" fontSize="16" fontWeight="bold" textAnchor="middle">
              MAIN ENGINE BAY
            </text>
            {/* Watchroom Section within Yellow Bay */}
            <rect x="490" y="460" width="120" height="90" fill="none" stroke="#1F2937" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="550" y="500" fill="#000" fontSize="11" fontWeight="bold" textAnchor="middle">WATCHROOM &</text>
            <text x="550" y="515" fill="#000" fontSize="11" fontWeight="bold" textAnchor="middle">RECEPTION</text>
          </g>

          {/* 5. Purple: Admin Office */}
          <g id="admin-office">
            <rect
              x="630" y="320" width="330" height="240"
              fill="#C084FC" stroke="#1F2937" strokeWidth="2"
              onMouseEnter={() => setActiveZone('Admin Office')}
              onMouseLeave={() => setActiveZone(null)}
            />
            <text x="795" y="440" fill="#000" fontSize="16" fontWeight="bold" textAnchor="middle">
              ADMIN OFFICE
            </text>
          </g>

          {/* Yard Center Label */}
          <text x="480" y="255" fill="#9CA3AF" fontSize="14" letterSpacing="4" textAnchor="middle">
            OPEN AREA / DRILL YARD
          </text>
        </svg>
      </div>

      {/* Dynamic Legend */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
        {zones.map((zone) => (
          <div
            key={zone.id}
            onClick={() => setActiveZone(zone.name)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: '4px',
              border: activeZone === zone.name ? '2px solid #000' : '1px solid #DDD',
              backgroundColor: activeZone === zone.name ? '#E5E7EB' : '#FFF',
            }}
          >
            <span style={{ width: '16px', height: '16px', backgroundColor: zone.color, border: '1px solid #333', borderRadius: '3px' }}></span>
            <span style={{ fontSize: '13px', fontWeight: '500' }}>{zone.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FireStationFloorPlan;