import Icon from '../components/Icon';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import FireStationFloorMap from '../components/FireStationFloorMap';
import { QuickAction } from '../components/ui';
import { RED, AMBER, GREEN, BLUE, PANEL2, BORDER, TEXT, SUBTEXT } from '../theme';

export default function FireStationScreen({ go }) {
  return (
    <div className="flex flex-col h-full lg:min-h-screen">
      <Header title="Fire Station – Ground Floor" onBack={() => go('dashboard')} right={<Icon name="settings" size={18} color={TEXT} />} />
      <div className="flex-1 overflow-y-auto px-4 pb-4 lg:mx-auto lg:w-full lg:max-w-5xl lg:px-8 lg:pt-4">
        {/* Active incident banner */}
        <div className="rounded-xl overflow-hidden mb-3" style={{ border: `1px solid ${RED}` }}>
          <div className="flex items-center justify-between px-3.5 py-2.5" style={{ background: RED }}>
            <span className="text-[12px] font-bold text-white flex items-center gap-1.5">
              <Icon name="flame" size={13} color="#fff" /> HIGH RISK – PETROL KIOSK
            </span>
            <span className="text-[11px] text-white/90 font-semibold">22:07</span>
          </div>
          <div className="px-3.5 py-3" style={{ background: PANEL2 }}>
            <div className="text-[13.5px] font-bold mb-1" style={{ color: TEXT }}>Petrol Kiosk</div>
            <div className="text-[11px]" style={{ color: SUBTEXT }}>Flammable fuel storage · Ground floor, front bay</div>
          </div>
        </div>

        {/* Floor plan with petrol kiosk as fire origin */}
        <div className="relative rounded-xl overflow-hidden mb-3 w-full aspect-[16/10] lg:aspect-video lg:max-h-none" style={{ border: `1px solid ${BORDER}` }}>
          <FireStationFloorMap onPetrolClick={() => go('navigation')} />
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-[11px]" style={{ color: SUBTEXT }}>
          <span className="flex items-center gap-1.5">
            <Icon name="flame" size={11} color={RED} /> Fire Origin
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="shieldAlert" size={11} color={AMBER} /> Flammable Hazard
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-[3px] flex items-center justify-center text-[7px] font-bold text-white" style={{ background: GREEN }}>
              R
            </span>
            Riser
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5 lg:grid lg:grid-cols-4">
          <QuickAction icon="route" title="Route to Petrol Kiosk" sub="Fastest Access" color={BLUE} onClick={() => go('navigation')} />
          <QuickAction icon="shieldAlert" title="Hazard Zones" sub="Fuel & foam storage" color={AMBER} onClick={() => go('hazards')} />
          <QuickAction icon="building" title="Nearest Riser" sub="Back engine bay" color={GREEN} onClick={() => go('riser')} />
          <QuickAction icon="info" title="Site Details" sub="Operations info" color={SUBTEXT} onClick={() => go('sitedetails')} />
        </div>
      </div>
      <BottomNav screen="dashboard" go={go} />
    </div>
  );
}
