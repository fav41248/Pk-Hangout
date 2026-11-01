import React from 'react';
import { REGISTRATION_FORM_URL } from '../data/eventData';

export const RegistrationForm: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-28 relative overflow-hidden" id="register">
      {/* Background glow aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[#ff5733]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-label-caps text-label-caps tracking-widest text-[#ff5733] uppercase font-bold">
            RESERVE YOUR CHAIR
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase font-extrabold text-[#dfe2f1] mt-2 tracking-tight">
            YOU KNOW YOU WANT TO BE THERE.
          </h2>
          <p className="font-body-lg text-body-lg text-[#e4beb6] mt-3 max-w-xl mx-auto">
            Don't just watch the moments afterwards. Be part of the conversations, the laughter, and the memories we're about to create together on December 26, 2026.
          </p>
        </div>

        {/* Registration CTA Card */}
        <div className="rounded-3xl bg-[#262a35] border border-[#353944]/40 p-8 sm:p-12 shadow-2xl backdrop-blur-xl text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[#ff5733]/20 border border-[#ff5733]/40 flex items-center justify-center text-[#ff5733] mb-2">
            <span className="material-symbols-outlined text-3xl">how_to_reg</span>
          </div>

          <h3 className="font-headline-sm text-2xl sm:text-3xl text-[#dfe2f1] font-bold">
            Ready to Join the 2026 Edition?
          </h3>
          <p className="text-[#e4beb6] max-w-lg text-body-md leading-relaxed">
            Click below to secure your spot, reserve your meal pack, and get verified for the Ibadan Baptist Conference Pastors' Kids Hangout.
          </p>

          <div className="pt-4 w-full max-w-md">
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-8 rounded-xl bg-[#ff5733] text-white font-label-caps text-body-md font-bold uppercase tracking-wider shadow-[0_12px_32px_rgba(255,87,51,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer inline-block"
            >
              <span>COUNT ME IN</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>


        </div>

      </div>
    </section>
  );
};
