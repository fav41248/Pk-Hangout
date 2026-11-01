import React from 'react';
import { ScheduleTimeline } from './ScheduleTimeline';

export const EventEssentials: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0e18] py-20 lg:py-28 border-t border-[#353944]/20" id="details">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-label-caps text-label-caps tracking-widest text-[#ffb4a4] uppercase font-bold">
              GATHERING SPECIFICS
            </span>
            <h2 className="font-headline-lg text-headline-lg font-bold uppercase tracking-tight text-[#dfe2f1] mt-2">
              LET'S MAKE DECEMBER 26 COUNT.
            </h2>
            <p className="font-body-lg text-body-lg text-[#e4beb6] mt-2 max-w-xl">
              Everything you need to know ahead of the gathering. Mark your calendar and prepare your spirit.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c1f2a] border border-[#353944]/30 font-label-caps text-label-caps text-[#ffb95f] font-bold">
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            <span>Boxing Day · Saturday</span>
          </div>
        </div>

        {/* Essential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fact 1 */}
          <div className="p-6 rounded-2xl bg-[#1c1f2a] border border-[#353944]/20 hover:border-[#ff5733]/40 transition-colors shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#ff5733]/20 text-[#ff5733] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">event</span>
            </div>
            <span className="font-label-caps text-[11px] text-[#ab8982] uppercase tracking-wider">
              EVENT &amp; DATE
            </span>
            <h4 className="font-headline-sm text-xl text-[#dfe2f1] font-bold mt-1">
              Dec 26, 2026
            </h4>
            <p className="font-body-sm text-sm text-[#e4beb6] mt-2 leading-relaxed">
              Pastors' Kids Hangout 2026. Annual Boxing Day fellowship.
            </p>
          </div>

          {/* Fact 2 */}
          <div className="p-6 rounded-2xl bg-[#1c1f2a] border border-[#353944]/20 hover:border-[#ffb95f]/40 transition-colors shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#ffb95f]/20 text-[#ffb95f] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">groups</span>
            </div>
            <span className="font-label-caps text-[11px] text-[#ab8982] uppercase tracking-wider">
              COMMUNITY
            </span>
            <h4 className="font-headline-sm text-xl text-[#dfe2f1] font-bold mt-1">
              IBC Pastors' Kids
            </h4>
            <p className="font-body-sm text-sm text-[#e4beb6] mt-2 leading-relaxed">
              Pastors' children across Ibadan Baptist Conference &amp; friends.
            </p>
          </div>

          {/* Fact 3 */}
          <div className="p-6 rounded-2xl bg-[#1c1f2a] border border-[#353944]/20 hover:border-[#cebdff]/40 transition-colors shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#cebdff]/20 text-[#cebdff] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">location_on</span>
            </div>
            <span className="font-label-caps text-[11px] text-[#cebdff] uppercase tracking-wider font-bold">
              LOCATION &amp; VENUE
            </span>
            <h4 className="font-headline-sm text-xl text-[#dfe2f1] font-bold mt-1">
              Ibadan, Nigeria
            </h4>
            <p className="font-body-sm text-sm text-[#ffb95f] font-medium mt-2">
              [VENUE TO BE CONFIRMED]
            </p>
            <p className="font-body-sm text-[12px] text-[#e4beb6] mt-1">
              Full address and directions dispatched to registrants.
            </p>
          </div>

          {/* Fact 4 */}
          <div className="p-6 rounded-2xl bg-[#1c1f2a] border border-[#353944]/20 hover:border-[#ffb4a4]/40 transition-colors shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#ffb4a4]/20 text-[#ffb4a4] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">payments</span>
            </div>
            <span className="font-label-caps text-[11px] text-[#ffb4a4] uppercase tracking-wider font-bold">
              REGISTRATION &amp; FEE
            </span>
            <h4 className="font-headline-sm text-xl text-[#dfe2f1] font-bold mt-1">
              Free Admission
            </h4>
            <p className="font-body-sm text-sm text-[#ffb95f] font-medium mt-2">
              Sponsored by IBC Youth Fellowship
            </p>
            <p className="font-body-sm text-[12px] text-[#e4beb6] mt-1">
              Reserve your seat below to help hospitality prepare meals.
            </p>
          </div>
        </div>

        {/* Embedded Itinerary Timeline */}
        <ScheduleTimeline />

      </div>
    </section>
  );
};
