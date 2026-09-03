import { useState } from 'react';
import Icon from './components/Icon';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import FloorPlanScreen from './screens/FloorPlanScreen';
import NavigationScreen from './screens/NavigationScreen';
import BuildingsScreen from './screens/BuildingsScreen';
import HazardsScreen from './screens/HazardsScreen';
import TeamScreen from './screens/TeamScreen';
import FireStationScreen from './screens/FireStationScreen';
import RiserScreen from './screens/RiserScreen';
import { DEMO_CREDENTIALS, AUTH_STORAGE_KEY } from './data';
import { BG, SUBTEXT } from './theme';
import './App.css';

const SCREENS = {
  login: LoginScreen,
  dashboard: DashboardScreen,
  floorplan: FloorPlanScreen,
  navigation: NavigationScreen,
  buildings: BuildingsScreen,
  hazards: HazardsScreen,
  team: TeamScreen,
  firestation: FireStationScreen,
  riser: RiserScreen,
};

function getRememberedCredentials() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return data &&
      data.unitId === DEMO_CREDENTIALS.unitId &&
      data.password === DEMO_CREDENTIALS.password
      ? data
      : null;
  } catch {
    return null;
  }
}

function App() {
  const [screen, setScreen] = useState(() => (getRememberedCredentials() ? 'dashboard' : 'login'));

  const handleLogout = () => {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      /* storage unavailable – ignore */
    }
    setScreen('login');
  };

  const Screen = SCREENS[screen];

  return (
    <div className="flex flex-col w-full h-dvh lg:h-auto lg:min-h-screen" style={{ background: BG }}>
      
      {screen !== 'login' && (
        <button
          onClick={handleLogout}
          className="fixed right-4 top-4 z-50 flex items-center gap-1.5 text-[12px] font-medium"
          style={{ color: SUBTEXT }}
        >
          <Icon name="logOut" size={13} color={SUBTEXT} /> Log out
        </button>
      )}
      <div className="flex-1 min-h-0 w-full lg:min-h-screen">
        <Screen go={setScreen} />
      </div>
    </div>
  );
}

export default App;

