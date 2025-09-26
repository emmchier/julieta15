import React from 'react';
import { Button } from '../ui';
import { Date, Divider } from '../svg';
import { Purple_Purse } from 'next/font/google';

const purplePurse = Purple_Purse({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

interface DateSectionProps {
  onAgendarEvento: () => void;
}

export function DateSection({ onAgendarEvento }: DateSectionProps) {
  return (
    <section
      className="h-[100vh] relative flex items-center justify-center"
      aria-labelledby="date-title"
    >
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-mobile-margin">
        <div className="section-content text-center">
          {/* Top SVG (title flourish) */}
          <div
            className="mb-8 flex justify-center"
            role="img"
            aria-label="Ícono de fecha"
          >
            <div className="svg-icon-responsive">
              <Date />
            </div>
          </div>

          {/* Text stack */}
          <div className="mb-8">
            <p className="font-quando text-[#626262] text-lg">El día Sábado</p>
            <div className="my-2">
              <h2
                id="date-title"
                className={`${purplePurse.className} text-[#8164C1] text-4xl`}
              >
                13.12.2025
              </h2>
            </div>
            <p className="font-quando text-[#626262] text-xl">
              de 21:00 a 5:00 h
            </p>
          </div>

          {/* Divider SVG */}
          <div
            className="mb-8 flex justify-center"
            role="img"
            aria-label="Separador decorativo"
          >
            <div className="svg-icon-responsive">
              <Divider />
            </div>
          </div>

          {/* Outline Button */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={onAgendarEvento}
              className="h-12 px-6 border-[#626262] bg-transparent text-[#626262] hover:bg-[#f8f4f6] active:bg-[#f0e8ed] font-quando text-sm uppercase tracking-[0.1em]"
              aria-label="Agendar evento en calendario"
            >
              Agendar evento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
