import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/eventData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full bg-[#0a0e18] py-20 lg:py-28 border-t border-[#353944]/20" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-label-caps text-label-caps tracking-widest text-[#ffb95f] uppercase font-bold">
            GOT QUESTIONS?
          </span>
          <h2 className="font-headline-lg text-headline-lg font-bold uppercase tracking-tight text-[#dfe2f1] mt-2">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
          <p className="font-body-lg text-body-lg text-[#e4beb6] mt-2">
            Clear answers so you can come with full peace of mind.
          </p>

          {/* Search filter input */}
          <div className="mt-6 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. fee, venue, elders...)"
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#1c1f2a] border border-[#353944]/40 text-sm text-[#dfe2f1] placeholder:text-[#ab8982]/60 focus:outline-none focus:border-[#ff5733] transition-all"
            />
            <span className="material-symbols-outlined absolute left-3.5 top-2.5 text-[#ab8982] text-xl">
              search
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-[#ab8982] hover:text-white text-xs uppercase"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Accordion Stack */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-[#1c1f2a] rounded-2xl border border-[#353944]/30 text-[#e4beb6]">
              No questions matched "{searchQuery}". Email us at{' '}
              <a href="mailto:fellowship@pkhangout.ng" className="text-[#ff5733] underline">
                fellowship@pkhangout.ng
              </a>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-[#1c1f2a] border border-[#353944]/20 overflow-hidden transition-colors hover:border-[#353944]/60"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-headline-sm text-base sm:text-lg text-[#dfe2f1] font-semibold">
                      {index + 1}. {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[#ffb95f] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 animate-in fade-in duration-200">
                      <p className="font-body-md text-sm sm:text-base text-[#e4beb6] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
