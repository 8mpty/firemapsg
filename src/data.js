export const DEMO_CREDENTIALS = { unitId: 'SCDF-421', password: 'password' };
export const AUTH_STORAGE_KEY = 'firemapsg.remembered';

export const BUILDING = {
  name: 'Tuas Fire Station',
  type: 'Fire Station (Facility)',
  levels: 5,
  incidentTime: '22:07',
};

export const HAZARDS = [
  { id: 1, name: 'Petrol Kiosk', desc: 'Flammable fuel storage', risk: 'HIGH RISK', loc: 'G-01', icon: 'flame', color: 'RED' },
  { id: 2, name: 'Foam Storage Bay', desc: 'AFFF foam concentrate', risk: 'MEDIUM RISK', loc: 'G-02', icon: 'batteryCharging', color: 'AMBER' },
  { id: 3, name: 'Diesel Generator Room', desc: 'Combustible fuel supply', risk: 'LOW RISK', loc: 'G-03', icon: 'zap', color: 'GREEN' },
];

export const BUILDINGS = [
  { id: 1, name: 'Block 123, AMK Ave 1', meta: 'Residential (HDB) · 15 Floors', fav: false },
  { id: 2, name: 'Northpoint City', meta: 'Commercial · 6 Floors', fav: false },
  { id: 3, name: 'Yishun Community Hospital', meta: 'Institutional · 8 Floors', fav: false },
  { id: 4, name: 'Blk 88, Toa Payoh Lor 4', meta: 'Residential (HDB) · 12 Floors', fav: false },
  { id: 5, name: 'Tuas Fire Station', meta: 'Facility · Ground Floor Incident', fav: true, fireStation: true },
];

export const STEPS = [
  { id: 1, icon: 'arrowUp', label: 'Enter via Driveway', meta: '10 m', active: true },
  { id: 2, icon: 'cornerUpLeft', label: 'Turn Left', meta: '6 m' },
  { id: 3, icon: 'arrowUp', label: 'Go Straight', meta: '8 m' },
  { id: 4, icon: 'R', label: 'Riser Ahead', meta: '5 m' },
  { id: 5, icon: 'flame', label: 'Arrived at Petrol Kiosk', meta: 'Fire Location', final: true },
];

export const TEAMS = [
  { id: 'alpha', label: 'Alpha Team', level: 'Level 5', x: 34, y: 44, color: 'RED' },
  { id: 'bravo', label: 'Bravo Team', level: 'Level 3', x: 78, y: 66, color: 'BLUE' },
];

