import React, { useState, useEffect } from 'react';

export const Countdown: React.FC = () => {
  // Target: December 26, 2026 10:00:00 WAT (UTC+1)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const targetDate = new Date('2026-12-26T09:00:00+01:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Pastors' Kids Hangout 2026");
    const details = encodeURIComponent(
      "Pastors' Kids Hangout 2026 in Ibadan, Nigeria. Real people. Real stories. Real connections. Unfiltered Boxing Day community."
    );
    const location = encodeURIComponent("Ibadan, Nigeria");
    const dates = "20261226T090000Z/20261226T180000Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="w-full bg-[#171b26] border-y border-[#353944]/20 py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff5733]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center relative z-10">
        <h2 className="font-headline-lg text-headline-lg font-bold uppercase tracking-tight text-[#dfe2f1] mb-2">
          THE NEXT EDITION STARTS IN...
        </h2>


        {/* Countdown Digital Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl">
          {/* Days */}
          <div className="bg-[#262a35]/90 border border-[#ffb95f]/20 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-lg relative overflow-hidden group hover:border-[#ffb95f]/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-[#ffb95f]/5 to-transparent pointer-events-none"></div>
            <span className="font-label-numeric text-[44px] sm:text-[56px] leading-none text-[#ffb95f] font-bold tracking-tight">
              {formatNumber(timeLeft.days)}
            </span>
            <span className="font-label-caps text-label-caps text-[#e4beb6] uppercase tracking-widest mt-3">
              DAYS
            </span>
          </div>

          {/* Hours */}
          <div className="bg-[#262a35]/90 border border-[#ff5733]/20 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-lg relative overflow-hidden group hover:border-[#ff5733]/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff5733]/5 to-transparent pointer-events-none"></div>
            <span className="font-label-numeric text-[44px] sm:text-[56px] leading-none text-[#ffb4a4] font-bold tracking-tight">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="font-label-caps text-label-caps text-[#e4beb6] uppercase tracking-widest mt-3">
              HOURS
            </span>
          </div>

          {/* Minutes */}
          <div className="bg-[#262a35]/90 border border-[#cebdff]/20 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-lg relative overflow-hidden group hover:border-[#cebdff]/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-[#cebdff]/5 to-transparent pointer-events-none"></div>
            <span className="font-label-numeric text-[44px] sm:text-[56px] leading-none text-[#cebdff] font-bold tracking-tight">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="font-label-caps text-label-caps text-[#e4beb6] uppercase tracking-widest mt-3">
              MINUTES
            </span>
          </div>

          {/* Seconds */}
          <div className="bg-[#262a35]/90 border border-[#ab8982]/20 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-lg relative overflow-hidden group hover:border-[#ab8982]/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-[#ab8982]/5 to-transparent pointer-events-none"></div>
            <span className="font-label-numeric text-[44px] sm:text-[56px] leading-none text-[#dfe2f1] font-bold tracking-tight">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="font-label-caps text-label-caps text-[#e4beb6] uppercase tracking-widest mt-3">
              SECONDS
            </span>
          </div>
        </div>


      </div>
    </section>
  );
};
