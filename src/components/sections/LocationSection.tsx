import React from 'react';
import { Button } from '../ui';
import { Divider, Location } from '../svg';
import { Purple_Purse } from 'next/font/google';

const purplePurse = Purple_Purse({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

interface LocationSectionProps {
  onVerUbicacion: () => void;
}

export function LocationSection({ onVerUbicacion }: LocationSectionProps) {
  return (
    <section
      className="h-[100vh] flex items-center justify-center relative"
      aria-labelledby="location-title"
    >
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-mobile-margin">
        <div className="section-content text-center">
          <div
            className="flex justify-center mb-8"
            role="img"
            aria-label="Ícono de ubicación"
          >
            <div className="svg-icon-responsive">
              <Location />
            </div>
          </div>

          <div className="mb-8">
            <p className="font-quando text-[#626262] text-lg">El lugar</p>
            <div className="my-2">
              <h2
                id="location-title"
                className={`${purplePurse.className} text-[#8164C1] text-4xl uppercase`}
              >
                <span className="block lg:inline">Jano&apos;s</span>
                <span className="block lg:inline lg:ml-1">Darwin 2</span>
              </h2>
            </div>
            <div className="my-2">
              <p className="font-quando text-[#626262] text-xl">
                DARWIN 1351 | CABA
              </p>
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

          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={onVerUbicacion}
              className="h-12 px-6 border-[#626262] bg-transparent hover:bg-[#f8f4f6] active:bg-[#f0e8ed] text-[#626262] font-quando text-sm tracking-[0.1em] uppercase"
              aria-label="Ver ubicación en Google Maps"
            >
              Ver ubicación
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
