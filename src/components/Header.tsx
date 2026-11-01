import React, { useState } from 'react';
import { Screen } from '../types';
import { EVENT_ASSETS, REGISTRATION_FORM_URL } from '../data/eventData';

interface HeaderProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  registeredCount: number;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, registeredCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { screen: Screen; label: string }[] = [
    { screen: 'experience', label: 'The Experience' },
    { screen: 'moments', label: 'Past Editions' },
    { screen: 'faq', label: 'FAQs' },
  ];

  const handleLinkClick = (screen: Screen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Main Navigation Bar */}
      <nav className="w-full bg-[#0f131d]/90 backdrop-blur-md border-b border-[#353944]/20 shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
          
          {/* Brand Lockup */}
          <button 
            onClick={() => handleLinkClick('experience')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5733] rounded-lg"
          >
            <img
              src={EVENT_ASSETS.logo}
              alt="Pastors' Kids Hangout Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg sm:text-xl uppercase tracking-tight text-[#dfe2f1] font-bold group-hover:text-[#ffb4a4] transition-colors">
                PASTORS' KIDS HANGOUT
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 font-label-caps text-label-caps uppercase tracking-wider">
            {navLinks.map((item) => {
              const isActive = currentScreen === item.screen;
              return (
                <button
                  key={item.screen}
                  onClick={() => handleLinkClick(item.screen)}
                  className={`py-2 transition-colors relative whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#ffb4a4] font-bold'
                      : 'text-[#e4beb6] hover:text-[#dfe2f1]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ff5733] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Zone */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#1c1f2a] border border-[#353944]/40 text-[#dfe2f1] hover:bg-[#262a35] transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#353944]/30 bg-[#0f131d]/98 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            {navLinks.map((item) => (
              <button
                key={item.screen}
                onClick={() => handleLinkClick(item.screen)}
                className={`py-2 text-left font-label-caps text-sm tracking-wider uppercase flex items-center justify-between ${
                  currentScreen === item.screen ? 'text-[#ffb4a4] font-bold' : 'text-[#e4beb6]'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[#353944]">→</span>
              </button>
            ))}
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-3 rounded-xl bg-[#ff5733] text-white font-label-caps text-center uppercase tracking-widest font-bold shadow-lg block"
            >
              RESERVE YOUR SPOT (DEC 26)
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
