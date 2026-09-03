import { useState } from 'react';
import Icon from '../components/Icon';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { BUILDINGS } from '../data';
import { RED, AMBER, BORDER, PANEL2, TEXT, SUBTEXT } from '../theme';

const TABS = ['Favourites', 'Recent', 'All Buildings'];

export default function BuildingsScreen({ go }) {
  const [tab, setTab] = useState('All Buildings');
  const [query, setQuery] = useState('');
  const [favourites, setFavourites] = useState(() => BUILDINGS.filter((b) => b.fav).map((b) => b.id));
  const [recentIds, setRecentIds] = useState([5]);

  const toggleFav = (id) => {
    setFavourites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const openBuilding = (id) => {
    const b = BUILDINGS.find((x) => x.id === id);
    // Only the fire station has a floor plan / site view – other buildings do nothing.
    if (!b || !b.fireStation) return;
    setRecentIds((prev) => [id, ...prev.filter((r) => r !== id)].slice(0, 5));
    go('firestation');
  };

  const baseList =
    tab === 'Favourites'
      ? BUILDINGS.filter((b) => favourites.includes(b.id))
      : tab === 'Recent'
      ? recentIds.map((id) => BUILDINGS.find((b) => b.id === id)).filter(Boolean)
      : BUILDINGS;

  const q = query.trim().toLowerCase();
  const filtered = baseList.filter((b) => (b.name + ' ' + b.meta).toLowerCase().includes(q));

  return (
    <div className="flex flex-col h-full lg:min-h-screen">
      <Header title="Buildings" />
      <div className="px-4 lg:mx-auto lg:w-full lg:max-w-3xl lg:px-8">
        <div className="flex items-center gap-2 mb-3 rounded-lg px-3 py-2.5" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
          <Icon name="search" size={15} color={SUBTEXT} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search building / address"
            className="bg-transparent outline-none text-[13px] flex-1"
            style={{ color: TEXT }}
          />
          {query ? (
            <button onClick={() => setQuery('')} className="flex items-center justify-center w-4 h-4">
              <Icon name="minus" size={13} color={SUBTEXT} />
            </button>
          ) : (
            <Icon name="filter" size={15} color={SUBTEXT} />
          )}
        </div>
        <div className="flex gap-5 mb-3 text-[12.5px] font-semibold" style={{ borderBottom: `1px solid ${BORDER}` }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="pb-2"
              style={{
                color: tab === t ? RED : SUBTEXT,
                borderBottom: tab === t ? `2px solid ${RED}` : '2px solid transparent',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-2 flex flex-col gap-2.5 lg:mx-auto lg:w-full lg:max-w-3xl lg:px-8 lg:grid lg:grid-cols-2">
        {filtered.length === 0 ? (
          <div className="text-center text-[12px] mt-10" style={{ color: SUBTEXT }}>
            No buildings found.
            {tab === 'Favourites' && <div className="mt-1 text-[10.5px]">Tap the star on a building to save it here.</div>}
            {tab === 'Recent' && <div className="mt-1 text-[10.5px]">Open a building from “All Buildings” to see it here.</div>}
          </div>
        ) : (
          filtered.map((b) => {
            const isFav = favourites.includes(b.id);
            return (
              <div key={b.id} className="flex items-center justify-between rounded-xl px-3.5 py-3" style={{ background: PANEL2, border: `1px solid ${BORDER}` }}>
                <button onClick={() => openBuilding(b.id)} className="flex-1 text-left">
                  <div className="text-[13.5px] font-bold" style={{ color: TEXT }}>{b.name}</div>
                  <div className="text-[11px]" style={{ color: SUBTEXT }}>{b.meta}</div>
                </button>
                <button onClick={() => toggleFav(b.id)} className="ml-2 p-1">
                  <Icon name="star" size={16} color={isFav ? AMBER : BORDER} />
                </button>
              </div>
            );
          })
        )}
        <div className="text-center text-[10.5px] pt-1" style={{ color: SUBTEXT }}>
          Showing {filtered.length} of {BUILDINGS.length} buildings
        </div>
      </div>
      <BottomNav screen="buildings" go={go} />
    </div>
  );
}
