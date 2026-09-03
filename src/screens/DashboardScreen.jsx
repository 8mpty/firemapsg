import Icon from '../components/Icon';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import FireStationFloorMap from '../components/FireStationFloorMap';
import { QuickAction } from '../components/ui';
import { BUILDING } from '../data';
import { RED, RED_DIM, PANEL, PANEL2, BORDER, TEXT, SUBTEXT, BLUE, GREEN, AMBER } from '../theme';

export default function DashboardScreen({ go }) {
  return (
    <div className="flex flex-col h-full lg:min-h-screen">
      <Header
        title="Incident Dashboard"
        right={
          <div className="relative">
          </div>
        }
      />
      <div className="flex-1 overflow-y-auto px-4 pb-4 lg:mx-auto lg:w-full lg:max-w-5xl lg:px-8 lg:pt-4">
        <div className="rounded-xl overflow-hidden mb-4" style={{ border: `1px solid ${RED_DIM}` }}>
          <div className="flex items-center justify-between px-3.5 py-2.5" style={{ background: RED }}>
            <span className="text-[12px] font-bold text-white flex items-center gap-1.5">
              <Icon name="flame" size={13} color="#fff" /> ACTIVE INCIDENT
            </span>
            <span className="text-[11px] text-white/90 font-semibold">{BUILDING.incidentTime}</span>
          </div>
          <div className="px-3.5 py-3" style={{ background: PANEL2 }}>
            <div className="text-[13.5px] font-bold mb-2.5" style={{ color: TEXT }}>{BUILDING.name}</div>
            <div className="flex justify-between">
              <div>
                <div className="text-[10px]" style={{ color: SUBTEXT }}>Building Type</div>
                <div className="text-[12px] font-semibold" style={{ color: TEXT }}>{BUILDING.type}</div>
              </div>
              <div>
                <div className="text-[10px]" style={{ color: SUBTEXT }}>Levels</div>
                <div className="text-[12px] font-semibold" style={{ color: TEXT }}>{BUILDING.levels} Floors</div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => go('floorplan')} className="w-full text-left rounded-xl overflow-hidden mb-4" style={{ border: `1px solid ${BORDER}` }}>
          <div className="flex items-center justify-between px-3.5 py-2.5" style={{ background: PANEL2 }}>
            <span className="text-[12px] font-bold" style={{ color: TEXT }}>FLOOR PLAN – GROUND FLOOR</span>
            {/* <Icon name="chevronRight" size={14} color={SUBTEXT} /> */}
          </div>
          <div className="aspect-[16/9] w-full max-h-52 lg:max-h-none lg:aspect-[16/7]" style={{ background: PANEL }}>
            <FireStationFloorMap onPetrolClick={() => go('floorplan')} />
          </div>
        </button>

        <div className="flex flex-wrap gap-2.5 lg:grid lg:grid-cols-4">
          <QuickAction icon="route" title="Route to Fire" sub="Best Access Path" color={BLUE} onClick={() => go('navigation')} />
          <QuickAction icon="building" title="Nearest Riser" sub="22 m away" color={GREEN} onClick={() => go('riser')} />
          <QuickAction icon="shieldAlert" title="Hazard Zones" sub="2 on this floor" color={AMBER} onClick={() => go('hazards')} />
          <QuickAction icon="info" title="Building Info" sub="Details & Systems" color={SUBTEXT} onClick={() => go('buildings')} />
        </div>
      </div>
      <BottomNav screen="dashboard" go={go} />
    </div>
  );
}
