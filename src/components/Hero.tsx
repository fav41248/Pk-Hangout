import React from 'react';
import { EVENT_ASSETS, REGISTRATION_FORM_URL } from '../data/eventData';
import { Screen } from '../types';

interface HeroProps {
  onNavigate: (screen: Screen) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28">
      {/* Atmospheric glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#ff5733]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#ee9800]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Editorial Narrative Intro */}
          <div className="lg:col-span-7 flex flex-col gap-6 z-10">

            <div className="flex flex-col gap-4">
              <h1 className="font-display-hero text-display-hero uppercase tracking-tight text-[#dfe2f1] font-black leading-[1.08] drop-shadow-sm">
                Ibadan Baptist Conference <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5733] via-[#ffb95f] to-[#ffb4a4]">
                  PK's Hangout 3.0
                </span>
              </h1>
            </div>

            <p className="font-body-lg text-body-lg text-[#e4beb6] max-w-2xl leading-relaxed">
              Growing up in a pastor's home comes with experiences that don't always make it into the Sunday conversation. This December, come connect, laugh, share, and have the honest conversations that go beyond the church walls.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('moments')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#262a35] border border-[#353944]/40 text-[#dfe2f1] font-label-caps text-body-md font-semibold uppercase tracking-wider hover:bg-[#353944] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg text-[#ffb95f]">photo_camera</span>
                <span>SEE THE MOMENTS</span>
              </button>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};
