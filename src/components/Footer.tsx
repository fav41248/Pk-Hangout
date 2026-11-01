import React from 'react';
import { EVENT_ASSETS } from '../data/eventData';
import { Screen } from '../types';

interface FooterProps {
  onNavigate: (screen: Screen) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#0a0e18] border-t border-[#353944]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          


          {/* Quick Navigation */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-label-caps text-label-caps uppercase text-[#ffb4a4] tracking-widest font-bold">
              Gathering Navigation
            </span>
            <div className="flex flex-col gap-2 font-body-sm text-sm">
              <button
                onClick={() => { onNavigate('experience'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left text-[#e4beb6] hover:text-[#dfe2f1] transition-colors cursor-pointer"
              >
                The Experience
              </button>
              <button
                onClick={() => { onNavigate('moments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left text-[#e4beb6] hover:text-[#dfe2f1] transition-colors cursor-pointer"
              >
                Past Editions Archive
              </button>
              <button
                onClick={() => { onNavigate('faq'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left text-[#e4beb6] hover:text-[#dfe2f1] transition-colors cursor-pointer"
              >
                Frequently Asked Questions
              </button>
              <button
                onClick={() => { onNavigate('register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left text-[#ff5733] font-bold hover:underline transition-colors cursor-pointer"
              >
                Reserve Seat (Dec 26)
              </button>
            </div>
          </div>

          {/* Direct Inquiries & Contacts */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-label-caps text-label-caps uppercase text-[#ffb4a4] tracking-widest font-bold">
              Direct Inquiries
            </span>
            <div className="flex flex-col gap-2.5 font-body-sm text-sm text-[#dfe2f1] mt-1">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#ff5733] text-lg">location_on</span>
                <span>Baptist House, Ibadan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#ff5733] text-lg">mail</span>
                <a href="mailto:fellowship@pkhangout.ng" className="text-[#e4beb6] hover:text-[#ffb4a4] transition-colors">
                  fellowship@pkhangout.ng
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#ff5733] text-lg">call</span>
                <span className="text-[#e4beb6]">+234 (0) 800 PK HANGOUT</span>
              </div>
            </div>
          </div>

        </div>


      </div>
    </footer>
  );
};
