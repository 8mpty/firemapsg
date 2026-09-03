import Icon from '../components/Icon';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import FireStationFloorMap from '../components/FireStationFloorMap';
import { QuickAction } from '../components/ui';
import { RED, GREEN, BLUE, AMBER, PANEL2, BORDER, TEXT, SUBTEXT } from '../theme';

export default function FloorPlanScreen({ go }) {
  return (
    <div className="flex flex-col h-full lg:min-h-screen">
      <Header title="Floor Plan – Ground Floor" onBack={() => go('dashboard')} right={<Icon name="settings" size={18} color={TEXT} />} />
      <div className="flex-1 overflow-y-auto px-4 pb-4 lg:mx-auto lg:w-full lg:max-w-5xl lg:px-8 lg:pt-4">
        <div className="relative rounded-xl overflow-hidden mb-3 w-full aspect-[4/3] max-h-80 lg:aspect-video lg:max-h-none" style={{ border: `1px solid ${BORDER}` }}>
          <FireStationFloorMap onPetrolClick={() => go('navigation')} />
          <div className="absolute right-2 top-2 flex flex-col rounded-lg overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
            <button className="w-8 h-8 flex items-center justify-center" style={{ background: PANEL2 }}>
              <Icon name="plus" size={14} color={TEXT} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center border-t" style={{ background: PANEL2, borderColor: BORDER }}>
              <Icon name="minus" size={14} color={TEXT} />
            </button>
          </div>
          <button
            className="absolute right-2 bottom-2 w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold"
            style={{ background: PANEL2, border: `1px solid ${BORDER}`, color: TEXT }}
          >
            <Icon name="box" size={14} color={TEXT} />
          </button>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-[11px]" style={{ color: SUBTEXT }}>
          <span className="flex items-center gap-1.5">
            <Icon name="flame" size={11} color={RED} /> Fire Location
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-[3px] flex items-center justify-center text-[7px] font-bold text-white" style={{ background: GREEN }}>
              R
            </span>
            Riser
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="shieldAlert" size={11} color={AMBER} /> Hazard
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-[2px] border-t-2 border-dashed" style={{ borderColor: BLUE }} /> Recommended Route
          </span>
        </div>

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

