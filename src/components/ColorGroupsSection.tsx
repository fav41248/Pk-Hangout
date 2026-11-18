import React, { useMemo, useState } from 'react';
import { ASSOCIATION_GROUPS } from '../data/eventData';
import { AssociationGroup } from '../types';

interface CardTheme {
  cardBg: string;
  headerBg: string;
  borderColor: string;
  titleColor: string;
  subTextColor: string;
  itemTextColor: string;
  indexColor: string;
  dividerColor: string;
  hoverBg: string;
  swatchBorder: string;
}

const CARD_THEMES: Record<string, CardTheme> = {
  red: {
    cardBg: '#271217',
    headerBg: 'linear-gradient(135deg, rgba(239, 68, 68, 0.24), rgba(239, 68, 68, 0.06))',
    borderColor: 'rgba(239, 68, 68, 0.50)',
    titleColor: '#fff1f2',
    subTextColor: '#fecdd3',
    itemTextColor: '#ffe4e6',
    indexColor: '#fca5a5',
    dividerColor: 'rgba(252, 165, 165, 0.16)',
    hoverBg: 'rgba(239, 68, 68, 0.12)',
    swatchBorder: 'rgba(255, 255, 255, 0.30)',
  },
  green: {
    cardBg: '#0f2419',
    headerBg: 'linear-gradient(135deg, rgba(34, 197, 94, 0.24), rgba(34, 197, 94, 0.06))',
    borderColor: 'rgba(34, 197, 94, 0.48)',
    titleColor: '#ecfdf5',
    subTextColor: '#bbf7d0',
    itemTextColor: '#dcfce7',
    indexColor: '#86efac',
    dividerColor: 'rgba(134, 239, 172, 0.16)',
    hoverBg: 'rgba(34, 197, 94, 0.12)',
    swatchBorder: 'rgba(255, 255, 255, 0.30)',
  },
  purple: {
    cardBg: '#1e122b',
    headerBg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.24), rgba(168, 85, 247, 0.06))',
    borderColor: 'rgba(168, 85, 247, 0.50)',
    titleColor: '#faf5ff',
    subTextColor: '#e9d5ff',
    itemTextColor: '#f3e8ff',
    indexColor: '#d8b4fe',
    dividerColor: 'rgba(216, 180, 254, 0.16)',
    hoverBg: 'rgba(168, 85, 247, 0.14)',
    swatchBorder: 'rgba(255, 255, 255, 0.30)',
  },
  blue: {
    cardBg: '#101d35',
    headerBg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.26), rgba(59, 130, 246, 0.07))',
    borderColor: 'rgba(59, 130, 246, 0.52)',
    titleColor: '#eff6ff',
    subTextColor: '#bfdbfe',
    itemTextColor: '#dbeafe',
    indexColor: '#93c5fd',
    dividerColor: 'rgba(147, 197, 253, 0.18)',
    hoverBg: 'rgba(59, 130, 246, 0.14)',
    swatchBorder: 'rgba(255, 255, 255, 0.30)',
  },
};

export const ColorGroupsSection: React.FC = () => {
  const [activeColorFilter, setActiveColorFilter] = useState<'all' | string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAssociation, setSelectedAssociation] = useState<{
    name: string;
    group: AssociationGroup;
  } | null>(null);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredGroups = useMemo(() => {
    return ASSOCIATION_GROUPS.filter((group) => {
      const matchesColor = activeColorFilter === 'all' || group.id === activeColorFilter;
      if (!matchesColor) return false;
      if (!normalizedQuery) return true;

      return (
        group.colorName.toLowerCase().includes(normalizedQuery) ||
        group.associations.some((assoc) => assoc.toLowerCase().includes(normalizedQuery))
      );
    });
  }, [activeColorFilter, normalizedQuery]);

  const matchedSummary = useMemo(() => {
    if (!normalizedQuery) return [];
    const matches: { name: string; group: AssociationGroup }[] = [];
    ASSOCIATION_GROUPS.forEach((group) => {
      group.associations.forEach((assoc) => {
        if (assoc.toLowerCase().includes(normalizedQuery)) {
          matches.push({ name: assoc, group });
        }
      });
    });
    return matches;
  }, [normalizedQuery]);

  return (
    <section className="w-full bg-[#171b26] py-20 lg:py-28 border-t border-[#353944]/20 relative overflow-hidden" id="themes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Editorial Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg font-bold uppercase tracking-tight text-[#dfe2f1] text-balance">
              Four Colour Theme. One big Family.
            </h2>
            <p className="font-body-lg text-body-lg text-[#e4beb6] mt-3 leading-relaxed">
              Every Association is grouped into one of four signature colours for PK's Hangout 3.0. Find your association below so you know which team colour to rock for the hangout
            </p>
          </div>

          {/* Search Association Input */}
          <div className="w-full lg:w-96 shrink-0">
            <label htmlFor="association-search" className="sr-only">
              Search your Baptist Association
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#ab8982] text-xl pointer-events-none">
                search
              </span>
              <input
                id="association-search"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedAssociation(null);
                }}
                placeholder="Find your association (e.g. Goshen, Amazing Grace...)"
                className="w-full pl-12 pr-16 py-3.5 rounded-xl bg-[#0f131d] border border-[#353944]/50 text-sm text-[#dfe2f1] placeholder:text-[#ab8982]/70 focus:outline-none focus:border-[#ff5733] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-medium text-[#ab8982] hover:text-[#dfe2f1] transition-colors cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Colour Group Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#0f131d] border border-[#353944]/30 w-fit max-w-full mb-8">
          <button
            type="button"
            onClick={() => setActiveColorFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeColorFilter === 'all'
                ? 'bg-[#262a35] text-[#dfe2f1] shadow-sm'
                : 'text-[#e4beb6]/75 hover:text-[#dfe2f1]'
            }`}
          >
            All Colours
          </button>
          {ASSOCIATION_GROUPS.map((group) => {
            const isActive = activeColorFilter === group.id;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveColorFilter(group.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#262a35] text-[#dfe2f1] shadow-sm'
                    : 'text-[#e4beb6]/75 hover:text-[#dfe2f1]'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="w-2.5 h-2.5 rounded-sm shrink-0 border border-white/25"
                  style={{ backgroundColor: group.swatchHex }}
                />
                <span>{group.colorName} Team</span>
              </button>
            );
          })}
        </div>

        {/* Instant Lookup Result Banner */}
        {(selectedAssociation || (normalizedQuery && matchedSummary.length > 0)) && (
          <div className="mb-8 rounded-2xl bg-[#0f131d] border border-[#353944]/40 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {selectedAssociation ? (
              <div className="flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className="w-5 h-5 rounded-md shrink-0 border border-white/25"
                  style={{ backgroundColor: selectedAssociation.group.swatchHex }}
                />
                <div className="font-body-md text-sm sm:text-base text-[#dfe2f1]">
                  <span className="font-semibold">{selectedAssociation.name}</span>
                  <span className="text-[#ab8982] mx-2">·</span>
                  <span>
                    Wear{' '}
                    <span className="font-bold" style={{ color: selectedAssociation.group.textAccent }}>
                      {selectedAssociation.group.colorName}
                    </span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-wider text-[#ab8982] font-medium">
                  Matching Associations ({matchedSummary.length})
                </span>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {matchedSummary.map((item, idx) => (
                    <div key={`${item.group.id}-${idx}`} className="inline-flex items-center gap-2 text-sm text-[#dfe2f1]">
                      <span
                        aria-hidden="true"
                        className="w-3 h-3 rounded-sm shrink-0 border border-white/20"
                        style={{ backgroundColor: item.group.swatchHex }}
                      />
                      <span className="font-medium">{item.name}</span>
                      <span className="text-[#ab8982]">→</span>
                      <span className="font-semibold" style={{ color: item.group.textAccent }}>
                        {item.group.colorName} Team
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedAssociation && (
              <button
                type="button"
                onClick={() => setSelectedAssociation(null)}
                className="text-xs text-[#ab8982] hover:text-[#dfe2f1] self-start sm:self-center cursor-pointer whitespace-nowrap"
              >
                Dismiss
              </button>
            )}
          </div>
        )}

        {/* 2x2 Colour-Themed Cards Grid */}
        {filteredGroups.length === 0 ? (
          <div className="rounded-2xl bg-[#1c1f2a] border border-[#353944]/30 p-10 text-center">
            <p className="font-body-lg text-[#e4beb6]">
              No association matched "{searchQuery}". Not Ibadan-based or don't have an association? You belong to{' '}
              <span className="text-[#93c5fd] font-semibold">Blue Team</span>.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveColorFilter('blue');
              }}
              className="mt-4 px-5 py-2.5 rounded-lg bg-[#262a35] text-[#dfe2f1] text-sm font-medium hover:bg-[#313540] transition-colors cursor-pointer"
            >
              View Blue Team
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredGroups.map((group) => {
              const theme = CARD_THEMES[group.id] || CARD_THEMES.blue;
              return (
                <article
                  key={group.id}
                  className="rounded-2xl border-2 overflow-hidden flex flex-col justify-between shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: theme.borderColor,
                  }}
                >
                  {/* Colour-Tinted Header Band */}
                  <div
                    className="px-6 sm:px-8 pt-7 pb-6 border-b"
                    style={{
                      background: theme.headerBg,
                      borderColor: theme.dividerColor,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className="font-headline-md text-2xl sm:text-3xl font-bold flex items-center gap-3"
                          style={{ color: theme.titleColor }}
                        >
                          <span
                            aria-hidden="true"
                            className="w-5 h-5 rounded-md shrink-0 shadow-sm"
                            style={{
                              backgroundColor: group.swatchHex,
                              border: `1px solid ${theme.swatchBorder}`,
                            }}
                          />
                          <span>{group.colorName} Team</span>
                        </h3>
                        <p
                          className="font-body-sm text-sm mt-2.5"
                          style={{ color: theme.subTextColor }}
                        >
                          {group.dressHint}
                        </p>
                      </div>

                      <div
                        className="w-11 h-11 rounded-xl shrink-0 shadow-inner"
                        style={{
                          backgroundColor: group.swatchHex,
                          border: `1px solid ${theme.swatchBorder}`,
                        }}
                        aria-label={`${group.colorName} colour swatch`}
                      />
                    </div>
                  </div>

                  {/* Associations List */}
                  <ul
                    className="px-6 sm:px-8 py-4 flex-1"
                    style={{ borderColor: theme.dividerColor }}
                  >
                    {group.associations.map((assoc, idx) => {
                      const isMatch = Boolean(normalizedQuery && assoc.toLowerCase().includes(normalizedQuery));
                      const isSelected =
                        selectedAssociation?.name === assoc && selectedAssociation?.group.id === group.id;
                      return (
                        <li
                          key={`${group.id}-${idx}`}
                          style={{
                            borderBottom:
                              idx < group.associations.length - 1
                                ? `1px solid ${theme.dividerColor}`
                                : 'none',
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => setSelectedAssociation({ name: assoc, group })}
                            className="w-full py-3.5 px-2 -mx-2 rounded-lg text-left flex items-center justify-between gap-4 transition-colors cursor-pointer group"
                            style={{
                              color: theme.itemTextColor,
                              backgroundColor: isMatch || isSelected ? theme.hoverBg : 'transparent',
                            }}
                          >
                            <div className="flex items-baseline gap-3.5 min-w-0">
                              <span
                                className="font-label-numeric text-xs tabular-nums shrink-0 font-bold"
                                style={{ color: theme.indexColor }}
                              >
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                              <span
                                className={`font-body-md text-base leading-snug ${
                                  isMatch || isSelected ? 'font-bold underline underline-offset-4' : 'font-medium'
                                }`}
                              >
                                {assoc}
                              </span>
                            </div>
                            <span
                              className="text-xs opacity-0 group-hover:opacity-80 transition-opacity whitespace-nowrap shrink-0 font-medium"
                              style={{ color: theme.subTextColor }}
                            >
                              {group.colorName}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
