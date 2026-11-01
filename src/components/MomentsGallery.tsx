import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/eventData';
import { GalleryItem } from '../types';

export const MomentsGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hangout-1' | 'hangout-2'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const filters = [
    { key: 'all', label: 'View All' },
    { key: 'hangout-1', label: 'Pk’s Hangout 1.0' },
    { key: 'hangout-2', label: 'Pk’s Hangout 2.0' },
  ] as const;

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section className="w-full bg-[#0a0e18] py-20 lg:py-28 border-t border-[#353944]/20" id="moments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-label-caps text-label-caps tracking-widest text-[#ffb4a4] uppercase font-bold">
              ARCHIVE OF MEMORIES
            </span>
            <h2 className="font-headline-lg text-headline-lg font-bold uppercase tracking-tight text-[#dfe2f1] mt-2">
              MEMORIES MADE. CONNECTIONS KEPT.
            </h2>
            <p className="font-body-lg text-body-lg text-[#e4beb6] mt-2 max-w-2xl">
              Some things are better experienced than explained. Take a look at the moments that have made previous editions special.
            </p>
          </div>

          {/* Filter Segmented Controls */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 shrink-0">
            {filters.map((f) => {
              const isActive = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-4 py-2 rounded-full font-label-caps text-label-caps uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#ff5733] text-white shadow-md'
                      : 'bg-[#1c1f2a] border border-[#353944]/30 text-[#e4beb6] hover:text-[#dfe2f1]'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#1c1f2a] cursor-pointer border border-[#353944]/20 shadow-md hover:border-[#ff5733]/50 transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#262a35] border border-[#353944]/40 text-[#dfe2f1] flex items-center justify-center hover:bg-[#353944] transition-colors cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#262a35]/80 hover:bg-[#262a35] text-[#dfe2f1] flex items-center justify-center border border-[#353944]/40 transition-colors z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#262a35]/80 hover:bg-[#262a35] text-[#dfe2f1] flex items-center justify-center border border-[#353944]/40 transition-colors z-50 cursor-pointer"
            aria-label="Next image"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>

          <div
            className="max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.altText}
              referrerPolicy="no-referrer"
              className="max-h-[85vh] w-auto rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
