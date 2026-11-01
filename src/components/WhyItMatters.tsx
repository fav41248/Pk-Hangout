import React from 'react';
import { EVENT_ASSETS } from '../data/eventData';

export const WhyItMatters: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="rounded-2xl overflow-hidden bg-[#1c1f2a] border border-[#353944]/20 shadow-2xl relative aspect-[4/5] group">
              <img
                src={EVENT_ASSETS.storyCircle}
                alt="Intimate outdoor circle of Nigerian young adults seated comfortably on grass during evening fellowship"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-black/30" />
              
              {/* Graphic Typographic Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="px-3.5 py-1.5 rounded-lg bg-[#0a0e18]/80 backdrop-blur-md border border-[#353944]/40 font-headline-sm text-sm font-bold uppercase tracking-wide text-[#ffb4a4]">
                  — Beyond the pulpit.
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-[#0a0e18]/80 backdrop-blur-md border border-[#353944]/40 font-headline-sm text-sm font-bold uppercase tracking-wide text-[#ffb95f]">
                  — Beyond expectations.
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-[#0a0e18]/80 backdrop-blur-md border border-[#353944]/40 font-headline-sm text-sm font-bold uppercase tracking-wide text-[#cebdff]">
                  — Beyond the Sunday routine.
                </span>
              </div>
            </div>
          </div>

          {/* Right Story Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 font-label-caps text-label-caps text-[#ffb95f] uppercase font-bold tracking-widest">
              <span className="w-8 h-[2px] bg-[#ffb95f]"></span>
              <span>WHY THIS MATTERS</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg uppercase font-extrabold text-[#dfe2f1] tracking-tight leading-tight">
              THERE'S MORE TO YOUR STORY.
            </h2>

            <div className="flex flex-col gap-5 text-[#e4beb6] font-body-lg text-body-lg leading-relaxed">
              <p>
                Being a pastor's child is one part of who you are. There's also the person you're becoming, the questions you're asking, the dreams you're chasing, the friendships you're building, and the experiences that make your story uniquely yours.
              </p>
              <p>
                Too often, people see the title before they see the human. They assume perfection, anticipate ministry succession, or misunderstand your silence.
              </p>
              <p className="text-[#dfe2f1] font-medium">
                Pastors' Kids Hangout creates room for those unfiltered conversations and the genuine connections that come with them. No judgment. No performance. Just pure presence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
