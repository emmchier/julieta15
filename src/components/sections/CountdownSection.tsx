import React from 'react';
import { Countdown, Divider } from '../svg';
import { Purple_Purse } from 'next/font/google';

const purplePurse = Purple_Purse({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

interface CountdownSectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export function CountdownSection({ timeLeft }: CountdownSectionProps) {
  return (
    <section
      className="h-[100vh] flex items-center justify-center"
      aria-labelledby="countdown-title"
    >
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-mobile-margin">
        <div
          className="flex justify-center mb-8"
          role="img"
          aria-label="Ícono de countdown"
        >
          <div className="svg-icon-responsive">
            <Countdown />
          </div>
        </div>

        <div className="section-content text-center mb-12">
          <p
            id="countdown-title"
            className="font-quando text-[#626262] text-lg mb-8"
          >
            Contando los días
          </p>

          <div
            className="counter-mobile-grid flex gap-2 w-full"
            role="timer"
            aria-live="polite"
            aria-label="Cuenta regresiva para el evento"
          >
            <div className="counter-item flex-1 h-[72px] rounded-lg bg-[#E5DDFC] px-2 pt-2 pb-2 flex flex-col items-center justify-between">
              <div
                className={`${purplePurse.className} text-[#8164C1] text-4xl leading-none`}
              >
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="font-quando text-[#626262] text-sm leading-none">
                días
              </div>
            </div>
            <div className="counter-item flex-1 h-[72px] rounded-lg bg-[#E5DDFC] px-2 pt-2 pb-2 flex flex-col items-center justify-between">
              <div
                className={`${purplePurse.className} text-[#8164C1] text-4xl leading-none`}
              >
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="font-quando text-[#626262] text-sm leading-none">
                hs
              </div>
            </div>
            <div className="counter-item flex-1 h-[72px] rounded-lg bg-[#E5DDFC] px-2 pt-2 pb-2 flex flex-col items-center justify-between">
              <div
                className={`${purplePurse.className} text-[#8164C1] text-4xl leading-none`}
              >
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="font-quando text-[#626262] text-sm leading-none">
                min
              </div>
            </div>
            <div className="counter-item flex-1 h-[72px] rounded-lg bg-[#E5DDFC] px-2 pt-2 pb-2 flex flex-col items-center justify-between">
              <div
                className={`${purplePurse.className} text-[#8164C1] text-4xl leading-none`}
              >
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="font-quando text-[#626262] text-sm leading-none">
                seg
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center mb-8"
          role="img"
          aria-label="Separador decorativo"
        >
          <div className="svg-icon-responsive">
            <Divider />
          </div>
        </div>
      </div>
    </section>
  );
}
