import React, { useState } from 'react';
import { SCHEDULE_ITEMS } from '../data/eventData';

export const ScheduleTimeline: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<string>('all');

  const tracks = [
    { key: 'all', label: 'All Itinerary' },
    { key: 'talks', label: 'Circles & Panels' },
    { key: 'games', label: 'Games & Tournaments' },
    { key: 'food', label: 'Feast & Food' },
    { key: 'music', label: 'Acoustic Jam' }
  ];

  const filteredSchedule = activeTrack === 'all'
    ? SCHEDULE_ITEMS
    : SCHEDULE_ITEMS.filter((item) => item.track === activeTrack || (activeTrack === 'talks' && item.track === 'welcome'));

  return (
    <div className="mt-16 pt-16 border-t border-[#353944]/20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="font-label-caps text-label-caps tracking-widest text-[#ffb95f] uppercase font-bold">
            BOXING DAY ITINERARY
          </span>
          <h3 className="font-headline-lg text-2xl sm:text-3xl font-bold uppercase text-[#dfe2f1] mt-1">
            HOW THE DAY FLOWS
          </h3>
          <p className="text-sm text-[#e4beb6] mt-1">
            Structured enough to be seamless, flexible enough for organic conversation.
          </p>
        </div>

        {/* Track Filter */}
        <div className="flex flex-wrap gap-2">
          {tracks.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTrack(t.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-label-caps uppercase transition-colors cursor-pointer ${
                activeTrack === t.key
                  ? 'bg-[#ff5733] text-white font-bold'
                  : 'bg-[#1c1f2a] text-[#e4beb6] hover:text-white border border-[#353944]/30'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative border-l-2 border-[#353944]/40 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
        {filteredSchedule.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#ff5733] border-4 border-[#0a0e18] group-hover:scale-125 transition-transform" />

            <div className="p-6 rounded-2xl bg-[#1c1f2a] border border-[#353944]/30 hover:border-[#ffb95f]/40 transition-colors shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-label-numeric text-sm sm:text-base text-[#ffb95f] font-bold">
                  {item.time}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#262a35] text-[#ffb4a4] font-label-caps text-[11px] uppercase border border-[#353944]/40">
                  {item.badge}
                </span>
              </div>

              <h4 className="font-headline-sm text-lg sm:text-xl font-bold text-[#dfe2f1]">
                {item.title}
              </h4>
              <p className="text-xs text-[#ab8982] font-label-caps uppercase tracking-wider mt-0.5 mb-2">
                {item.subtitle} · {item.locationNote}
              </p>
              <p className="font-body-md text-sm sm:text-base text-[#e4beb6] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
