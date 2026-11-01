import React, { useState } from 'react';

export const CommunitySection: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const testimonials = [
    {
      quote: "For the first time in twenty years, I wasn't introduced as 'Pastor's Daughter.' I was just Dami. That single afternoon healed anxieties I didn't even realize I was carrying.",
      author: "Dami O.",
      role: "IBC Youth Member",
      location: "Oyo Zone · Attendee 2024",
      avatarBg: "bg-[#ff5733]/20 text-[#ff5733]",
      initial: "D"
    },
    {
      quote: "The honesty in that room was electric. We didn't complain about the church; we talked about how to survive the expectations while finding our own genuine love for God.",
      author: "Tobi A.",
      role: "Software Developer & PK",
      location: "Bodija Zone · Attendee 2025",
      avatarBg: "bg-[#ffb95f]/20 text-[#ffb95f]",
      initial: "T"
    },
    {
      quote: "I thought my siblings and I were the only ones who dealt with congregants meddling in our private choices. Finding 60+ others who nodded before I even finished my sentence was pure therapy.",
      author: "Feyi K.",
      role: "Architect & Worship Leader",
      location: "Oritamefa Zone · Attendee 2024",
      avatarBg: "bg-[#cebdff]/20 text-[#cebdff]",
      initial: "F"
    }
  ];

  return (
    <section className="w-full py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-3xl bg-[#262a35] border border-[#353944]/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle decorative glow */}
          <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-[#ee9800]/10 blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <span className="font-label-caps text-label-caps tracking-widest text-[#ffb4a4] uppercase font-bold">
              SHARED PERSPECTIVE
            </span>
            <h2 className="font-headline-lg text-headline-lg font-bold uppercase tracking-tight text-[#dfe2f1] mt-2 mb-6">
              YOU DON'T HAVE TO EXPLAIN EVERYTHING.
            </h2>
            <p className="font-body-lg text-body-lg text-[#e4beb6] leading-relaxed">
              Some experiences are easier to talk about with people who understand the context. This is an opportunity to meet others who share parts of your journey, hear different perspectives, and build connections that go beyond one day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
