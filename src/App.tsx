import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { WhyItMatters } from './components/WhyItMatters';
import { MomentsGallery } from './components/MomentsGallery';
import { CommunitySection } from './components/CommunitySection';
import { RegistrationForm } from './components/RegistrationForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AnimatedSection } from './components/AnimatedSection';
import { Screen, RegistrationData } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('experience');
  const [registeredCount, setRegisteredCount] = useState<number>(128);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Handle navigation
  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
    const targetElement = document.getElementById(
      screen === 'experience'
        ? 'top'
        : screen === 'moments'
        ? 'moments'
        : screen === 'faq'
        ? 'faq'
        : 'register'
    );

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegistrationSuccess = (reg: RegistrationData) => {
    setRegisteredCount((prev) => prev + 1);
    setToastMessage(`Welcome aboard, ${reg.fullName.split(' ')[0]}! Your pass ${reg.ticketCode} is confirmed.`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  // Scroll spy to update current active screen in nav
  useEffect(() => {
    const handleScroll = () => {
      const sections: { id: string; screen: Screen }[] = [
        { id: 'register', screen: 'register' },
        { id: 'faq', screen: 'faq' },
        { id: 'moments', screen: 'moments' },
        { id: 'top', screen: 'experience' },
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentScreen(section.screen);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0f131d] min-h-screen text-[#dfe2f1] font-body-md antialiased selection:bg-[#ff5733] selection:text-white relative">
      {/* Fixed Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        registeredCount={registeredCount}
      />

      {/* Main Content Area */}
      <main id="top" className="w-full pt-20 bg-[#0f131d] min-h-screen">
        {/* Section 1: Hero */}
        <AnimatedSection>
          <Hero onNavigate={handleNavigate} />
        </AnimatedSection>

        {/* Section 2: Live Countdown to Gathering */}
        <AnimatedSection>
          <Countdown />
        </AnimatedSection>

        {/* Section 3: Why This Matters (Storytelling) */}
        <AnimatedSection>
          <WhyItMatters />
        </AnimatedSection>

        {/* Section 4: Past Editions Archive (Gallery & Lightbox) */}
        <AnimatedSection>
          <MomentsGallery />
        </AnimatedSection>

        {/* Section 6: Community & Shared Perspective */}
        <AnimatedSection>
          <CommunitySection />
        </AnimatedSection>

        {/* Section 7: Registration & Digital VIP Pass */}
        <AnimatedSection>
          <RegistrationForm />
        </AnimatedSection>

        {/* Section 8: Frequently Asked Questions */}
        <AnimatedSection>
          <FaqSection />
        </AnimatedSection>

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Toast Notification */}
      {showToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#1c1f2a] border border-[#ff5733] text-[#dfe2f1] px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <span className="material-symbols-outlined text-[#ff5733] text-2xl">check_circle</span>
          <span className="font-body-sm text-sm font-medium">{toastMessage}</span>
          <button
            onClick={() => setShowToast(false)}
            className="text-[#ab8982] hover:text-white ml-2 text-xs"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
